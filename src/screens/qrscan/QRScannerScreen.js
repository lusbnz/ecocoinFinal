export default function QRScannerScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [flash, setFlash] = useState("off");
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarcodeScanned = ({ data }) => {
    if (!scanned) {
      setScanned(true);
      console.log("Scanned QR Code:", data);
      setTimeout(() => setScanned(false), 3000); 
    }
  };

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
        onBarcodeScanned={scanned ? undefined : handleBarcodeScanned} 
        flashMode={flash}
      >
        <Text style={styles.scanText}>Find a code to scan</Text>

        <View style={styles.overlay}>
          <View style={styles.qrFrame}>
            <View style={styles.cornerTopLeft} />
            <View style={styles.cornerTopRight} />
            <View style={styles.cornerBottomLeft} />
            <View style={styles.cornerBottomRight} />
          </View>
        </View>

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
