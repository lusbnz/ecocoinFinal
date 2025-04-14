import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Linking,
  Platform,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location';
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const stations = [
  {
    id: "1",
    name: "Cầu Giấy Station",
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
    name: "Hoàn Kiếm Station",
    address: "34 Tràng Tiền, Hoàn Kiếm, Hà Nội",
    latitude: 21.0285,
    longitude: 105.8542,
    status: "Empty",
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
    name: "Đống Đa Station",
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

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setUserLocation(location.coords);
    })();
  }, []);

  const renderCheckinItem = ({ item }) => (
    <View style={styles.checkinItem}>
      <Image source={{ uri: item.image }} style={styles.checkinImage} />
      <View style={styles.checkinContent}>
        <Text style={styles.checkinUser}>{item.user}</Text>
        <Text style={styles.checkinTime}>{item.time}</Text>
        <Text style={styles.checkinNote}>{item.note}</Text>
      </View>
    </View>
  );

  const goToMyLocation = () => {
    if (userLocation && mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }, 1000);
    }
  };

  const openDirections = () => {
    if (!selectedStation) return;
    
    const destination = `${selectedStation.latitude},${selectedStation.longitude}`;
    const url = Platform.select({
      ios: `maps://app?saddr=Current%20Location&daddr=${destination}`,
      android: `google.navigation:q=${destination}`
    });
    
    Linking.openURL(url).catch(err => {
      console.error('An error occurred', err);
      Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${destination}`);
    });
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: 21.0285,
          longitude: 105.8542,
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

      <TouchableOpacity style={styles.myLocationButton} onPress={goToMyLocation}>
        <Ionicons name="locate" size={24} color="#4e8d54" />
      </TouchableOpacity>

      {selectedStation && (
        <View style={styles.card}>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>{selectedStation.name}</Text>
            <Text style={styles.cardAddress}>{selectedStation.address}</Text>
            <Text style={styles.cardDetail}>
              Tình trạng: {selectedStation.status}
            </Text>
            <Text style={styles.cardDetail}>
              Số lượt quy đổi trong ngày: {selectedStation.exchanges}
            </Text>
            
            <TouchableOpacity style={styles.directionsButton} onPress={openDirections}>
              <Ionicons name="navigate" size={20} color="white" />
              <Text style={styles.directionsButtonText}>Chỉ đường</Text>
            </TouchableOpacity>
            
            <Text style={styles.checkinTitle}>Lịch sử Check-in:</Text>
          </View>

          <FlatList
            data={selectedStation.checkins}
            keyExtractor={(item) => item.id}
            renderItem={renderCheckinItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.checkinList}
            snapToInterval={width - 80}
            decelerationRate="fast"
            snapToAlignment="center"
          />

          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setSelectedStation(null)}
          >
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  marker: {
    backgroundColor: "#248A3D",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 20,
  },
  status: { color: "#fff", fontWeight: "bold" },
  card: {
    position: "absolute",
    bottom: 120,
    left: 20,
    right: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    flexDirection: "column",
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    maxHeight: 600,
  },
  cardImage: { width: "100%", height: 200, borderRadius: 8 },
  cardInfo: { marginTop: 10 },
  cardTitle: { fontWeight: "bold", fontSize: 18, marginBottom: 5 },
  cardAddress: { fontSize: 14, color: "#888", marginBottom: 10 },
  cardDetail: { fontSize: 14, color: "#333", marginVertical: 2 },
  checkinTitle: {
    fontWeight: "bold",
    marginTop: 15,
    fontSize: 16,
    marginBottom: 8,
  },
  checkinList: {
    paddingRight: 20,
  },
  checkinItem: {
    width: width - 80,
    marginLeft: 10,
    borderRadius: 12,
    backgroundColor: "#f8f8f8",
    overflow: "hidden",
    marginBottom: 10,
  },
  checkinImage: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  checkinContent: {
    padding: 12,
  },
  checkinUser: { fontWeight: "bold", fontSize: 14 },
  checkinTime: { fontSize: 12, color: "gray", marginTop: 2 },
  checkinNote: { fontSize: 14, marginTop: 4 },
  closeButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-end",
    marginTop: 8,
  },
  closeText: { fontSize: 16, fontWeight: "bold" },
  myLocationButton: {
    position: 'absolute',
    top: 200,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 30,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  directionsButton: {
    backgroundColor: '#4e8d54',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 5,
  },
  directionsButtonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default MapScreen;
