import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Animated,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const { height } = Dimensions.get("window");

export default function SignInScreen({ navigation }) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const slideAnim = React.useRef(new Animated.Value(50)).current;

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const validateInputs = () => {
    let isValid = true;
    setPhoneError("");
    setPasswordError("");

    if (!phone.match(/^[0-9]{10,11}$/)) {
      setPhoneError("Vui lòng nhập số điện thoại hợp lệ");
      isValid = false;
    }

    if (password.length < 6) {
      setPasswordError("Mật khẩu phải có ít nhất 6 ký tự");
      isValid = false;
    }

    return isValid;
  };

  const handleSignIn = () => {
    if (validateInputs()) {
      navigation.navigate("Main");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <View style={styles.backgroundContainer}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <Animated.View
            style={[
              styles.formContainer,
              { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
            ]}
          >
            <Text style={styles.title}>Đăng nhập</Text>
            <Text style={styles.subtitle}>
              Vui lòng nhập thông tin để tiếp tục
            </Text>

            <View style={styles.inputContainer}>
              <Feather
                name="phone"
                size={20}
                color="#00623A"
                style={styles.icon}
              />
              <TextInput
                style={[styles.input]}
                placeholder="Số điện thoại"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                placeholderTextColor="#A0A0A0"
              />
            </View>
            {phoneError ? (
              <Text style={styles.errorText}>{phoneError}</Text>
            ) : null}

            <View style={styles.inputContainer}>
              <Feather
                name="lock"
                size={20}
                color="#00623A"
                style={styles.icon}
              />
              <TextInput
                style={[styles.input]}
                placeholder="Mật khẩu"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                placeholderTextColor="#A0A0A0"
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Feather
                  name={showPassword ? "eye" : "eye-off"}
                  size={20}
                  color="#00623A"
                />
              </TouchableOpacity>
            </View>
            {passwordError ? (
              <Text style={styles.errorText}>{passwordError}</Text>
            ) : null}

            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
              <Text style={styles.buttonText}>Đăng nhập</Text>
            </TouchableOpacity>

            <Text style={styles.orText}>hoặc đăng nhập với</Text>
            <View style={styles.socialButtons}>
              {["facebook", "google", "apple"].map((type) => (
                <TouchableOpacity key={type} style={styles.socialButton}>
                  <Feather name={type} size={24} color="#00623A" />
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.signupText}>
                Chưa có tài khoản?{" "}
                <Text style={styles.link}>Tạo tài khoản mới</Text>
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundContainer: {
    flex: 1,
    backgroundColor: "#00623A",
    justifyContent: "flex-end",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  formContainer: {
    backgroundColor: "white",
    width: "100%",
    minHeight: height * 0.75, 
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingVertical: 32,
    paddingHorizontal: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#00623A",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 24,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: "#F8F8F8",
  },
  input: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    color: "#333",
  },
  inputError: {
    borderColor: "#FF4D4F",
    borderWidth: 1,
  },
  icon: {
    marginLeft: 12,
  },
  eyeIcon: {
    padding: 12,
  },
  errorText: {
    color: "#FF4D4F",
    fontSize: 12,
    marginBottom: 12,
    marginLeft: 12,
  },
  button: {
    backgroundColor: "#00623A",
    paddingVertical: 16,
    borderRadius: 100,
    alignItems: "center",
    marginTop: 16,
    marginBottom: 24,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  orText: {
    textAlign: "center",
    color: "#666",
    marginVertical: 16,
    fontSize: 14,
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginBottom: 24,
  },
  socialButton: {
    width: 56,
    height: 56,
    backgroundColor: "#F0F2F5",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  signupText: {
    textAlign: "center",
    color: "#666",
    fontSize: 14,
  },
  link: {
    color: "#00623A",
    fontWeight: "600",
  },
});
