import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function VoucherBlock({navigation, uri, id, title, desc, pricing }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri }} style={styles.image} />

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
        </View>

        <Text style={styles.earning}>{desc}</Text>

        <View style={styles.row}>
          <Text style={styles.price}>{pricing}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("BannerDetail", {
                bannerId: id,
                imageUrl: uri,
              });
            }}
          >
            <Text style={styles.buttonText}>Thu nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    marginVertical: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  content: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "600",
    fontSize: 16,
    color: "#333",
  },
  earning: {
    color: "#00623A",
    fontWeight: "500",
    fontSize: 14,
    marginTop: 2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 2,
  },
  price: {
    fontWeight: "500",
    color: "#444",
  },
  duration: {
    fontSize: 13,
    color: "#888",
  },
  rowBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  button: {
    backgroundColor: "#00623A",
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "500",
  },
  percent: {
    fontWeight: "600",
    fontSize: 15,
    color: "#333",
  },
});
