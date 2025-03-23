import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ActivityIndicator } from "react-native-paper";

const BannerDetailScreen = ({ route, navigation }) => {
  const { bannerId, imageUrl } = route.params;
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const banner = {
    id: bannerId,
    image: imageUrl,
    description: "Description",
    detail: "Grab là một công ty công nghệ cung cấp dịch vụ vận chuyển...",
    conditions: ["Sở hữu thẻ thành viên bạc", "Thanh toán bằng tiền mặt"],
    pointOptions: [
      { id: 1, point: 500 },
      { id: 2, point: 1000 },
      { id: 3, point: 1500 },
      { id: 4, point: 2000 },
    ],
  };

  return loading ? (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="#3D8ED4" />
    </View>
  ) : (
    <ScrollView style={styles.container}>
      <Image source={{ uri: banner.image }} style={styles.bannerImage} />
      <Text style={styles.description}>{banner.description}</Text>

      <FlatList
        horizontal
        data={banner.pointOptions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelectedPoint(item.id)}
            style={styles.pointOption}
          >
            <Text
              style={[
                styles.pointText,
                selectedPoint === item.id && styles.selectedOption,
              ]}
            >
              {item.point} Point
            </Text>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.sectionTitle}>Thông tin chi tiết</Text>
      <Text style={styles.detailText}>{banner.detail}</Text>

      <Text style={styles.sectionTitle}>Điều khoản ưu đãi</Text>
      {banner.conditions.map((condition, index) => (
        <Text key={index} style={styles.conditionText}>
          • {condition}
        </Text>
      ))}

      <TouchableOpacity
        style={[styles.redeemButton, !selectedPoint && styles.disabledButton]}
        disabled={!selectedPoint}
        onPress={() =>
          navigation.navigate("TransactionDetail", { banner: banner })
        }
      >
        <Text style={styles.redeemText}>Quy đổi</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff", paddingTop: 0 },
  bannerImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 30,
  },
  description: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
  pointOption: {
    backgroundColor: "#ddd",
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
    height: 200,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  selectedOption: { backgroundColor: "#64A6F0", color: "#fff" },
  pointText: {
    fontSize: 14,
    fontWeight: "semibold",
    color: "#000",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 10,
  },
  detailText: {
    fontSize: 14,
    color: "#555",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingBottom: 30,
  },
  conditionText: { fontSize: 14, color: "#777", marginBottom: 5 },
  redeemButton: {
    marginTop: 30,
    backgroundColor: "#64A6F0",
    padding: 15,
    marginBottom: 100,
    borderRadius: 40,
    alignItems: "center",
  },
  disabledButton: { backgroundColor: "#ccc" },
  redeemText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default BannerDetailScreen;
