import React from "react";
import { ScrollView, Text, View } from "react-native";

const green = "#495E57";
const yellow = "#F4CE14";

const MenuItemsToDisplay = [
  " Hummus \n Moutabal \n Falafel \n Marinated Olives \n Lofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil \n Greek Salad m Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta",
];

export default function MenuItems() {
  return (
    <View style={{ flex: 0.75 }}>
      <ScrollView
        style={{
          paddingHorizontal: 40,
          paddingVertical: 40,
          backgroundColor: "black",
        }}
      >
        <Text style={{ color: "white", fontSize: 40, flexWrap: "wrap" }}>
          View Menu
        </Text>
        <Text style={{ color: "#F4CE14", fontSize: 26 }}>
          {MenuItemsToDisplay[0]}
        </Text>
      </ScrollView>
    </View>
  );
}
