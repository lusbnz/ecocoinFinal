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

export default function CreatePasswordScreen({ navigation }) {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  // Điều kiện kiểm tra mật khẩu
  const isLengthValid = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasNonLetter = /[^a-zA-Z0-9]/.test(password);
  const isValid = isLengthValid && hasNumber && hasNonLetter;

  return (
    <View style={styles.backgroundContainer}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Create Password</Text>
        <Text style={styles.subtitle}>Please enter your new password</Text>
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          value={password}
          onChangeText={setPassword}
          keyboardType="default"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Nhập lại mật khẩu"
          value={rePassword}
          onChangeText={setRePassword}
          keyboardType="default"
          secureTextEntry
        />

        <View style={styles.criteriaContainer}>
          <Text style={[styles.badge, isLengthValid && styles.valid]}>8+ Ký tự</Text>
          <Text style={[styles.badge, hasNumber && styles.valid]}>Chứa số</Text>
          <Text style={[styles.badge, hasNonLetter && styles.valid]}>Ký tự đặc biệt</Text>
        </View>

        <TouchableOpacity
          style={[styles.button, { opacity: isValid ? 1 : 0.5 }]}
          disabled={!isValid}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: "#3D8ED4",
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
    color: "#3D8ED4",
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
  criteriaContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 300,
  },
  badge: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#E0E0E0",
    borderRadius: 15,
    fontSize: 12,
    fontWeight: "bold",
    color: "#3D8ED4",
  },
  valid: {
    backgroundColor: "#3D8ED4",
    color: "white",
  },
  button: {
    backgroundColor: "#3D8ED4",
    padding: 15,
    borderRadius: 100,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
