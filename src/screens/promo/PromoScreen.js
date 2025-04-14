import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const promoData = [
  {
    id: "1",
    title: "Giảm 50% khi đặt món",
    desc: "Nhận ngay ưu đãi giảm giá 50% cho tất cả các món ăn khi đặt hàng qua ứng dụng trong khung giờ vàng từ 12:00 - 14:00 và 18:00 - 20:00.",
    image:
      "https://images.pexels.com/photos/13003306/pexels-photo-13003306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "2",
    title: "Miễn phí giao hàng",
    desc: "Đặt hàng ngay hôm nay và tận hưởng ưu đãi miễn phí giao hàng cho tất cả các đơn hàng từ 100.000đ trở lên, áp dụng trên toàn quốc.",
    image:
      "https://images.pexels.com/photos/13003306/pexels-photo-13003306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "3",
    title: "Giảm 20% cho đơn đầu tiên",
    desc: "Lần đầu tiên đặt hàng? Nhập mã NEW20 để nhận ngay giảm giá 20% cho đơn hàng đầu tiên của bạn. Không giới hạn giá trị đơn hàng.",
    image:
      "https://images.pexels.com/photos/13003306/pexels-photo-13003306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "4",
    title: "Giảm 10% cho đơn hàng",
    desc: "Khách hàng thân thiết sẽ nhận ngay mã giảm giá 10% cho đơn hàng tiếp theo sau khi hoàn tất một đơn hàng bất kỳ.",
    image:
      "https://images.pexels.com/photos/13003306/pexels-photo-13003306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "5",
    title: "Ưu đãi 10% khi đặt combo",
    desc: "Mua combo 2 món trở lên sẽ được giảm ngay 10%. Hãy thử ngay các set combo ngon miệng và tiết kiệm hơn!",
    image:
      "https://images.pexels.com/photos/13003306/pexels-photo-13003306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const sliderImages = [
  "https://images.pexels.com/photos/13003306/pexels-photo-13003306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/31116121/pexels-photo-31116121/free-photo-of-nhin-t-tren-xu-ng-nh-ng-chi-c-banh-quy-d-ng-ngon-tuy-t-tren-n-n-tr-ng.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/25749304/pexels-photo-25749304/free-photo-of-trang-mi-ng-ng-t-kem-n-ng-banh.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

export default function PromoScreen({ navigation }) {
  const [selectedTab, setSelectedTab] = useState("mã");
  const scrollRef = useRef(null);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="#888" style={styles.icon} />
        <TextInput placeholder="Search" style={styles.searchInput} />
        <Ionicons name="mic-outline" size={20} color="#888" />
      </View>

      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.slider}
      >
        {sliderImages.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={styles.slideImage}
          />
        ))}
      </ScrollView>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton]}
          onPress={() => setSelectedTab("mã")}
        >
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: "#248A3D",
              borderRadius: 100,
            }}
          />
          <View style={{ marginLeft: 10, flexDirection: "column" }}>
            <Text style={styles.tabText}>Nhập mã</Text>
            <Text style={styles.tabDesc}>Mã ưu đãi</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton]}
          onPress={() => navigation.navigate("MyCoupons")}
        >
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: "#248A3D",
              borderRadius: 100,
            }}
          />
          <View style={{ marginLeft: 10, flexDirection: "column" }}>
            <Text style={styles.tabText}>Ưu đãi của tôi</Text>
            <Text style={styles.tabDesc}>Có 20 ưu đãi</Text>
          </View>
        </TouchableOpacity>
      </View>

      <FlatList
        data={promoData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 20,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <ImageBackground
              style={styles.promoCard}
              source={{ uri: item.image }}
              imageStyle={{ borderRadius: 20 }}
            >
              <Text style={styles.promoText}>{item.title}</Text>
              <TouchableOpacity
                style={styles.ctaButton}
                onPress={() => {
                  navigation.navigate("BannerDetail", {
                    bannerId: item.id,
                    imageUrl: item.image,
                  });
                }}
              >
                <Text style={styles.ctaText}>Thu thập</Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 60,
    marginBottom: 80,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 40,
    marginVertical: 10,
  },
  icon: { marginRight: 8 },
  searchInput: { flex: 1, fontSize: 16 },
  slider: { height: 160, marginVertical: 10, minHeight: 160 },
  slideImage: {
    width: width - 32,
    height: 160,
    borderRadius: 20,
    marginRight: 10,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    height: 60,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    marginHorizontal: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tabText: { fontSize: 14, fontWeight: "bold" },
  tabDesc: { fontSize: 10, color: "#888" },
  promoCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    marginVertical: 10,
    height: 160,
  },
  promoText: { fontSize: 16, fontWeight: "800", color: "white" },
  ctaButton: {
    backgroundColor: "#248A3D",
    paddingHorizontal: 16,
    borderRadius: 20,
    height: 40,
    marginTop: 90,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  ctaText: { color: "white", fontWeight: "bold" },
});
