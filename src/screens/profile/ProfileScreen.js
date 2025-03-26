import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

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

export default function ProfileScreen({ navigation }) {
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
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileInfo}>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/30894155/pexels-photo-30894155/free-photo-of-chang-trai-tr-m-t-trong-b-i-c-nh-do-th.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            }}
            style={styles.avatar}
          />
          <View style={styles.profileDetails}>
            <Text style={styles.name}>Đinh Quốc Việt</Text>
            <Text style={styles.rank}>Thành viên Vàng</Text>
          </View>
        </View>
      </View>
      <View style={styles.pointsContainer}>
        <Text style={styles.pointsText}>873 Điểm tích lũy</Text>
        <MaterialIcons name="monetization-on" size={24} color="#4F7566" />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailsHeader}>
          <Text style={styles.sectionTitle}>Thông tin chi tiết</Text>
          <MaterialIcons name="edit" size={18} color="#222524" />
        </View>
        <Text style={styles.detailsContent}>Số điện thoại: 0353808048</Text>
        <Text style={styles.detailsContent}>Giới tính: Nam</Text>
        <Text style={styles.detailsContent}>Tuổi: 22</Text>

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
        <TouchableOpacity
          style={[
            styles.menuItem,
            { borderBottomWidth: 1, borderBottomColor: "#DEDEDE" },
          ]}
          onPress={() => navigation.navigate("Promo")}
        >
          <Text style={styles.menuText}>Mã ưu đãi của tôi</Text>
          <Ionicons name="chevron-forward" size={18} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate("History")}
        >
          <Text style={styles.menuText}>Lịch sử hoạt động</Text>
          <Ionicons name="chevron-forward" size={18} color="#888" />
        </TouchableOpacity>
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={[
            styles.menuItem,
            { borderBottomWidth: 1, borderBottomColor: "#DEDEDE" },
          ]}
        >
          <Text style={styles.menuText}>Feedback</Text>
          <Ionicons name="chevron-forward" size={18} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.menuItem,
            { borderBottomWidth: 1, borderBottomColor: "#DEDEDE" },
          ]}
        >
          <Text style={styles.menuText}>Ngôn ngữ</Text>
          <Ionicons name="chevron-forward" size={18} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Đổi mật khẩu</Text>
          <Ionicons name="chevron-forward" size={18} color="#888" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={styles.logoutText}>Đăng xuất</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#FFFFFF",
  },
  header: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "start",
    backgroundColor: "#EEEEEE",
  },
  profileInfo: { flexDirection: "row", alignItems: "center" },
  avatar: { width: 60, height: 60, borderRadius: 30, marginRight: 10 },
  profileDetails: { flexDirection: "column", alignItems: "start", gap: 5 },
  name: { fontSize: 18, fontWeight: "bold", color: "#222524" },
  rank: { fontSize: 14, color: "#434448" },
  pointsContainer: {
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#EEEEEE",
    marginTop: 20,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pointsText: { fontSize: 18, fontWeight: "bold", color: "#4F7566" },
  detailsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#EEEEEE",
    marginTop: 20,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#eee",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    gap: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#222524",
  },
  detailsContent: { fontSize: 14, color: "#434448" },
  sectionTitleCheckin: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#222524",
    marginTop: 10,
  },
  checkinImage: {
    width: width - 80,
    height: 180,
    borderRadius: 15,
    marginRight: 10,
  },
  menuContainer: {
    backgroundColor: "#EEEEEE",
    marginTop: 20,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 15,
  },
  menuItem: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  menuText: { fontSize: 14, color: "#222524", fontWeight: "bold" },
  logoutButton: {
    padding: 10,
    width: "40%",
    backgroundColor: "#4F7566",
    borderRadius: 20,
    alignItems: "center",
    marginTop: 50,
    marginBottom: 200,
    marginLeft: "auto",
    marginRight: "auto",
  },
  logoutText: {
    color: "#FFFFFF",
  },
  detailsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nameContainer: { flexDirection: "row", alignItems: "center", gap: 10 },
});
