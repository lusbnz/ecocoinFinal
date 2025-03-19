import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  FlatList,
  Dimensions,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const sliderData = [
  {
    id: "1",
    image:
      "https://images.pexels.com/photos/11733089/pexels-photo-11733089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "2",
    image:
      "https://images.pexels.com/photos/3266777/pexels-photo-3266777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "3",
    image:
      "https://images.pexels.com/photos/9531923/pexels-photo-9531923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const SliderItem = ({ item }) => (
  <View style={styles.slide}>
    <Image source={{ uri: item.image }} style={styles.slideImage} />
  </View>
);

export default function HomeScreen() {
  const flatListRef = useRef(null);
  const scrollY = useRef(new Animated.Value(0)).current;
  const currentIndex = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (flatListRef.current) {
        currentIndex.current = (currentIndex.current + 1) % sliderData.length;
        flatListRef.current.scrollToIndex({
          index: currentIndex.current,
          animated: true,
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.mapContainer,
          {
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [0, 200],
                  outputRange: [0, -500],
                  extrapolate: "clamp",
                }),
              },
            ],
          },
        ]}
      >
        <View style={styles.infoContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.greeting}>Xin chào!</Text>
            <Text style={styles.name}>Đinh Quốc Việt</Text>
          </View>
          <Ionicons name="notifications-outline" size={24} color="#3D8ED4" />
        </View>

        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 21.0285,
            longitude: 105.8542,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          <Marker
            coordinate={{ latitude: 21.0285, longitude: 105.8542 }}
            title="Hồ Hoàn Kiếm"
          />
          <Marker
            coordinate={{ latitude: 21.0376, longitude: 105.8142 }}
            title="Lăng Bác"
          />
          <Marker
            coordinate={{ latitude: 21.0358, longitude: 105.8285 }}
            title="Chùa Một Cột"
          />
          <Marker
            coordinate={{ latitude: 21.0282, longitude: 105.8354 }}
            title="Văn Miếu - Quốc Tử Giám"
          />
          <Marker
            coordinate={{ latitude: 21.057, longitude: 105.825 }}
            title="Hồ Tây"
          />
          <Marker
            coordinate={{ latitude: 21.04, longitude: 105.864 }}
            title="Cầu Long Biên"
          />
        </MapView>
      </Animated.View>

      <Animated.ScrollView
        style={[
          styles.content,
          {
            marginTop: scrollY.interpolate({
              inputRange: [0, 200],
              outputRange: [250, 0],
              extrapolate: "clamp",
            }),
          },
        ]}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <FlatList
          ref={flatListRef}
          data={sliderData}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <SliderItem item={item} />}
          style={styles.slider}
        />

        <View style={styles.eventContainer}>
          <Text style={styles.eventTitle}>Sự kiện đang diễn ra</Text>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/349600/pexels-photo-349600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            }}
            style={styles.eventBox}
          />
          <Text style={styles.viewMore}>Xem thêm</Text>
          <Text style={styles.eventTitle}>Có thể bạn quan tâm</Text>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/28954361/pexels-photo-28954361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            }}
            style={styles.eventBox}
          />
          <Image
            source={{
              uri: "https://images.pexels.com/photos/23709338/pexels-photo-23709338/free-photo-of-th-c-v-t-hoa-tan-la-d-c-than.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            }}
            style={styles.eventBox}
          />
          <Text style={styles.viewMore}>Xem thêm</Text>
          <Text style={styles.eventTitle}>Phân loại rác thải như thế nào?</Text>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/16241634/pexels-photo-16241634/free-photo-of-thien-nhien-th-c-v-t-la-mau-xanh-la.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            }}
            style={styles.eventBox}
          />
          <Text style={styles.viewMore}>Xem thêm</Text>
        </View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  mapContainer: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 250,
    zIndex: 1,
  },

  map: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  content: {
    zIndex: 2,
    marginTop: 250,
  },

  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "transparent",
    position: "absolute",
    top: 40,
    width: "100%",
    zIndex: 2,
  },
  textContainer: {
    flexDirection: "column",
  },
  greeting: { fontSize: 18, fontWeight: "bold" },
  name: { fontSize: 20, fontWeight: "bold", color: "#3D8ED4" },

  slider: { marginTop: 10 },
  slide: { width, alignItems: "center", justifyContent: "center" },
  slideImage: { width: 350, height: 200, borderRadius: 10 },

  eventContainer: { padding: 20, marginBottom: 95 },
  eventTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    color: "#64A6F0",
  },
  viewMore: {
    fontSize: 14,
    fontWeight: "semibold",
    alignSelf: "flex-end",
    marginRight: 10,
    color: "#64A6F0",
  },
  eventBox: {
    height: 180,
    backgroundColor: "#ddd",
    borderRadius: 10,
    marginVertical: 10,
  },
});
