import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LittleLemonFooter() {
  return (
    <View style={headerStyle.container}>
      <Text style={headerStyle.headerText}>
        All rights reserved by Little Lemon, 2022{" "}
      </Text>
    </View>
  );
}

const headerStyle = StyleSheet.create({
  container: {
    backgroundColor: "#F4CE14",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 12,
    color: "black",
    textAlign: "center",
  },
});
