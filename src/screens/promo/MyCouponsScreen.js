import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const categories = ["All", "Food", "Transport", "Card"];

const promoData = [
  {
    id: "1",
    category: "Food",
    title: "Giảm 20% tại KFC",
    description: "Sử dụng mã này để được giảm 20%...",
    time: "Just Now",
  },
  {
    id: "2",
    category: "Transport",
    title: "Giảm 30% Grab",
    description: "Đi Grab giảm 30% khi dùng mã này...",
    time: "Just Now",
  },
  {
    id: "3",
    category: "Card",
    title: "Tích điểm VinID",
    description: "Nhận 100 điểm VinID với mã này...",
    time: "1h ago",
  },
  {
    id: "4",
    category: "Food",
    title: "Ưu đãi McDonald's",
    description: "Mua 1 tặng 1 burger hấp dẫn...",
    time: "1h ago",
  },
  {
    id: "5",
    category: "Transport",
    title: "Giảm 20% Grab",
    description: "Đi Grab giảm 20% khi dùng mã này...",
    time: "1h ago",
  },
  {
    id: "6",
    category: "Card",
    title: "Tích điểm ShopeePay",
    description: "Nhận 50 điểm ShopeePay với mã này...",
    time: "1h ago",
  },
  {
    id: "7",
    category: "Food",
    title: "Ưu đãi Burger King",
    description: "Mua 1 tặng 1 burger hấp dẫn...",
    time: "1h ago",
  },
  {
    id: "8",
    category: "Transport",
    title: "Giảm 10% Grab",
    description: "Đi Grab giảm 10% khi dùng mã này...",
    time: "1h ago",
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
        padding: 15,
        paddingTop: 50,
        display: "flex",
        flexDirection: "column",
        marginBottom: 100,
      }}
    >
      <View style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ flexDirection: "row" }}
        >
          <Ionicons name="chevron-back" size={18} color="#888" />
          <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 5 }}>
            Quay lại
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          marginTop: 10,
          marginBottom: 10,
          paddingBottom: 10,
          height: 60,
        }}
      >
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedCategory(category)}
            style={{
              backgroundColor:
                selectedCategory === category ? "#248A3D" : "#E5E5E5",
              paddingHorizontal: 15,
              borderRadius: 20,
              marginRight: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 40,
              minWidth: 100,
            }}
          >
            <Text
              style={{
                color: selectedCategory === category ? "#fff" : "#000",
                fontWeight: "bold",
              }}
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
        renderItem={({ item, index }) => (
          <>
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
                  backgroundColor: "#e5e5e5",
                  borderRadius: 10,
                  marginRight: 10,
                }}
              />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 12, color: "#888", marginBottom: 5 }}>
                  {item.category}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#212524",
                    marginBottom: 5,
                  }}
                >
                  {item.title}
                </Text>
                <Text style={{ fontSize: 14, color: "#666" }}>
                  {item.description}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#e5e5e5",
                  borderRadius: 10,
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingBottom: 2,
                  paddingTop: 2,
                }}
              >
                <Text
                  style={{
                    color: "#212529",
                    fontSize: "12",
                    fontWeight: "normal",
                  }}
                >
                  {item.time}
                </Text>
              </View>
            </View>

            {index === 4 && (
              <Text
                style={{
                  marginBottom: "10",
                  fontSize: "18",
                  fontWeight: "600",
                }}
              >
                Previous
              </Text>
            )}
          </>
        )}
      />
    </View>
  );
};

export default MyCouponsScreen;
