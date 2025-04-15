import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Share,
  ScrollView,
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import Toast from "react-native-toast-message";
import { Ionicons } from "@expo/vector-icons";

const TransactionDetailScreen = ({ route, navigation }) => {
  const { banner } = route.params;

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Quà tặng QR Code của bạn: ${banner.id}`,
      });
    } catch (error) {
      console.log("Lỗi chia sẻ:", error);
    }
  };

  return (
    <ScrollView style={styles.container}>
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
          Transaction Detail
        </Text>
        <View></View>
      </View>
      <Image source={{ uri: banner.image }} style={styles.bannerImage} />
      <Text style={styles.description}>{banner.description}</Text>

      <View style={styles.qrContainer}>
        <QRCode value={banner.id.toString()} size={200} />
      </View>

      <Text style={styles.sectionTitle}>Thông tin chi tiết</Text>
      <Text style={styles.detailText}>
        Grab là tên gọi của một công ty công nghệ hàng đầu thế giới với trụ sở
        đặt tại Singapore. Grab chuyên cung cấp các dịch vụ vận chuyển và đi lại
        thông qua ứng dụng trực tuyến.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => {
            Toast.show({
              type: "success",
              text1: "Thông báo",
              text2: "Đã lưu thành công!",
            });
            navigation.navigate("Main");
          }}
        >
          <Text style={styles.buttonTextPrimary}>Lưu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
          <Text style={styles.buttonText}>Chia sẻ</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingBottom: 20,
  },
  bannerImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 30,
  },
  description: {
    width: "100%",
    display: "flex",
    alignSelf: "center",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
  qrContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginVertical: 20,
  },
  logo: {
    width: 120,
    height: 50,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 80,
  },
  logoText: { fontSize: 18, fontWeight: "bold" },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 10,
  },
  detailText: {
    fontSize: 14,
    color: "#555",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingBottom: 30,
  },
  buttonContainer: { flexDirection: "row", marginTop: 20 },
  saveButton: {
    borderWidth: 1,
    borderColor: "#00623A",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginRight: 10,
    flex: 1,
    alignItems: "center",
    color: "#00623A",
  },
  shareButton: {
    backgroundColor: "#00623A",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
    flex: 1,
    alignItems: "center",
    color: "#fff",
  },
  buttonText: { fontSize: 16, fontWeight: "bold", color: "#fff" },
  buttonTextPrimary: { fontSize: 16, fontWeight: "bold", color: "#00623A" },
});

export default TransactionDetailScreen;
