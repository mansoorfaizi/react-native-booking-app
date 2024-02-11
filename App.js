import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Login from "./App/Screens/LoginScreen/Login";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./App/Navigations/TabNavigation";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    outfit: require("./assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("./assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("./assets/fonts/Outfit-Bold.ttf"),
  });
  return (
    <NavigationContainer>
      <TabNavigation />
      <StatusBar style="auto" />
    </NavigationContainer>
    // <ClerkProvider publishableKey="pk_test_ZGlzdGluY3QtdGVhbC01My5jbGVyay5hY2NvdW50cy5kZXYk">
    //   <SafeAreaView style={styles.container}>
    //     <SignedOut>
    //       <Login />
    //     </SignedOut>
    //     <SignedIn>
    //       <NavigationContainer>
    //         <TabNavigation />
    //         <StatusBar style="auto" />
    //       </NavigationContainer>
    //     </SignedIn>
    //     <StatusBar style="auto" />
    //   </SafeAreaView>
    // </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
