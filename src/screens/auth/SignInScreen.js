import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

const { height } = Dimensions.get("window");

export default function SignInScreen({ navigation }) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Đăng nhập</Text>
        <Text style={styles.subtitle}> Vui lòng nhập thông tin của bạn để đăng nhập</Text>
        <TextInput
          style={styles.input}
          placeholder="Số điện thoại"
          value={phone}
          onChangeText={setPhone}
        />
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          value={password}
          onChangeText={setPassword}
          keyboardType="default"
          secureTextEntry
        />

        <TouchableOpacity
          style={[styles.button, { opacity: 1 }]}
          onPress={() => navigation.navigate("Main")}
        >
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>hoặc đăng nhập với</Text>
        <View style={styles.socialButtons}>
          <View style={styles.socialButton} />
          <View style={styles.socialButton} />
          <View style={styles.socialButton} />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.signupText}>
            Chưa có tài khoản? <Text style={styles.link}>Đăng ký</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: "#00623A",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  formContainer: {
    backgroundColor: "white",
    width: "100%",
    height: height * 0.8,
    borderRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00623A",
    textAlign: "left",
  },
  subtitle: {
    fontSize: 14,
    color: "#6D6D6D",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#DADADA",
    borderRadius: 8,
    marginBottom: 15,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  checkboxText: {
    marginLeft: 4,
    color: "#6D6D6D",
    fontSize: 12,
  },
  link: {
    color: "#00623A",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#00623A",
    padding: 15,
    borderRadius: 100,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  orText: {
    textAlign: "center",
    color: "#6D6D6D",
    marginVertical: 15,
    marginTop: 30,
    fontSize: 14,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 20,
  },
  socialButton: {
    width: 60,
    height: 60,
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
  },
  signupText: {
    textAlign: "center",
    color: "#6D6D6D",
    marginTop: 30,
    fontSize: 14,
  },
});
