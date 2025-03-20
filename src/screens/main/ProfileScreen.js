import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  FlatList,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

const checkinImages = [
  {
    id: "1",
    image:
      "https://images.pexels.com/photos/30852439/pexels-photo-30852439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "2",
    image:
      "https://images.pexels.com/photos/31139933/pexels-photo-31139933/free-photo-of-quan-an-d-ng-ph-truy-n-th-ng-nh-t-b-n-vao-ban-ngay.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "3",
    image:
      "https://images.pexels.com/photos/31151451/pexels-photo-31151451/free-photo-of-con-d-ng-quanh-co-tuy-t-d-p-qua-nh-ng-ng-n-d-i-xanh-t-i.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function ProfileScreen() {
  const flatListRef = useRef(null);
  const currentIndex = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (flatListRef.current) {
        currentIndex.current =
          (currentIndex.current + 1) % checkinImages.length;
        flatListRef.current.scrollToIndex({
          index: currentIndex.current,
          animated: true,
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LinearGradient colors={["#3D8ED4", "#E5E5E5"]} style={styles.gradient}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.profileInfo}>
            <Image
              source={{
                uri: "https://images.pexels.com/photos/30894155/pexels-photo-30894155/free-photo-of-chang-trai-tr-m-t-trong-b-i-c-nh-do-th.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              }}
              style={styles.avatar}
            />
            <View>
              <View style={styles.nameContainer}>
                <Text style={styles.name}>Đinh Quốc Việt</Text>
                <FontAwesome5
                  name="medal"
                  size={20}
                  color="#FFD700"
                  style={styles.badgeIcon}
                />
              </View>
              <Text style={styles.rank}>Thành viên Vàng</Text>
            </View>
          </View>
        </View>
        <View style={styles.pointsContainer}>
          <Text style={styles.pointsText}>873 Điểm tích lũy</Text>
          <MaterialIcons name="monetization-on" size={24} color="#F4A261" />
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.detailsHeader}>
            <Text style={styles.sectionTitle}>Thông tin chi tiết</Text>
            <MaterialIcons name="edit" size={22} color="#3D8ED4" />
          </View>
          <Text>Số điện thoại: 0353808048</Text>
          <Text>Giới tính: Nam</Text>
          <Text>Tuổi: 22</Text>

          <Text style={styles.sectionTitleCheckin}>Checkin:</Text>
          <FlatList
            ref={flatListRef}
            data={checkinImages}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Image source={{ uri: item.image }} style={styles.checkinImage} />
            )}
          />
        </View>

        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem}>
            <Text>Mã ưu đãi của tôi</Text>
            <Ionicons name="chevron-forward" size={18} color="#888" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text>Lịch sử hoạt động</Text>
            <Ionicons name="chevron-forward" size={18} color="#888" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text>Feedback</Text>
            <Ionicons name="chevron-forward" size={18} color="#888" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text>Ngôn ngữ</Text>
            <Ionicons name="chevron-forward" size={18} color="#888" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text>Đổi mật khẩu</Text>
            <Ionicons name="chevron-forward" size={18} color="#888" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutText}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 50,
  },
  header: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 20,
    padding: 20,
    alignItems: "start",
    backgroundColor: "#FFFFFF",
  },
  profileInfo: { flexDirection: "row", alignItems: "center" },
  avatar: { width: 60, height: 60, borderRadius: 30, marginRight: 10 },
  name: { fontSize: 18, fontWeight: "bold", color: "#3D8ED4" },
  rank: { fontSize: 14, color: "#888" },
  pointsContainer: {
    padding: 20,
    alignItems: "start",
    backgroundColor: "#FFFFFF",
    marginTop: 20,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#eee",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pointsText: { fontSize: 18, fontWeight: "bold", color: "#3D8ED4" },
  detailsContainer: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    marginTop: 20,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#eee",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    gap: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3D8ED4",
    marginBottom: 5,
  },
  sectionTitleCheckin: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3D8ED4",
    marginBottom: 5,
    marginTop: 20,
  },
  checkinImage: {
    width: width - 40,
    height: 180,
    borderRadius: 20,
    marginRight: 10,
  },
  menuContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginBottom: 120,
    backgroundColor: "#FFFFFF",
    marginTop: 20,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 20,
  },
  menuItem: {
    paddingVertical: 25,
    borderBottomWidth: 2,
    borderBottomColor: "#eee",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logoutButton: {
    padding: 15,
    width: "50%",
    backgroundColor: "transparent",
    borderRadius: 20,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#eee",
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
  },
  logoutText: {
    color: "#3D8ED4",
  },
  detailsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nameContainer: { flexDirection: "row", alignItems: "center", gap: 10 },
});
