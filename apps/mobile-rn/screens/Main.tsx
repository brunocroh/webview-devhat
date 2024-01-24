import { StyleSheet, View, Text } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import WebView from "react-native-webview";

export default function Main() {
  const insets = useSafeAreaInsets();

  console.log({ insets });

  return (
    <SafeAreaView>
      <View style={{ ...styles.container }}>
        <WebView
          scrollEnabled={false}
          style={styles.webview}
          source={{ uri: "http://localhost:3000?webview=true" }}
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
