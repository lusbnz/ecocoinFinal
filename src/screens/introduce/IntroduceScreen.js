import React, { useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Swiper from "react-native-swiper";

const { width, height } = Dimensions.get("window");

const IntroduceScreen = ({ navigation }) => {
  const swiperRef = useRef(null);

  return (
    <Swiper
      ref={swiperRef}
      loop={false}
      showsPagination={true}
      dotColor="#ddd"
      activeDotColor="#00623a"
    >
      <View style={styles.slide}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/2768961/pexels-photo-2768961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          }}
          style={styles.image}
        />
        <Text style={styles.title}>
          Cùng xây dựng <Text style={styles.highlight}>hành tinh xanh</Text>
        </Text>
        <Text style={styles.description}>
          Hãy chung tay bảo vệ môi trường bằng cách giảm rác thải nhựa trong
          cuộc sống hàng ngày.
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.skipButton}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={styles.skipText}>Bỏ qua</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => swiperRef.current.scrollBy(1)}
          >
            <Text style={styles.registerText}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.slide}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/17396135/pexels-photo-17396135/free-photo-of-n-c-t-ng-chai-thanh-th.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          }}
          style={styles.image}
        />
        <Text style={styles.title}>
          Tham gia <Text style={styles.highlight}>chuỗi tái chế</Text>
        </Text>
        <Text style={styles.description}>
          Biến rác thải nhựa thành các sản phẩm hữu ích và góp phần giảm thiểu ô
          nhiễm.
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.skipButton}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={styles.skipText}>Bỏ qua</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => swiperRef.current.scrollBy(1)}
          >
            <Text style={styles.registerText}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.slide}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/7772006/pexels-photo-7772006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          }}
          style={styles.image}
        />
        <Text style={styles.title}>
          Quy đổi rác thải{" "}
          <Text style={styles.highlight}>thành điểm thưởng</Text>
        </Text>
        <Text style={styles.description}>
          Thu gom rác thải nhựa và đổi lấy điểm thưởng để nhận quà hoặc giảm giá
          khi mua sắm.
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.skipButton}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={styles.skipText}>Bắt đầu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.registerText}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  image: { width: width * 0.9, height: height * 0.5, resizeMode: "contain" },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  highlight: { color: "#00623a" },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
    color: "#666",
  },
  buttonContainer: { flexDirection: "row", marginTop: 30 },
  skipButton: {
    borderWidth: 1,
    borderColor: "#00623a",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginRight: 15,
  },
  skipText: { color: "#00623a", fontWeight: "bold" },
  registerButton: {
    backgroundColor: "#00623a",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  registerText: { color: "#fff", fontWeight: "bold" },
});

export default IntroduceScreen;
