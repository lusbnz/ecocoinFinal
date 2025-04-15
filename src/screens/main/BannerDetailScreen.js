import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
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
    description: "Đây là mô tả",
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
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: "#ffffff",
            borderRadius: 100,
            alignItems: "center",
            justifyContent: "center",
            padding: 12,
            width: 40,
            height: 40,
          }}
        >
          <Ionicons name="chevron-back" size={16} color="#00623A" />
        </TouchableOpacity>

        <Text
          style={{
            marginLeft: -32,
            fontWeight: "bold",
            fontSize: "16",
            fontFamily: "Inter",
          }}
        >
          Thông tin Voucher
        </Text>
        <View></View>
      </View>
      <Image source={{ uri: banner.image }} style={styles.bannerImage} />
      <Text style={styles.description}>{banner.description}</Text>

      <FlatList
        horizontal
        data={banner.pointOptions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelectedPoint(item.id)}
          >
            <ImageBackground
              source={{
                uri: "https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              }}
              resizeMode="cover"
              style={styles.pointOption}
              imageStyle={{ borderRadius: 12 }}
            >
              <Text
                style={[
                  styles.pointText,
                  selectedPoint === item.id && styles.selectedOption,
                ]}
              >
                {item.point} Điểm
              </Text>
            </ImageBackground>
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
  container: { flex: 1, padding: 20, backgroundColor: "#fff", paddingTop: 50 },
  bannerImage: {
    width: "100%",
    height: 150,
    borderRadius: 20,
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
    borderRadius: 20,
    marginRight: 10,
    height: 200,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  selectedOption: { backgroundColor: "#00623A", color: "#fff" },
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
    backgroundColor: "#00623A",
    padding: 15,
    marginBottom: 100,
    borderRadius: 40,
    alignItems: "center",
  },
  disabledButton: { backgroundColor: "#ccc" },
  redeemText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default BannerDetailScreen;
