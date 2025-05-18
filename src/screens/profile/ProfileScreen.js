import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Animated,
  SafeAreaView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import CheckinBlock from "../../component/CheckinBlock";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

// Sample check-in data (replace with actual data)
const checkinData = [
  {
    id: "1",
    title: "Check-in Quán Cà Phê",
    image:
      "https://images.pexels.com/photos/30852439/pexels-photo-30852439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-05-15",
  },
  {
    id: "2",
    title: "Check-in Nhà Hàng",
    image:
      "https://images.pexels.com/photos/31139933/pexels-photo-31139933/free-photo-of-quan-an-d-ng-ph-truy-n-th-ng-nh-t-b-n-vao-ban-ngay.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-05-16",
  },
  {
    id: "3",
    title: "Check-in Công Viên",
    image:
      "https://images.pexels.com/photos/31151451/pexels-photo-31151451/free-photo-of-con-d-ng-quanh-co-tuy-t-d-p-qua-nh-ng-ng-n-d-i-xanh-t-i.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    date: "2025-05-17",
  },
];

export default function ProfileScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const renderCheckin = ({ item }) => (
    <CheckinBlock isProfile={true} data={item} />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Animated.View
        style={[styles.container, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}
      >
        <FlatList
          ListHeaderComponent={
            <>
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
                <MaterialIcons name="monetization-on" size={24} color="#00623A" />
              </View>

              <LinearGradient
                colors={["#00623A", "#00804D"]}
                style={styles.giftCard}
              >
                <Text style={styles.giftTitle}>Món quà đặc biệt cho bạn!</Text>
                <Text style={styles.giftTimer}>23:59:43</Text>
                <TouchableOpacity style={styles.claimButton}>
                  <Text style={styles.claimButtonText}>Nhận ngay</Text>
                </TouchableOpacity>
              </LinearGradient>

              <View style={styles.detailsContainer}>
                <View style={styles.detailsHeader}>
                  <Text style={styles.sectionTitle}>Thông tin chi tiết</Text>
                  <TouchableOpacity>
                    <MaterialIcons name="edit" size={18} color="#222524" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.detailsContent}>Số điện thoại: 0353808048</Text>
                <Text style={styles.detailsContent}>Giới tính: Nam</Text>
                <Text style={styles.detailsContent}>Tuổi: 22</Text>

                <Text style={styles.sectionTitleCheckin}>Check-in</Text>
                <FlatList
                  data={checkinData}
                  renderItem={renderCheckin}
                  keyExtractor={(item) => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ gap: 12, paddingHorizontal: 4 }}
                />
              </View>

              <View style={styles.menuContainer}>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => navigation.navigate("Promo")}
                  activeOpacity={0.7}
                >
                  <Text style={styles.menuText}>Mã ưu đãi của tôi</Text>
                  <Ionicons name="chevron-forward" size={18} color="#888" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.menuItem}
                  onPress={() => navigation.navigate("History")}
                  activeOpacity={0.7}
                >
                  <Text style={styles.menuText}>Lịch sử hoạt động</Text>
                  <Ionicons name="chevron-forward" size={18} color="#888" />
                </TouchableOpacity>
              </View>

              <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
                  <Text style={styles.menuText}>Feedback</Text>
                  <Ionicons name="chevron-forward" size={18} color="#888" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
                  <Text style={styles.menuText}>Ngôn ngữ</Text>
                  <Ionicons name="chevron-forward" size={18} color="#888" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
                  <Text style={styles.menuText}>Đổi mật khẩu</Text>
                  <Ionicons name="chevron-forward" size={18} color="#888" />
                </TouchableOpacity>
              </View>
            </>
          }
          ListFooterComponent={
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={() => navigation.navigate("SignIn")}
              activeOpacity={0.7}
            >
              <Text style={styles.logoutText}>Đăng xuất</Text>
            </TouchableOpacity>
          }
          data={[]}
          renderItem={() => null}
          style={styles.flatList}
          contentContainerStyle={{ paddingBottom: 16 }}
        />
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F0F2F5",
  },
  container: {
    flex: 1,
  },
  flatList: {
    flex: 1,
  },
  header: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 15,
    padding: 16,
    backgroundColor: "#FFFFFF",
    marginTop: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 12,
    borderWidth: 2,
    borderColor: "#00623A",
  },
  profileDetails: {
    flexDirection: "column",
    gap: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222524",
  },
  rank: {
    fontSize: 14,
    color: "#00623A",
    fontWeight: "600",
  },
  pointsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#FFFFFF",
    marginTop: 12,
    width: "90%",
    alignSelf: "center",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  pointsText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#00623A",
  },
  giftCard: {
    width: "90%",
    alignSelf: "center",
    marginTop: 12,
    padding: 16,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  giftTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
  },
  giftTimer: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "400",
    marginTop: 4,
  },
  claimButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginTop: 12,
  },
  claimButtonText: {
    color: "#00623A",
    fontSize: 14,
    fontWeight: "600",
  },
  detailsContainer: {
    padding: 16,
    backgroundColor: "#FFFFFF",
    marginTop: 12,
    width: "90%",
    alignSelf: "center",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  detailsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  detailsContent: {
    fontSize: 14,
    color: "#222524",
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222524",
    marginBottom: 8,
  },
  sectionTitleCheckin: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222524",
    marginTop: 12,
    marginBottom: 8,
  },
  menuContainer: {
    backgroundColor: "#FFFFFF",
    marginTop: 12,
    width: "90%",
    alignSelf: "center",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  menuItem: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#DEDEDE",
  },
  menuText: {
    fontSize: 14,
    color: "#222524",
    fontWeight: "600",
  },
  logoutButton: {
    width: "40%",
    backgroundColor: "#00623A",
    borderRadius: 20,
    alignItems: "center",
    paddingVertical: 12,
    marginTop: 24,
    marginBottom: 80,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  logoutText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
});