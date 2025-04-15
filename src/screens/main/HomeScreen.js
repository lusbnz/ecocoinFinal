import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ActivityIndicator } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import VoucherBlock from "../../component/VoucherBlock";
import AdsBlock from "../../component/AdsBlock";

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
export default function HomeScreen({ navigation }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const shakeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
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
  }, []);

  return loading ? (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="small" color="#00623A" />
    </View>
  ) : (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.infoContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.greeting}>Xin chào,</Text>
            <Text style={styles.name}>Đinh Quốc Việt</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <TouchableOpacity onPress={() => navigation.navigate("QRScan")}>
              <View style={styles.actionWrap}>
                <Ionicons name="scan" size={16} color="#00623A" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Notifications")}
            >
              <View style={styles.actionWrap}>
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
                    size={16}
                    color="#00623A"
                  />
                </Animated.View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryContainer}
        >
          {category.map((cate, index) => (
            <View key={index} style={styles.categoryCard}>
              <Image
                source={{ uri: cate.image }}
                style={styles.categoryImage}
              />
              <View style={styles.categoryInfo}>
                <Text style={styles.categoryName}>{cate.name}</Text>
                <Text style={styles.categoryObjects}>{cate.objectsCount}</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        <View
          style={{
            height: 150,
            backgroundColor: "#4dac85",
            margin: "20",
            marginBottom: "0",
            padding: "10",
            borderRadius: 20,
            flex: "1",
            alignItems: "center",
            justifyContent: "center",
            gap: "5",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: "24",
              fontWeight: "600",
            }}
          >
            Mở khoá mã đặc biệt của bạn
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: "12",
              fontWeight: "400",
            }}
          >
            Lựa chọn tuyệt vời, lấy nó ngay!
          </Text>
        </View>

        <View style={styles.eventContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text style={styles.eventTitle}>Sự kiện đang diễn ra</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Promo")}>
              <Text style={{ fontSize: "12" }}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>

          <AdsBlock navigation={navigation} />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text style={styles.eventTitle}>Có thể bạn quan tâm</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Promo")}>
              <Text style={{ fontSize: "12" }}>Xem tất cả</Text>
            </TouchableOpacity>
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
            navigation={navigation}
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
            id={"5"}
            title={"Miễn phí vận chuyển"}
            desc={"Tuvi Voucher"}
            pricing={"250 EP"}
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text style={styles.eventTitle}>
              Phân loại rác thải như thế nào?
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("PlasticIdentification")}
          >
            <Image
              source={{
                uri: "https://img.freepik.com/free-vector/pack-cruelty-free-badges-illustrated_23-2148807204.jpg?t=st=1744738709~exp=1744742309~hmac=41d1725d73000e86cce88e0ff3219e439b4c5c5772675c462a54405cddf1947f&w=2000",
              }}
              style={styles.eventBox}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <LinearGradient
        colors={["transparent", "rgba(0, 0, 0, 1)"]}
        style={styles.fadeBottom}
        pointerEvents="none"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#e5e5e5",
  },

  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "transparent",
    width: "100%",
  },
  textContainer: {
    flexDirection: "column",
  },
  greeting: { fontSize: 16, fontWeight: "normal", fontFamily: "Inter" },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00623B",
    fontFamily: "Inter",
  },
  actionWrap: {
    backgroundColor: "#ffffff",
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
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  categoryContainer: {
    paddingHorizontal: 20,
  },
  categoryCard: {
    width: 250,
    height: 100,
    marginRight: 10,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  categoryInfo: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  categoryImage: {
    padding: 10,
    borderRadius: 15,
    width: 90,
    height: 90,
    resizeMode: "cover",
  },
  categoryName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  categoryObjects: {
    fontSize: 12,
    color: "#888",
  },
  eventContainer: { padding: 20, marginBottom: 95 },
  eventTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222524",
    fontFamily: "Inter",
  },
  viewMore: {
    fontSize: 14,
    fontWeight: "semibold",
    alignSelf: "flex-end",
    marginRight: 10,
    color: "#222524",
  },
  eventBox: {
    height: 180,
    backgroundColor: "#ddd",
    borderRadius: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ffffff",
    objectFit: "cover",
  },
  promoCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    marginVertical: 10,
    height: 160,
  },
  promoText: { fontSize: 16, fontWeight: "800", color: "#FFFFFF" },
  ctaButton: {
    backgroundColor: "#00623A",
    paddingHorizontal: 16,
    borderRadius: 10,
    height: 32,
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  ctaText: { color: "white", fontWeight: "bold" },
  fadeBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    marginVertical: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  content: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "600",
    fontSize: 16,
    color: "#333",
  },
  earning: {
    color: "#00623A",
    fontWeight: "500",
    fontSize: 14,
    marginTop: 2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 2,
  },
  price: {
    fontWeight: "500",
    color: "#444",
  },
  duration: {
    fontSize: 13,
    color: "#888",
  },
  rowBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  button: {
    backgroundColor: "#00623A",
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "500",
  },
  percent: {
    fontWeight: "600",
    fontSize: 15,
    color: "#333",
  },
});
