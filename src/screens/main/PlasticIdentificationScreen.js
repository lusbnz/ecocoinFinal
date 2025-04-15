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
      "Thường được sử dụng cho chai nước giải khát và hộp đựng thực phẩm. PET nhẹ, bền và có khả năng tái chế cao, là loại nhựa phổ biến nhất trong bao bì thực phẩm và đồ uống.",
    image:
      "https://d1ymz67w5raq8g.cloudfront.net/Pictures/2000xAny/2/4/5/114245_shutterstock_95088004.jpg",
  },
  {
    id: "2",
    name: "High-Density Polyethylene (HDPE)",
    type: "HDPE",
    description:
      "Được sử dụng cho chai sữa, chai dầu gội và bình đựng chất tẩy rửa. HDPE nổi bật bởi độ bền và khả năng chịu va đập, lý tưởng cho các sản phẩm cần độ bền cao.",
    image:
      "https://everydayrecycler.com/wp-content/uploads/2020/02/plastic-number-2-main.jpg",
  },
  {
    id: "3",
    name: "Polyvinyl Chloride (PVC)",
    type: "PVC",
    description:
      "Một loại nhựa đa năng được dùng trong ống nước, thiết bị y tế và khung cửa sổ. Tuy bền và chịu thời tiết tốt, nhưng PVC chứa hóa chất độc hại và khó tái chế.",
    image:
      "https://omnexus.specialchem.com/_/media/selection-guides/omnexus/polymer-profiles/polyvinylchloride/pvc-pipes-1.jpg",
  },
  {
    id: "4",
    name: "Low-Density Polyethylene (LDPE)",
    type: "LDPE",
    description:
      "Dẻo và nhẹ, LDPE thường được dùng cho túi ni-lông, chai bóp và màng bọc thực phẩm. Tỷ lệ tái chế của LDPE thấp hơn so với các loại nhựa khác nhưng vẫn được sử dụng rộng rãi.",
    image: "https://waste4change.com/blog/wp-content/uploads/plastic-bags.jpg",
  },
  {
    id: "5",
    name: "Polypropylene (PP)",
    type: "PP",
    description:
      "Một loại nhựa cứng và chịu nhiệt, thường được sử dụng trong hộp đựng thực phẩm, nắp chai và ống hút. PP có điểm nóng chảy cao, thích hợp để đựng thức ăn nóng.",
    image:
      "https://cdn.shopify.com/s/files/1/0564/9321/1807/files/Definition_of_PP_plastic_1024x1024.jpg?v=1711291656",
  },
  {
    id: "6",
    name: "Polystyrene (PS)",
    type: "PS",
    description:
      "Thường thấy trong cốc dùng một lần, hộp đựng thực phẩm và vật liệu đóng gói. Mặc dù nhẹ và rẻ, PS không phân hủy sinh học và khó tái chế.",
    image:
      "https://image.made-in-china.com/202f0j00MByVTefgYsRQ/EPS-Polystyrene-Foam-Block-Styrofoam-Geofoam-Thermal-Insulation-Board.webp",
  },
];


const PlasticIdentificationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: "#ffffff",
            borderRadius: 100,
            alignItems: "center",
            justifyContent: "center",
            padding: 12,
            width: 40,
            height: 40,
          }}
        >
          <Ionicons name="chevron-back" size={16} color="#00623A" />
        </TouchableOpacity>

        <Text
          style={{
            marginLeft: -32,
            fontWeight: "bold",
            fontSize: "16",
            fontFamily: "Inter",
          }}
        >
          Plastic Identify
        </Text>
        <View></View>
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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 50,
  },
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 100,
    marginBottom: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  type: {
    fontSize: 12,
    fontWeight: "medium",
    alignSelf: "flex-start",
    borderRadius: 20,
    backgroundColor: "rgba(24, 177, 62, 0.2)",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 10,
    color: "#00623a",
    textAlign: "center",
  },
  name: { fontSize: 13, fontWeight: "bold", textAlign: "left", margin: 10 },
});

export default PlasticIdentificationScreen;
