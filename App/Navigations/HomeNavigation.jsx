import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/HomeScreen/Home";
import BusinessListByCategory from "../Screens/businessListByCategoryScreen/BusinessListByCategory";
import BusinessDetail from "../Screens/BusinessDetailScreen/BusinessDetail";

const Stack = createStackNavigator();
export default function HomeNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="business-list" component={BusinessListByCategory} />
      <Stack.Screen name="business-detail" component={BusinessDetail} />
    </Stack.Navigator>
  );
}
