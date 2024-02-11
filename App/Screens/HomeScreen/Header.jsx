import React from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";

export default function Header() {
  return (
    <View style={styles.container}>
      {/* profile section */}
      <View style={styles.profileMainContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={require("../../../assets/images/login.jpg")}
            style={styles.userImage}
          />
          <View>
            <Text style={{ color: Colors.WHITE, fontFamily: "outfit" }}>
              Welcome{" "}
            </Text>
            <Text
              style={{
                color: Colors.WHITE,
                fontSize: 20,
                fontFamily: "outfit-medium",
              }}
            >
              Mansoor
            </Text>
          </View>
        </View>
        <FontAwesome name="bookmark-o" size={27} color="white" />
      </View>

      {/* search section  */}
      <View style={styles.searchContainer}>
        <TextInput placeholder="Search" style={styles.textInput} />
        <FontAwesome
          name="search"
          size={24}
          color={Colors.PRIMARY}
          style={styles.searchBtn}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: Colors.PRIMARY,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  profileMainContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  searchContainer: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 15,
  },

  textInput: {
    padding: 7,
    paddingHorizontal: 16,
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    width: "85%",
    fontSize: 16,
    fontFamily: "outfit-medium",
  },
  searchBtn: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 8,
  },

  userImage: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
});
