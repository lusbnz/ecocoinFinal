import React from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";

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
];

const PlasticDetailScreen = ({ route, navigation }) => {
  const { plastic } = route.params;
  return (
    <View style={styles.container}>
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
  container: { flex: 1, backgroundColor: "#fff" },
  headerImage: {
    width: "100%",
    height: "50%",
    justifyContent: "flex-end",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: 120,
    left: 20,
    padding: 10,
    borderRadius: 10,
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
    color: "#3D8ED4",
    textAlign: "center",
  },
  title: { fontSize: 18, fontWeight: "bold", color: "#fff" },
  contentContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: -160,
    height: 100,
  },
  description: { fontSize: 16, color: "#333", marginBottom: 20 },
  card: {
    flex: 1,
    height: 180,
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
  similarTitle: { fontSize: 18, fontWeight: "bold", marginTop: 180 },
});

export default PlasticDetailScreen;
