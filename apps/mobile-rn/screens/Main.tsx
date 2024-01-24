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
      <View style={{ ...styles.container }}></View>
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
