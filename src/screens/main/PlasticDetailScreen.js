import React from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const plastics = [
  {
    id: "1",
    name: "Polyethylene Terephthalate (PET)",
    type: "PET",
    description:
      "Commonly used for beverage bottles and food containers. It is lightweight, strong, and highly recyclable, making it the most widely used plastic in food and beverage packaging.",
    image:
      "https://d1ymz67w5raq8g.cloudfront.net/Pictures/2000xAny/2/4/5/114245_shutterstock_95088004.jpg",
  },
  {
    id: "2",
    name: "High-Density Polyethylene (HDPE)",
    type: "HDPE",
    description:
      "Used for milk jugs, shampoo bottles, and detergent containers. It is known for its strength and resistance to impact, making it ideal for products that require durability.",
    image:
      "https://everydayrecycler.com/wp-content/uploads/2020/02/plastic-number-2-main.jpg",
  },
];

const PlasticDetailScreen = ({ route, navigation }) => {
  const { plastic } = route.params;
  return (
    <View style={styles.container}>
      <View style={{ position: "absolute", top: 60, zIndex: 3, display: "flex", flexDirection: "row", marginBottom: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ flexDirection: "row" }}
        >
          <Ionicons name="chevron-back" size={18} color="black" />
          <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 5, color: "black" }}>
            Quay lại
          </Text>
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={{ uri: plastic.image }}
        style={styles.headerImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.tag}>{plastic.type}</Text>
          <Text style={styles.title}>{plastic.name}</Text>
        </View>
      </ImageBackground>
      <View style={styles.contentContainer}>
        <Text style={styles.description}>{plastic.description}</Text>
        <Text style={styles.similarTitle}>Similar</Text>
        <FlatList
          horizontal
          data={plastics}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() =>
                navigation.navigate("PlasticDetail", { plastic: item })
              }
            >
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.type}>{item.type}</Text>
              <Text style={styles.name}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, paddingBottom: 20, backgroundColor: "#fff" },
  headerImage: {
    width: "100%",
    height: "55%",
    justifyContent: "flex-end",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: 140,
    left: 20,
    padding: 10,
    borderRadius: 20,
  },
  tag: {
    fontSize: 12,
    fontWeight: "bold",
    alignSelf: "flex-start",
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    color: "white",
    textAlign: "center",
  },
  title: { fontSize: 18, fontWeight: "bold", color: "#fff" },
  contentContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    display: "flex",
    flexDirection: "column",
    marginTop: -210,
  },
  description: { fontSize: 16, color: "#333", marginBottom: 20 },
  card: {
    flex: 1,
    height: 180,
    marginVertical: 10,
    marginLeft: 0,
    marginRight: 20,
    backgroundColor: "#F3F3F3",
    borderRadius: 20,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 100,
    marginBottom: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  type: {
    fontSize: 12,
    fontWeight: "medium",
    alignSelf: "flex-start",
    borderRadius: 20,
    backgroundColor: "rgba(61, 142, 212, 0.2)",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 10,
    color: "#3D8ED4",
    textAlign: "center",
  },
  name: { fontSize: 13, fontWeight: "bold", textAlign: "left", margin: 10 },
  similarTitle: { fontSize: 18, fontWeight: "bold", marginTop: 180 },
});

export default PlasticDetailScreen;
