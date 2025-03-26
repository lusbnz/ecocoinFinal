import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ActivityIndicator } from "react-native-paper";

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
      <ActivityIndicator size="small" color="#4F7566" />
    </View>
  ) : (
    <ScrollView style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.greeting}>Xin chào!</Text>
          <Text style={styles.name}>Đinh Quốc Việt</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <TouchableOpacity onPress={() => navigation.navigate("QRScan")}>
            <Ionicons name="scan" size={24} color="#4F7566" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Notifications")}
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
                size={24}
                color="#4F7566"
              />
            </Animated.View>
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
            <Image source={{ uri: cate.image }} style={styles.categoryImage} />
            <View style={styles.categoryInfo}>
              <Text style={styles.categoryName}>{cate.name}</Text>
              <Text style={styles.categoryObjects}>{cate.objectsCount}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

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
            <Ionicons name="chevron-forward" size={18} color="#888" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("BannerDetail", {
              bannerId: "4",
              imageUrl:
                "https://images.pexels.com/photos/349600/pexels-photo-349600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            })
          }
        >
          <Image
            source={{
              uri: "https://images.pexels.com/photos/349600/pexels-photo-349600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            }}
            style={styles.eventBox}
          />
        </TouchableOpacity>
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
            <Ionicons name="chevron-forward" size={18} color="#888" />
          </TouchableOpacity>
        </View>

        <ImageBackground
          style={styles.promoCard}
          source={{
            uri: "https://images.pexels.com/photos/28954361/pexels-photo-28954361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          }}
          imageStyle={{ borderRadius: 20 }}
        >
          <Text style={styles.promoText}>Giảm 20% cho đơn đầu tiên</Text>
          <TouchableOpacity
            style={styles.ctaButton}
            onPress={() => {
              navigation.navigate("BannerDetail", {
                bannerId: "4",
                imageUrl:
                  "https://images.pexels.com/photos/28954361/pexels-photo-28954361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              });
            }}
          >
            <Text style={styles.ctaText}>Thu thập</Text>
          </TouchableOpacity>
        </ImageBackground>

        <ImageBackground
          style={styles.promoCard}
          source={{
            uri: "https://images.pexels.com/photos/23709338/pexels-photo-23709338/free-photo-of-th-c-v-t-hoa-tan-la-d-c-than.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          }}
          imageStyle={{ borderRadius: 20 }}
        >
          <Text style={styles.promoText}>Miễn phí giao hàng</Text>
          <TouchableOpacity
            style={styles.ctaButton}
            onPress={() => {
              navigation.navigate("BannerDetail", {
                bannerId: "5",
                imageUrl:
                  "https://images.pexels.com/photos/23709338/pexels-photo-23709338/free-photo-of-th-c-v-t-hoa-tan-la-d-c-than.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              });
            }}
          >
            <Text style={styles.ctaText}>Thu thập</Text>
          </TouchableOpacity>
        </ImageBackground>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Text style={styles.eventTitle}>Phân loại rác thải như thế nào?</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("PlasticIdentification")}
        >
          <Image
            source={{
              uri: "https://images.pexels.com/photos/16241634/pexels-photo-16241634/free-photo-of-thien-nhien-th-c-v-t-la-mau-xanh-la.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            }}
            style={styles.eventBox}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#FFFFFF",
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
  greeting: { fontSize: 18, fontWeight: "bold" },
  name: { fontSize: 20, fontWeight: "bold", color: "#4F7566" },

  masonry: {
    marginHorizontal: 10,
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
    backgroundColor: "#EEEEEE",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  categoryInfo: {
    display: "flex",
    flexDirection: "column",
    gap: 0,
  },
  categoryImage: {
    padding: 10,
    borderRadius: 15,
    width: 90,
    height: 90,
    resizeMode: "cover",
  },
  categoryName: {
    fontSize: 16,
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
    marginTop: 10,
    color: "#222524",
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
    backgroundColor: "white",
    paddingHorizontal: 16,
    borderRadius: 20,
    height: 30,
    marginTop: 100,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  ctaText: { color: "#4F7566", fontWeight: "normal" },
});
