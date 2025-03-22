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
    description: "Commonly used for beverage bottles and food containers. It is lightweight, strong, and highly recyclable, making it the most widely used plastic in food and beverage packaging.",
    image:
      "https://images.pexels.com/photos/30912294/pexels-photo-30912294/free-photo-of-thien-nga-tr-ng-thanh-th-n-l-t-tren-ao-s-ng-mu-sintra.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "2",
    name: "High-Density Polyethylene (HDPE)",
    type: "HDPE",
    description: "Used for milk jugs, shampoo bottles, and detergent containers. It is known for its strength and resistance to impact, making it ideal for products that require durability.",
    image:
      "https://images.pexels.com/photos/19479799/pexels-photo-19479799/free-photo-of-canh-tay-dan-ba-hoa-d-ng.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "3",
    name: "Polyvinyl Chloride (PVC)",
    type: "PVC",
    description: "A versatile plastic used in pipes, medical equipment, and window frames. While durable and weather-resistant, PVC contains harmful chemicals that make it difficult to recycle.",
    image:
      "https://images.pexels.com/photos/31077659/pexels-photo-31077659/free-photo-of-thi-t-l-p-may-tinh-d-ban-m-cung-v-i-den-va-tach-ca-phe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "4",
    name: "Low-Density Polyethylene (LDPE)",
    type: "LDPE",
    description: "Flexible and lightweight, LDPE is commonly used for plastic bags, squeezable bottles, and food wraps. It has a lower recycling rate compared to other plastics but is still widely used.",
    image:
      "https://images.pexels.com/photos/28579173/pexels-photo-28579173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "5",
    name: "Polypropylene (PP)",
    type: "PP",
    description: "A tough and heat-resistant plastic often used in food containers, bottle caps, and straws. It has a high melting point, making it ideal for hot food storage.",
    image:
      "https://images.pexels.com/photos/8869963/pexels-photo-8869963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "6",
    name: "Polystyrene (PS)",
    type: "PS",
    description: "Often found in disposable cups, food containers, and packaging materials. While lightweight and cheap, PS is not biodegradable and is difficult to recycle.",
    image:
      "https://images.pexels.com/photos/28377941/pexels-photo-28377941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const PlasticIdentificationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
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
