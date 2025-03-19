import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CameraView, Camera } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";

export default function QRScannerScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [flash, setFlash] = useState("off");

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        barcodeScannerSettings={{ barcodeTypes: ["qr"] }}
        onBarcodeScanned={({ data }) => alert(`Scanned: ${data}`)}
        flashMode={flash}
      >
        {/* Hướng dẫn */}
        <Text style={styles.scanText}>Find a code to scan</Text>

        {/* Overlay */}
        <View style={styles.overlay}>
          <View style={styles.qrFrame}>
            <View style={styles.cornerTopLeft} />
            <View style={styles.cornerTopRight} />
            <View style={styles.cornerBottomLeft} />
            <View style={styles.cornerBottomRight} />
          </View>
        </View>

        {/* Nút bật/tắt flash */}
        <TouchableOpacity
          style={styles.flashButton}
          onPress={() => setFlash(flash === "off" ? "torch" : "off")}
        >
          <Ionicons
            name={flash === "off" ? "flashlight-outline" : "flashlight"}
            size={30}
            color="white"
          />
        </TouchableOpacity>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  qrFrame: {
    width: 250,
    height: 250,
    borderColor: "rgba(255,255,255,0.8)",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cornerTopLeft: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderColor: "white",
  },
  cornerTopRight: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 40,
    height: 40,
    borderTopWidth: 4,
    borderRightWidth: 4,
    borderColor: "white",
  },
  cornerBottomLeft: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 40,
    height: 40,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderColor: "white",
  },
  cornerBottomRight: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 40,
    height: 40,
    borderBottomWidth: 4,
    borderRightWidth: 4,
    borderColor: "white",
  },
  flashButton: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 15,
    borderRadius: 50,
  },
  scanText: {
    position: "absolute",
    top: 100,
    alignSelf: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 10,
    borderRadius: 10,
  },
});
