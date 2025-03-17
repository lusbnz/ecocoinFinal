import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 21.0285,
          longitude: 105.8542,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={{ latitude: 21.0285, longitude: 105.8542 }} />
      </MapView>

      <View style={styles.infoContainer}>
        <Text style={styles.greeting}>Xin chào!</Text>
        <Text style={styles.name}>Đinh Quốc Việt</Text>
      </View>

      <View style={styles.eventContainer}>
        <Text style={styles.eventTitle}>Sự kiện đang diễn ra</Text>
        <View style={styles.eventBox} />
        <Text style={styles.eventTitle}>Có thể bạn quan tâm</Text>
        <View style={styles.eventBox} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  map: { width: "100%", height: 250, borderTopLeftRadius: 20, borderTopRightRadius: 20 },
  infoContainer: { position: "absolute", top: 60, left: 20 },
  greeting: { fontSize: 18, fontWeight: "bold" },
  name: { fontSize: 20, fontWeight: "bold", color: "#3D8ED4" },
  eventContainer: { padding: 20 },
  eventTitle: { fontSize: 18, fontWeight: "bold", marginTop: 10, color: "#64A6F0" },
  eventBox: {
    height: 180,
    backgroundColor: "#ddd",
    borderRadius: 10,
    marginVertical: 10,
  },
});
