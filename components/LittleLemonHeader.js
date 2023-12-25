import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={{ flex: 0.2, backgroundColor: "#F4CE14" }}>
      <Text style={{ padding: 40, fontSize: 24, color: "black" }}>
        Welcome to
        <Text style={{ fontWeight: "bold" }}> Little Lemon</Text>
      </Text>
    </View>
  );
}
