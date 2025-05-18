import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import VoucherBlock from "../../component/VoucherBlock";

const categories = ["All", "Food", "Transport", "Card"];

const promoData = [
  {
    id: "1",
    category: "Food",
    title: "Giảm 20% tại KFC",
    desc: "Sử dụng mã này để được giảm 20%...",
    uri: "https://images.pexels.com/photos/28954361/pexels-photo-28954361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    pricing: "350 EP",
    time: "Just Now",
  },
  {
    id: "2",
    category: "Transport",
    title: "Giảm 30% Grab",
    desc: "Đi Grab giảm 30% khi dùng mã này...",
    uri: "https://media.istockphoto.com/id/1435661969/vi/anh/c%E1%BA%ADn-c%E1%BA%A3nh-nh%E1%BB%AFng-%C4%91%E1%BB%A9a-tr%E1%BA%BB-%C4%91ang-%C3%B4m-m%E1%BB%99t-h%C3%A0nh-tinh-tr%C3%AAn-b%C3%A3i-bi%E1%BB%83n.jpg?s=2048x2048&w=is&k=20&c=H5i6ux1IxKhdG1TAhcGPVQ93KiEXqsOTsuy101GBgRQ=",
    pricing: "150 EP",
    time: "Just Now",
  },
  {
    id: "3",
    category: "Card",
    title: "Tích điểm VinID",
    desc: "Nhận 100 điểm VinID với mã này...",
    uri: "https://images.pexels.com/photos/23709338/pexels-photo-23709338/free-photo-of-th-c-v-t-hoa-tan-la-d-c-than.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    pricing: "250 EP",
    time: "1h ago",
  },
  {
    id: "4",
    category: "Food",
    title: "Ưu đãi McDonald's",
    desc: "Mua 1 tặng 1 burger hấp dẫn...",
    uri: "https://media.istockphoto.com/id/968853036/vi/anh/khung-c%E1%BA%A3nh-%C4%91%E1%BB%89nh-cao-c%E1%BB%A7a-m%E1%BB%99t-khu-r%E1%BB%ABng-xanh-tr%E1%BA%BB-v%C3%A0o-m%C3%B9a-xu%C3%A2n-ho%E1%BA%B7c-m%C3%B9a-h%C3%A8.jpg?s=2048x2048&w=is&k=20&c=x22a_7wMvtbcqyt4jb9fk-kiG1UHLwCnZZBE4pLSA9Y=",
    pricing: "400 EP",
    time: "1h ago",
  },
  {
    id: "5",
    category: "Transport",
    title: "Giảm 20% Grab",
    desc: "Đi Grab giảm 20% khi dùng mã này...",
    uri: "https://media.istockphoto.com/id/1344923073/vi/anh/m%E1%BB%99t-h%E1%BB%93-n%C6%B0%E1%BB%9Bc-c%C3%B3-h%C3%ACnh-d%E1%BA%A5u-ch%C3%A2n-con-ng%C6%B0%E1%BB%9Di-%E1%BB%9F-gi%E1%BB%AFa-m%E1%BB%99t-khu-r%E1%BB%ABng-t%C6%B0%C6%A1i-t%E1%BB%91t-nh%C6%B0-m%E1%BB%99t-ph%C3%A9p-%E1%BA%A9n-d%E1%BB%A5-cho-t%C3%A1c.jpg?s=2048x2048&w=is&k=20&c=4xcCL-r94rsUOoHXwDwQuS2Zw3ImfIo3RFNkIeSkHdg=",
    pricing: "200 EP",
    time: "1h ago",
  },
  {
    id: "6",
    category: "Card",
    title: "Tích điểm ShopeePay",
    desc: "Nhận 50 điểm ShopeePay với mã này...",
    uri: "https://images.pexels.com/photos/23709338/pexels-photo-23709338/free-photo-of-th-c-v-t-hoa-tan-la-d-c-than.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    pricing: "520 EP",
    time: "1h ago",
  },
  {
    id: "7",
    category: "Food",
    title: "Ưu đãi Burger King",
    desc: "Mua 1 tặng 1 burger hấp dẫn...",
    uri: "https://media.istockphoto.com/id/968853036/vi/anh/khung-c%E1%BA%A3nh-%C4%91%E1%BB%89nh-cao-c%E1%BB%A7a-m%E1%BB%99t-khu-r%E1%BB%ABng-xanh-tr%E1%BA%BB-v%C3%A0o-m%C3%B9a-xu%C3%A2n-ho%E1%BA%B7c-m%C3%B9a-h%C3%A8.jpg?s=2048x2048&w=is&k=20&c=x22a_7wMvtbcqyt4jb9fk-kiG1UHLwCnZZBE4pLSA9Y=",
    pricing: "220 EP",
    time: "1h ago",
  },
  {
    id: "8",
    category: "Transport",
    title: "Giảm 10% Grab",
    desc: "Đi Grab giảm 10% khi dùng mã này...",
    uri: "https://images.pexels.com/photos/23709338/pexels-photo-23709338/free-photo-of-th-c-v-t-hoa-tan-la-d-c-than.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    pricing: "120 EP",
    time: "1h ago",
  },
];

const MyCouponsScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
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

  const filteredData =
    selectedCategory === "All"
      ? promoData
      : promoData.filter((item) => item.category === selectedCategory);

  // Group data by time for section headers
  const groupedData = [
    {
      title: "Gần đây",
      data: filteredData.filter((item) => item.time === "Just Now"),
    },
    {
      title: "Trước đó",
      data: filteredData.filter((item) => item.time !== "Just Now"),
    },
  ].filter((section) => section.data.length > 0);

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.categoryButton,
        selectedCategory === item && styles.categoryButtonSelected,
      ]}
      onPress={() => setSelectedCategory(item)}
      activeOpacity={0.7}
    >
      <Text
        style={[
          styles.categoryText,
          selectedCategory === item && styles.categoryTextSelected,
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <VoucherBlock
      navigation={navigation}
      uri={item.uri}
      id={item.id}
      title={item.title}
      desc={item.desc}
      pricing={item.pricing}
    />
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={styles.sectionTitle}>{title}</Text>
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
                <TouchableOpacity
                  style={styles.backButton}
                  onPress={() => navigation.goBack()}
                  activeOpacity={0.7}
                >
                  <Ionicons name="chevron-back" size={20} color="#00623A" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>My Coupons</Text>
                <View style={styles.headerPlaceholder} />
              </View>
              <FlatList
                data={categories}
                renderItem={renderCategory}
                keyExtractor={(item) => item}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoryContainer}
              />
            </>
          }
          data={groupedData}
          renderItem={({ item }) => (
            <FlatList
              data={item.data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.voucherList}
            />
          )}
          keyExtractor={(item) => item.title}
          SectionList
          sections={groupedData}
          renderSectionHeader={renderSectionHeader}
          contentContainerStyle={styles.flatListContent}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Không có thông báo</Text>
          }
        />
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F0F2F5",
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 12,
    marginHorizontal: 16,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  backButton: {
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
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222524",
  },
  headerPlaceholder: {
    width: 40,
    height: 40,
  },
  categoryContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  categoryButton: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryButtonSelected: {
    backgroundColor: "#00623A",
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#222524",
  },
  categoryTextSelected: {
    color: "#FFFFFF",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222524",
    marginBottom: 12,
    marginHorizontal: 16,
  },
  voucherList: {
    gap: 12,
    paddingHorizontal: 16,
  },
  flatListContent: {
    paddingBottom: 16,
  },
  emptyText: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginTop: 16,
  },
});

export default MyCouponsScreen;