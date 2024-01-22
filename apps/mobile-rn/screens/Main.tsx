import { StyleSheet, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import WebView from "react-native-webview";

export default function Main() {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView>
      <View style={{ ...styles.container }}>
        <WebView
          style={styles.webview}
          source={{ uri: "http://localhost:3000" }}
        ></WebView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    backgroundColor: "blue",
    width: 380,
    height: 500,
  },
});
