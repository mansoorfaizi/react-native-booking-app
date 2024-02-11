import React from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";

export default function Profile() {
  const profileMenu = [
    {
      id: 1,
      name: "Home",
      icon: "home",
    },
    {
      id: 2,
      name: "My Booking",
      icon: "bookmark-sharp",
    },
    {
      id: 3,
      name: "Contact US",
      icon: "bookmark-sharp",
    },
    {
      id: 4,
      name: "logout",
      icon: "log-out",
    },
  ];
  return (
    <View>
      <View
        style={{ padding: 20, paddingTop: 40, backgroundColor: Colors.PRIMARY }}
      >
        <Text style={{ fontSize: 20, fontFamily: "outfit-bold" }}>Profile</Text>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Image
            source={require("../../../assets/images/login.jpg")}
            style={styles.userImage}
          />
          <Text
            style={{
              fontSize: 20,
              fontFamily: "outfit-medium",
              color: Colors.WHITE,
            }}
          >
            Mansoor Faizi
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "outfit-medium",
              color: Colors.WHITE,
            }}
          >
            mansoorfaizi.cs05@gmail.com
          </Text>
        </View>
      </View>
      <View style={{ paddingTop: 60 }}>
        <FlatList
          data={profileMenu}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginBottom: 40,
                paddingHorizontal: 80,
              }}
            >
              <Ionicons name={item.icon} size={35} color={Colors.PRIMARY} />
              <Text style={{ fontSize: 20, fontFamily: "outfit" }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  userImage: {
    width: 90,
    height: 90,
    borderRadius: 99,
  },
});
