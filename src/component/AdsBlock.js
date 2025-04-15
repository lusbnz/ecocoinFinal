import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function AdsBlock({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("BannerDetail", {
          bannerId: "2",
          imageUrl:
            "https://images.pexels.com/photos/349600/pexels-photo-349600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        })
      }
    >
      <View style={farmCardStyles.container}>
        <View style={farmCardStyles.imageWrapper}>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/349600/pexels-photo-349600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            }}
            style={farmCardStyles.image}
          />
          <View style={farmCardStyles.ratingBox}>
            <FontAwesome name="star" size={14} color="#FFD700" />
            <Text style={farmCardStyles.ratingText}>5.0</Text>
          </View>
        </View>

        <View style={farmCardStyles.contentWrapper}>
          <Text style={farmCardStyles.title}>
            Cuộc thi Sáng tạo khởi nghiệp 2025
          </Text>
          <View style={farmCardStyles.metaRow}>
            <MaterialIcons name="person" size={16} color="#888" />
            <Text style={farmCardStyles.metaText}>Team EcoCoin</Text>
          </View>
          <View style={farmCardStyles.metaRow}>
            <Ionicons name="location-sharp" size={16} color="#888" />
            <Text style={farmCardStyles.metaText}>Uneti cơ sở 3</Text>
          </View>
          <Text style={farmCardStyles.priceText}>2024 - 2025</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const farmCardStyles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
    elevation: 3,
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    height: 160,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  ratingBox: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: "#fff",
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 6,
    paddingVertical: 2,
    elevation: 2,
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 12,
    color: "#333",
  },
  favoriteIcon: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 4,
    elevation: 2,
  },
  contentWrapper: {
    padding: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 6,
    color: "#222",
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  metaText: {
    fontSize: 14,
    marginLeft: 6,
    color: "#666",
  },
  priceText: {
    marginTop: 8,
    fontWeight: "bold",
    fontSize: 16,
    color: "#00623a",
  },
});
