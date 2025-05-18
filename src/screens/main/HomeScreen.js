import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Animated,
  SafeAreaView,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ActivityIndicator } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import VoucherBlock from "../../component/VoucherBlock";
import AdsBlock from "../../component/AdsBlock";

const { width } = Dimensions.get("window");

const category = [
  {
    name: "Chai nhựa",
    objectsCount: "150 điểm thu gom",
    image:
      "https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Chai nhôm",
    objectsCount: "120 điểm thu gom",
    image:
      "https://images.pexels.com/photos/2983100/pexels-photo-2983100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Tái chế",
    objectsCount: "200 trạm tái chế",
    image:
      "https://images.pexels.com/photos/15772324/pexels-photo-15772324/free-photo-of-chai-lon-tai-ch-nh-a.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

// Sample voucher data (replace with actual data)
const voucherData = [
  {
    id: "3",
    uri: "https://images.pexels.com/photos/28954361/pexels-photo-28954361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Giảm giá 20%",
    desc: "Tree Boom",
    pricing: "500 EP",
  },
  {
    id: "4",
    uri: "https://media.istockphoto.com/id/1435661969/vi/anh/c%E1%BA%ADn-c%E1%BA%A3nh-nh%E1%BB%AFng-%C4%91%E1%BB%A9a-tr%E1%BA%BB-%C4%91ang-%C3%B4m-m%E1%BB%99t-h%C3%A0nh-tinh-tr%C3%AAn-b%C3%A3i-bi%E1%BB%83n.jpg?s=2048x2048&w=is&k=20&c=H5i6ux1IxKhdG1TAhcGPVQ93KiEXqsOTsuy101GBgRQ=",
    title: "Miễn phí vận chuyển",
    desc: "Uneti Voucher",
    pricing: "350 EP",
  },
  {
    id: "5",
    uri: "https://images.pexels.com/photos/23709338/pexels-photo-23709338/free-photo-of-th-c-v-t-hoa-tan-la-d-c-than.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Miễn phí vận chuyển",
    desc: "Tuvi Voucher",
    pricing: "250 EP",
  },
];

export default function HomeScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [hasNotifications, setHasNotifications] = useState(true); // Simulate new notifications
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const shakeAnim = useRef(new Animated.Value(0)).current;

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

    // Simulate data fetching
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!hasNotifications) return;

    const shake = Animated.loop(
      Animated.sequence([
        Animated.timing(shakeAnim, {
          toValue: 10,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: -10,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: 5,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(shakeAnim, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
      ])
    );

    const timeout = setTimeout(() => {
      shake.start();
    }, 2000);

    return () => {
      clearTimeout(timeout);
      shake.stop();
    };
  }, [hasNotifications]);

  const renderCategory = ({ item }) => (
    <View style={styles.categoryCard}>
      <Image source={{ uri: item.image }} style={styles.categoryImage} />
      <View style={styles.categoryInfo}>
        <Text style={styles.categoryName}>{item.name}</Text>
        <Text style={styles.categoryObjects}>{item.objectsCount}</Text>
      </View>
    </View>
  );

  const renderVoucher = ({ item }) => (
    <VoucherBlock
      navigation={navigation}
      uri={item.uri}
      id={item.id}
      title={item.title}
      desc={item.desc}
      pricing={item.pricing}
    />
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#00623A" />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Animated.View
        style={[styles.container, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}
      >
        <FlatList
          ListHeaderComponent={
            <>
              <View style={styles.infoContainer}>
                <View style={styles.textContainer}>
                  <Text style={styles.greeting}>Xin chào,</Text>
                  <Text style={styles.name}>Đinh Quốc Việt</Text>
                </View>
                <View style={styles.actionContainer}>
                  <TouchableOpacity
                    style={styles.actionWrap}
                    onPress={() => navigation.navigate("QRScan")}
                    activeOpacity={0.7}
                  >
                    <Ionicons name="scan" size={18} color="#00623A" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.actionWrap}
                    onPress={() => {
                      setHasNotifications(false);
                      navigation.navigate("Notifications");
                    }}
                    activeOpacity={0.7}
                  >
                    <Animated.View
                      style={{
                        transform: [
                          {
                            rotate: shakeAnim.interpolate({
                              inputRange: [-10, 10],
                              outputRange: ["-10deg", "10deg"],
                            }),
                          },
                        ],
                      }}
                    >
                      <Ionicons
                        name="notifications-outline"
                        size={18}
                        color="#00623A"
                      />
                    </Animated.View>
                  </TouchableOpacity>
                </View>
              </View>

              <FlatList
                data={category}
                renderItem={renderCategory}
                keyExtractor={(item, index) => `category-${index}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoryContainer}
              />

              <LinearGradient
                colors={["#00623A", "#00804D"]}
                style={styles.giftCard}
              >
                <Text style={styles.giftTitle}>Mở khoá mã đặc biệt của bạn</Text>
                <Text style={styles.giftSubtitle}>Lựa chọn tuyệt vời, lấy nó ngay!</Text>
                <TouchableOpacity style={styles.claimButton} activeOpacity={0.7}>
                  <Text style={styles.claimButtonText}>Nhận ngay</Text>
                </TouchableOpacity>
              </LinearGradient>

              <View style={styles.eventContainer}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionTitle}>Sự kiện đang diễn ra</Text>
                  <TouchableOpacity onPress={() => navigation.navigate("Promo")}>
                    <Text style={styles.viewMore}>Xem tất cả</Text>
                  </TouchableOpacity>
                </View>
                <AdsBlock navigation={navigation} />

                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionTitle}>Có thể bạn quan tâm</Text>
                  <TouchableOpacity onPress={() => navigation.navigate("Promo")}>
                    <Text style={styles.viewMore}>Xem tất cả</Text>
                  </TouchableOpacity>
                </View>
                <FlatList
                  data={voucherData}
                  renderItem={renderVoucher}
                  keyExtractor={(item) => item.id}
                  scrollEnabled={false}
                  contentContainerStyle={{ gap: 12 }}
                />

                <View style={styles.sectionHeader}>
                  <Text style={styles.sectionTitle}>Phân loại rác thải như thế nào?</Text>
                </View>
                <TouchableOpacity
                  style={styles.recyclingCard}
                  onPress={() => navigation.navigate("PlasticIdentification")}
                  activeOpacity={0.7}
                >
                  <Image
                    source={{
                      uri: "https://img.freepik.com/free-vector/pack-cruelty-free-badges-illustrated_23-2148807204.jpg?t=st=1744738709~exp=1744742309~hmac=41d1725d73000e86cce88e0ff3219e439b4c5c5772675c462a54405cddf1947f&w=2000",
                    }}
                    style={styles.recyclingImage}
                  />
                </TouchableOpacity>
              </View>
            </>
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
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
  textContainer: {
    flexDirection: "column",
  },
  greeting: {
    fontSize: 16,
    color: "#666",
    fontWeight: "400",
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    color: "#00623A",
  },
  actionContainer: {
    flexDirection: "row",
    gap: 12,
  },
  actionWrap: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: 40,
    height: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  categoryCard: {
    width: 250,
    height: 100,
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 12,
  },
  categoryInfo: {
    flexDirection: "column",
    gap: 4,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222524",
  },
  categoryObjects: {
    fontSize: 12,
    color: "#888",
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
  giftSubtitle: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "400",
    marginTop: 4,
    textAlign: "center",
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
  eventContainer: {
    width: "90%",
    alignSelf: "center",
    marginTop: 12,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222524",
  },
  viewMore: {
    fontSize: 12,
    color: "#00623A",
    fontWeight: "600",
  },
  recyclingCard: {
    borderRadius: 15,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 80,
  },
  recyclingImage: {
    width: "100%",
    height: 180,
    borderRadius: 15,
  },
});