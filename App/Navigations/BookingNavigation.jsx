import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Booking from "../Screens/BookingScreen/Booking";

const Stack = createStackNavigator();
export default function BookingNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={Booking} />
    </Stack.Navigator>
  );
}
