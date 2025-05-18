import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Linking,
  Platform,
  SafeAreaView,
  Animated,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { Ionicons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";
import CheckinBlock from "../../component/CheckinBlock"

const { width } = Dimensions.get("window");

const stations = [
  {
    id: "1",
    name: "Trạm Cầu Giấy",
    address: "Số 2, Lê Văn Thiêm, Thanh Xuân, Hà Nội",
    latitude: 21.0285,
    longitude: 105.7823,
    status: "50%",
    exchanges: 56,
    checkins: [
      {
        id: "c1",
        user: "Nguyễn Văn A",
        time: "10:30 AM",
        note: "Đã nộp 5 chai nhựa",
        image:
          "https://images.pexels.com/photos/3184457/pexels-photo-3184457.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "c2",
        user: "Trần Thị B",
        time: "11:00 AM",
        note: "Đã nộp 3 hộp giấy",
        image:
          "https://images.pexels.com/photos/4505167/pexels-photo-4505167.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
  },
  {
    id: "2",
    name: "Trạm Hoàn Kiếm",
    address: "34 Tràng Tiền, Hoàn Kiếm, Hà Nội",
    latitude: 21.0285,
    longitude: 105.8542,
    status: "Trống",
    exchanges: 22,
    checkins: [
      {
        id: "c3",
        user: "Lê Văn C",
        time: "09:15 AM",
        note: "Đã nộp 10 lon nhôm",
        image:
          "https://images.pexels.com/photos/4506217/pexels-photo-4506217.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
  },
  {
    id: "3",
    name: "Trạm Đống Đa",
    address: "Ngõ 82, Chùa Láng, Đống Đa, Hà Nội",
    latitude: 21.0188,
    longitude: 105.8295,
    status: "80%",
    exchanges: 77,
    checkins: [
      {
        id: "c4",
        user: "Phạm Thị D",
        time: "08:45 AM",
        note: "Đã nộp 7 chai nhựa",
        image:
          "https://images.pexels.com/photos/3184457/pexels-photo-3184457.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        id: "c5",
        user: "Hoàng Văn E",
        time: "09:30 AM",
        note: "Đã nộp 2 túi nilon",
        image:
          "https://images.pexels.com/photos/4505167/pexels-photo-4505167.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
  },
];

const MapScreen = () => {
  const [selectedStation, setSelectedStation] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const mapRef = useRef(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const cardSlideAnim = useRef(new Animated.Value(300)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Quyền truy cập vị trí bị từ chối");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setUserLocation(location.coords);
      if (mapRef.current) {
        mapRef.current.animateToRegion(
          {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          },
          1000
        );
      }
    })();
  }, []);

  useEffect(() => {
    if (selectedStation) {
      Animated.timing(cardSlideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(cardSlideAnim, {
        toValue: 300,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [selectedStation]);

  const goToMyLocation = () => {
    if (userLocation && mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude: userLocation.latitude,
          longitude: userLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        },
        1000
      );
    }
  };

  const openDirections = () => {
    if (!selectedStation) return;

    const destination = `${selectedStation.latitude},${selectedStation.longitude}`;
    const url = Platform.select({
      ios: `maps://app?saddr=Current%20Location&daddr=${destination}`,
      android: `google.navigation:q=${destination}`,
      default: `https://www.google.com/maps/dir/?api=1&destination=${destination}`,
    });

    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          return Linking.openURL(
            `https://www.google.com/maps/dir/?api=1&destination=${destination}`
          );
        }
      })
      .catch((err) => {
        console.error("Error opening directions:", err);
        Linking.openURL(
          `https://www.google.com/maps/dir/?api=1&destination=${destination}`
        );
      });
  };

  const renderCheckin = ({ item }) => (
    <CheckinBlock data={item} isProfile={false} />
  );

  return (
    <Animated.View
      style={[
        styles.container,
        { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
      ]}
    >
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: userLocation?.latitude || 21.0285,
          longitude: userLocation?.longitude || 105.8542,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        showsUserLocation={true}
        showsMyLocationButton={false}
      >
        {stations.map((station) => (
          <Marker
            key={station.id}
            coordinate={{
              latitude: station.latitude,
              longitude: station.longitude,
            }}
            onPress={() => setSelectedStation(station)}
          >
            <View style={styles.marker}>
              <Text style={styles.status}>{station.status}</Text>
            </View>
          </Marker>
        ))}
      </MapView>

      <TouchableOpacity
        style={styles.myLocationButton}
        onPress={goToMyLocation}
        activeOpacity={0.7}
      >
        <Ionicons name="locate" size={20} color="#00623A" />
      </TouchableOpacity>

      {errorMsg && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errorMsg}</Text>
        </View>
      )}

      {selectedStation && (
        <Animated.View
          style={[styles.card, { transform: [{ translateY: cardSlideAnim }] }]}
        >
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setSelectedStation(null)}
            activeOpacity={0.7}
          >
            <Ionicons name="close" size={20} color="#222524" />
          </TouchableOpacity>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>{selectedStation.name}</Text>
            <Text style={styles.cardAddress}>{selectedStation.address}</Text>
            <Text style={styles.cardDetail}>
              <Text style={{ fontWeight: "600" }}>Tình trạng: </Text>
              {selectedStation.status}
            </Text>
            <Text style={styles.cardDetail}>
              <Text style={{ fontWeight: "600" }}>
                Số lượt quy đổi trong ngày:{" "}
              </Text>
              {selectedStation.exchanges}
            </Text>
            <TouchableOpacity
              style={styles.directionsButton}
              onPress={openDirections}
              activeOpacity={0.7}
            >
              <Ionicons name="navigate" size={20} color="#FFFFFF" />
              <Text style={styles.directionsButtonText}>Chỉ đường</Text>
            </TouchableOpacity>
            <Text style={styles.checkinTitle}>Lịch sử Check-in</Text>
            <FlatList
              data={selectedStation.checkins}
              renderItem={renderCheckin}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.checkinList}
              ListEmptyComponent={
                <Text style={styles.emptyText}>Chưa có check-in</Text>
              }
            />
          </View>
        </Animated.View>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F0F2F5",
  },
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  marker: {
    backgroundColor: "#00623A",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  status: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "600",
  },
  myLocationButton: {
    position: "absolute",
    top: 56,
    right: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  errorContainer: {
    position: "absolute",
    top: 80,
    left: 16,
    right: 16,
    backgroundColor: "#FF4D4F",
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
  },
  errorText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  card: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    maxHeight: "70%",
  },
  cardInfo: {
    marginTop: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222524",
    marginBottom: 8,
  },
  cardAddress: {
    fontSize: 14,
    color: "#888",
    marginBottom: 12,
  },
  cardDetail: {
    fontSize: 14,
    color: "#222524",
    marginBottom: 8,
  },
  checkinTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222524",
    marginTop: 12,
    marginBottom: 8,
  },
  checkinList: {
    gap: 12,
    paddingHorizontal: 4,
    paddingBottom: 8,
  },
  emptyText: {
    fontSize: 14,
    color: "#888",
    paddingHorizontal: 12,
  },
  closeButton: {
    position: "absolute",
    top: 16,
    right: 16,
    backgroundColor: "#F0F2F5",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 36,
    height: 36,
  },
  directionsButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00623A",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginTop: 12,
    marginBottom: 8,
  },
  directionsButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 8,
  },
});

export default MapScreen;
