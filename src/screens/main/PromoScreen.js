import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function PromoScreen() {
  return (
    <View style={styles.screen}>
      <Text>Promo Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
});
