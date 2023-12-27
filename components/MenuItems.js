import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const green = "#495E57";
const yellow = "#F4CE14";

const MenuItemsToDisplay = [
  " Hummus \n Moutabal \n Falafel \n Marinated Olives \n Lofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil \n Greek Salad m Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta",
];

export default function MenuItems() {
  return (
    <View style={menuStyles.container}>
      <ScrollView style={menuStyles.innerContainer}>
        <Text style={menuStyles.headerText}>View Menu</Text>
        <Text style={menuStyles.itemText}>{MenuItemsToDisplay[0]}</Text>
      </ScrollView>
    </View>
  );
}

const menuStyles = StyleSheet.create({
  container: {
    flex: 0.75,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 40,
    backgroundColor: "blue",
  },
  headerText: {
    color: "white",
    fontSize: 40,
    flexWrap: "wrap",
  },
  itemText: {
    color: "#F4CE14",
    fontSize: 26,
  },
});
