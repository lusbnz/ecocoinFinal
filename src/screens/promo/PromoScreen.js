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
    image:
      "https://images.pexels.com/photos/13003306/pexels-photo-13003306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "2",
    title: "Miễn phí giao hàng",
    image:
      "https://images.pexels.com/photos/13003306/pexels-photo-13003306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "3",
    title: "Giảm 20% cho đơn đầu tiên",
    image:
      "https://images.pexels.com/photos/13003306/pexels-photo-13003306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "4",
    title: "Giảm 10% cho đơn đầu tiên",
    image:
      "https://images.pexels.com/photos/13003306/pexels-photo-13003306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "5",
    title: "Giảm 10% cho đơn đầu tiên",
    image:
      "https://images.pexels.com/photos/13003306/pexels-photo-13003306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "6",
    title: "Giảm 10% cho đơn đầu tiên",
    image:
      "https://images.pexels.com/photos/13003306/pexels-photo-13003306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "7",
    title: "Giảm 10% cho đơn đầu tiên",
    image:
      "https://images.pexels.com/photos/13003306/pexels-photo-13003306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "8",
    title: "Giảm 10% cho đơn đầu tiên",
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
              width: 30,
              height: 30,
              backgroundColor: "#3D8ED4",
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
              width: 30,
              height: 30,
              backgroundColor: "#3D8ED4",
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
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
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
    borderRadius: 10,
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
    borderRadius: 8,
    marginHorizontal: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  tabText: { fontSize: 14, fontWeight: "500" },
  tabDesc: { fontSize: 10, color: "#888" },
  promoCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    marginVertical: 10,
    height: 160,
  },
  promoText: { fontSize: 16, fontWeight: "bold", color: "white" },
  ctaButton: {
    backgroundColor: "#3D8ED4",
    paddingHorizontal: 16,
    borderRadius: 10,
    height: 30,
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  ctaText: { color: "white", fontWeight: "normal" },
});
