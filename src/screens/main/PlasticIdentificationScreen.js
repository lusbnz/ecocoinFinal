import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
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
  {
    id: "3",
    name: "Polyvinyl Chloride (PVC)",
    type: "PVC",
    description:
      "A versatile plastic used in pipes, medical equipment, and window frames. While durable and weather-resistant, PVC contains harmful chemicals that make it difficult to recycle.",
    image:
      "https://omnexus.specialchem.com/_/media/selection-guides/omnexus/polymer-profiles/polyvinylchloride/pvc-pipes-1.jpg",
  },
  {
    id: "4",
    name: "Low-Density Polyethylene (LDPE)",
    type: "LDPE",
    description:
      "Flexible and lightweight, LDPE is commonly used for plastic bags, squeezable bottles, and food wraps. It has a lower recycling rate compared to other plastics but is still widely used.",
    image:
      "https://waste4change.com/blog/wp-content/uploads/plastic-bags.jpg",
  },
  {
    id: "5",
    name: "Polypropylene (PP)",
    type: "PP",
    description:
      "A tough and heat-resistant plastic often used in food containers, bottle caps, and straws. It has a high melting point, making it ideal for hot food storage.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTroQZwfdf7E4ShTxUPSXIGpZICynaqw57aTw&s",
  },
  {
    id: "6",
    name: "Polystyrene (PS)",
    type: "PS",
    description:
      "Often found in disposable cups, food containers, and packaging materials. While lightweight and cheap, PS is not biodegradable and is difficult to recycle.",
    image:
      "https://image.made-in-china.com/202f0j00MByVTefgYsRQ/EPS-Polystyrene-Foam-Block-Styrofoam-Geofoam-Thermal-Insulation-Board.webp",
  },
];

const PlasticIdentificationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
      <FlatList
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
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20, paddingTop: 50 },
  card: {
    flex: 1,
    margin: 10,
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
});

export default PlasticIdentificationScreen;
