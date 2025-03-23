import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

const categories = ["All", "Food", "Transport", "Card"];

const promoData = [
  {
    id: "1",
    category: "Food",
    title: "Giảm 20% tại KFC",
    description: "Sử dụng mã này để được giảm 20%...",
  },
  {
    id: "2",
    category: "Transport",
    title: "Giảm 30% Grab",
    description: "Đi Grab giảm 30% khi dùng mã này...",
  },
  {
    id: "3",
    category: "Card",
    title: "Tích điểm VinID",
    description: "Nhận 100 điểm VinID với mã này...",
  },
  {
    id: "4",
    category: "Food",
    title: "Ưu đãi McDonald's",
    description: "Mua 1 tặng 1 burger hấp dẫn...",
  },
  {
    id: "5",
    category: "Transport",
    title: "Giảm 20% Grab",
    description: "Đi Grab giảm 20% khi dùng mã này...",
  },
  {
    id: "6",
    category: "Card",
    title: "Tích điểm ShopeePay",
    description: "Nhận 50 điểm ShopeePay với mã này...",
  },
  {
    id: "7",
    category: "Food",
    title: "Ưu đãi Burger King",
    description: "Mua 1 tặng 1 burger hấp dẫn...",
  },
  {
    id: "8",
    category: "Transport",
    title: "Giảm 10% Grab",
    description: "Đi Grab giảm 10% khi dùng mã này...",
  },
];

const MyCouponsScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredData =
    selectedCategory === "All"
      ? promoData
      : promoData.filter((item) => item.category === selectedCategory);

  return (
    <View
      style={{
        backgroundColor: "#F5F5F5",
        padding: 15,
        flex: 1,
      }}
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          marginTop: 10,
          marginBottom: 10,
          paddingBottom: 10,
          height: 40,
        }}
      >
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedCategory(category)}
            style={{
              backgroundColor:
                selectedCategory === category ? "#3D8ED4" : "#E5E5E5",
              paddingVertical: 8,
              paddingHorizontal: 16,
              borderRadius: 10,
              marginRight: 10,
              height: 32,
            }}
          >
            <Text
              style={{ color: selectedCategory === category ? "#fff" : "#000" }}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        style={{ marginTop: 0 }}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#fff",
              padding: 15,
              borderRadius: 10,
              marginBottom: 10,
              flexDirection: "row",
              alignItems: "flex-start",
            }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#ccc",
                borderRadius: 20,
                marginRight: 10,
              }}
            />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 12, color: "#888" }}>
                {item.category}
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                {item.title}
              </Text>
              <Text style={{ fontSize: 14, color: "#666" }}>
                {item.description}
              </Text>
            </View>
            <TouchableOpacity>
              <Text style={{ fontSize: 20, color: "#888" }}>⋮</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default MyCouponsScreen;
