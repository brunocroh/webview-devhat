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
          scrollEnabled={false}
          style={styles.webview}
          source={{ uri: "https://webview-devhat-web.vercel.app/" }}
        ></WebView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  webview: {
    width: 370,
    backgroundColor: "blue",
  },
});
