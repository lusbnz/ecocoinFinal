import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import VoucherBlock from "../../component/VoucherBlock";
import AdsBlock from "../../component/AdsBlock";

const { width } = Dimensions.get("window");

export default function PromoScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="#888" style={styles.icon} />
        <TextInput placeholder="Search" style={styles.searchInput} />
        <Ionicons name="mic-outline" size={20} color="#888" />
      </View>

      <AdsBlock navigation={navigation} />

      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tabButton]}>
          <View
            style={{
              backgroundColor: "#00623A",
              borderRadius: 100,
              alignItems: "center",
              justifyContent: "center",
              padding: 12,
              width: 40,
              height: 40,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 1,
              elevation: 3,
            }}
          >
            <Ionicons name="gift" size={16} color="#ffffff" />
          </View>
          <View style={{ marginLeft: 10, flexDirection: "column", gap: "2" }}>
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
              backgroundColor: "#00623A",
              borderRadius: 100,
              alignItems: "center",
              justifyContent: "center",
              padding: 12,
              width: 40,
              height: 40,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 1,
              elevation: 3,
            }}
          >
            <Ionicons name="gift" size={16} color="#ffffff" />
          </View>
          <View style={{ marginLeft: 10, flexDirection: "column", gap: "2" }}>
            <Text style={styles.tabText}>Ưu đãi của tôi</Text>
            <Text style={styles.tabDesc}>Có 20 ưu đãi</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text style={styles.eventTitle}>Có thể bạn quan tâm</Text>
      </View>

      <VoucherBlock
        navigation={navigation}
        uri={
          "https://images.pexels.com/photos/28954361/pexels-photo-28954361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
        id={"3"}
        title={"Giảm giá 20%"}
        desc={"Tree Boom"}
        pricing={"500 EP"}
      />

      <VoucherBlock
        uri={
          "https://media.istockphoto.com/id/1435661969/vi/anh/c%E1%BA%ADn-c%E1%BA%A3nh-nh%E1%BB%AFng-%C4%91%E1%BB%A9a-tr%E1%BA%BB-%C4%91ang-%C3%B4m-m%E1%BB%99t-h%C3%A0nh-tinh-tr%C3%AAn-b%C3%A3i-bi%E1%BB%83n.jpg?s=2048x2048&w=is&k=20&c=H5i6ux1IxKhdG1TAhcGPVQ93KiEXqsOTsuy101GBgRQ="
        }
        id={"4"}
        title={"Miễn phí vận chuyển"}
        desc={"Uneti Voucher"}
        pricing={"350 EP"}
      />

      <VoucherBlock
        navigation={navigation}
        uri={
          "https://images.pexels.com/photos/23709338/pexels-photo-23709338/free-photo-of-th-c-v-t-hoa-tan-la-d-c-than.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
        id={"8"}
        title={"Học bổng 50%"}
        desc={"Uneti Voucher"}
        pricing={"2.500 EP"}
      />

      <VoucherBlock
        navigation={navigation}
        uri={
          "https://media.istockphoto.com/id/1344923073/vi/anh/m%E1%BB%99t-h%E1%BB%93-n%C6%B0%E1%BB%9Bc-c%C3%B3-h%C3%ACnh-d%E1%BA%A5u-ch%C3%A2n-con-ng%C6%B0%E1%BB%9Di-%E1%BB%9F-gi%E1%BB%AFa-m%E1%BB%99t-khu-r%E1%BB%ABng-t%C6%B0%C6%A1i-t%E1%BB%91t-nh%C6%B0-m%E1%BB%99t-ph%C3%A9p-%E1%BA%A9n-d%E1%BB%A5-cho-t%C3%A1c.jpg?s=2048x2048&w=is&k=20&c=4xcCL-r94rsUOoHXwDwQuS2Zw3ImfIo3RFNkIeSkHdg="
        }
        id={"9"}
        title={"Vip Member"}
        desc={"Hanoi Xanh"}
        pricing={"1.000 EP"}
      />

      <VoucherBlock
        navigation={navigation}
        uri={
          "https://media.istockphoto.com/id/968853036/vi/anh/khung-c%E1%BA%A3nh-%C4%91%E1%BB%89nh-cao-c%E1%BB%A7a-m%E1%BB%99t-khu-r%E1%BB%ABng-xanh-tr%E1%BA%BB-v%C3%A0o-m%C3%B9a-xu%C3%A2n-ho%E1%BA%B7c-m%C3%B9a-h%C3%A8.jpg?s=2048x2048&w=is&k=20&c=x22a_7wMvtbcqyt4jb9fk-kiG1UHLwCnZZBE4pLSA9Y="
        }
        id={"10"}
        title={"Dọn vệ sinh miễn phí"}
        desc={"Uneti Voucher"}
        pricing={"450 EP"}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e5e5",
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 60,
    marginBottom: 80,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 40,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 3,
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
    marginTop: 10,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 15,
    marginHorizontal: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 3,
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
    backgroundColor: "#00623A",
    paddingHorizontal: 16,
    borderRadius: 20,
    height: 4,
    marginTop: 90,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  ctaText: { color: "white", fontWeight: "bold" },
  eventTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222524",
    fontFamily: "Inter",
  },
});
