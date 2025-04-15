import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Checkbox } from "react-native-paper";

const { height } = Dimensions.get("window");

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(true);

  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Đăng ký</Text>
        <Text style={styles.subtitle}>
          Vui lòng nhập thông tin của bạn để đăng ký
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Họ và Tên"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Số điện thoại"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        <View style={styles.checkboxContainer}>
          <View style={{ transform: [{ scale: 0.8 }] }}>
            <Checkbox
              status={agree ? "checked" : "unchecked"}
              onPress={() => setAgree(!agree)}
              color="#00623A"
              uncheckedColor="#6D6D6D"
            />
          </View>
          <Text style={styles.checkboxText}>
           Tôi đồng ý với <Text style={styles.link}>Quyền và Điều khoản</Text>
          </Text>
        </View>

        <TouchableOpacity
          style={[styles.button, { opacity: agree ? 1 : 0.5 }]}
          disabled={!agree}
          onPress={() => navigation.navigate("CreatePassword")}
        >
          <Text style={styles.buttonText}>Đăng ký</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>hoặc đăng ký với</Text>
        <View style={styles.socialButtons}>
          <View style={styles.socialButton} />
          <View style={styles.socialButton} />
          <View style={styles.socialButton} />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={styles.loginText}>
            Bạn đã có tài khoản? <Text style={styles.link}>Đăng nhập</Text>
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
  loginText: {
    textAlign: "center",
    color: "#6D6D6D",
    marginTop: 30,
    fontSize: 14,
  },
});
