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
  SafeAreaView,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const { height } = Dimensions.get("window");

export default function CreatePasswordScreen({ navigation }) {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [rePasswordError, setRePasswordError] = useState("");
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

  const isLengthValid = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasNonLetter = /[^a-zA-Z0-9]/.test(password);
  const passwordsMatch = password === rePassword && rePassword.length > 0;
  const isValid = hasNumber && hasNonLetter && passwordsMatch;

  const validateInputs = () => {
    let isValid = true;
    setPasswordError("");
    setRePasswordError("");

    if (!isLengthValid || !hasNumber || !hasNonLetter) {
      setPasswordError("Mật khẩu chưa đáp ứng yêu cầu");
      isValid = false;
    }

    if (!passwordsMatch) {
      setRePasswordError("Mật khẩu nhập lại không khớp");
      isValid = false;
    }

    return isValid;
  };

  const handleContinue = () => {
    if (validateInputs()) {
      navigation.navigate("SignIn");
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
            bounces={false}
          >
            <Animated.View
              style={[
                styles.formContainer,
                { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
              ]}
            >
              <Text style={styles.title}>Tạo mật khẩu</Text>
              <Text style={styles.subtitle}>Vui lòng nhập mật khẩu mới</Text>

              <View style={styles.inputContainer}>
                <Feather
                  name="lock"
                  size={20}
                  color="#00623A"
                  style={styles.icon}
                />
                <TextInput
                  style={[styles.input, passwordError ? styles.inputError : null]}
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

              <View style={styles.inputContainer}>
                <Feather
                  name="lock"
                  size={20}
                  color="#00623A"
                  style={styles.icon}
                />
                <TextInput
                  style={[styles.input, rePasswordError ? styles.inputError : null]}
                  placeholder="Nhập lại mật khẩu"
                  value={rePassword}
                  onChangeText={setRePassword}
                  secureTextEntry={!showRePassword}
                  placeholderTextColor="#A0A0A0"
                />
                <TouchableOpacity
                  style={styles.eyeIcon}
                  onPress={() => setShowRePassword(!showRePassword)}
                >
                  <Feather
                    name={showRePassword ? "eye" : "eye-off"}
                    size={20}
                    color="#00623A"
                  />
                </TouchableOpacity>
              </View>
              {rePasswordError ? (
                <Text style={styles.errorText}>{rePasswordError}</Text>
              ) : null}

              <View style={styles.criteriaContainer}>
                <Text style={[styles.badge, isLengthValid && styles.valid]}>
                  8+ Ký tự
                </Text>
                <Text style={[styles.badge, hasNumber && styles.valid]}>
                  Chứa số
                </Text>
                <Text style={[styles.badge, hasNonLetter && styles.valid]}>
                  Ký tự đặc biệt
                </Text>
              </View>

              <TouchableOpacity
                style={[styles.button, { opacity: isValid ? 1 : 0.5 }]}
                disabled={!isValid}
                onPress={handleContinue}
              >
                <Text style={styles.buttonText}>Tiếp theo</Text>
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
    width: "100%",
    backgroundColor: "white",
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
  criteriaContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 24,
  },
  badge: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#E0E0E0",
    borderRadius: 15,
    fontSize: 12,
    fontWeight: "600",
    color: "#00623A",
  },
  valid: {
    backgroundColor: "#00623A",
    color: "white",
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
});