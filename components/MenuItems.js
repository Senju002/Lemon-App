import React from "react";
import {
  FlatList,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from "react-native";

const green = "#495E57";
const yellow = "#F4CE14";

// !------------------------------------------------ FlatList
// const MenuItemsToDisplay = [
//   " Hummus \n Moutabal \n Falafel \n Marinated Olives \n Lofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil \n Greek Salad m Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta",
// ];

// const menuItemsToDisplay = [
//   { name: "Hummus", price: "$5.00", id: "1A" },
//   { name: "Moutabal", price: "$5.00", id: "2B" },
//   { name: "Falafel", price: "$7.50", id: "3C" },
//   { name: "Marinated Olives", price: "$5.00", id: "4D" },
//   { name: "Kofta", price: "$5.00", id: "5E" },
//   { name: "Eggplant Salad", price: "$8.50", id: "6F" },
//   { name: "Lentil Burger", price: "$10.00", id: "7G" },
//   { name: "Smoked Salmon", price: "$14.00", id: "8H" },
//   { name: "Kofta Burger", price: "$11.00", id: "9I" },
//   { name: "Turkish Kebab", price: "$15.50", id: "10J" },
//   { name: "Fries", price: "$3.00", id: "11K" },
//   { name: "Buttered Rice", price: "$3.00", id: "12L" },
//   { name: "Bread Sticks", price: "$3.00", id: "13M" },
//   { name: "Pita Pocket", price: "$3.00", id: "14N" },
//   { name: "Lentil Soup", price: "$3.75", id: "15O" },
//   { name: "Greek Salad", price: "$6.00", id: "16Q" },
//   { name: "Rice Pilaf", price: "$4.00", id: "17R" },
//   { name: "Baklava", price: "$3.00", id: "18S" },
//   { name: "Tartufo", price: "$3.00", id: "19T" },
//   { name: "Tiramisu", price: "$5.00", id: "20U" },
//   { name: "Panna Cotta", price: "$5.00", id: "21V" },
// ];

const Seperator = () => <View style={menuStyles.separator} />;

const Header = () => <Text style={menuStyles.headerText}>View Menu</Text>;

// !------------------------------------------------ SectionList
const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      "Hummus",
      "Moutabal",
      "Falafel",
      "Marinated Olives",
      "Kofta",
      "Eggplant Salad",
    ],
  },
  {
    title: "Main Dishes",
    data: ["Lentil Burger", "Smoked Salmon", "Kofta Burger", "Turkish Kebab"],
  },
  {
    title: "Sides",
    data: [
      "Fries",
      "Buttered Rice",
      "Bread Sticks",
      "Pita Pocket",
      "Lentil Soup",
      "Greek Salad",
      "Rice Pilaf",
    ],
  },
  {
    title: "Desserts",
    data: ["Baklava", "Tartufo", "Tiramisu", "Panna Cotta"],
  },
];

const Item = ({ name, price }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
    <Text style={menuStyles.itemText}>{price}</Text>
  </View>
);

export default function MenuItems() {
  // ?const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;

  const renderItem = ({ item }) => <Item name={item} />;

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={menuStyles.headerText}>{title}</Text>
  );
  return (
    <View style={menuStyles.container}>
      {/* <ScrollView style={menuStyles.innerContainer}>
        <Text style={menuStyles.headerText}>View Menu</Text>
        <Text style={menuStyles.itemText}>{MenuItemsToDisplay[0]}</Text>
      </ScrollView> */}

      {/* <FlatList
        data={menuItemsToDisplay}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={Seperator}
        ListHeaderComponent={Header}
      /> */}
      <SectionList
        sections={menuItemsToDisplay}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={Seperator}
      />
    </View>
  );
}

const menuStyles = StyleSheet.create({
  container: {
    flex: 0.75,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    color: "blue",
    fontSize: 20,
    flexWrap: "wrap",
    textAlign: "center",
    backgroundColor: "white",
  },
  itemText: {
    color: "#F4CE14",
    fontSize: 26,
  },
  separator: {
    borderBottomWidth: 1,
    borderColorL: "#EDEFEE",
  },
});
