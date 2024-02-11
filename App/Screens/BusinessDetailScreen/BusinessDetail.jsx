import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  Linking,
} from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../Utils/Colors";
import { Entypo } from "@expo/vector-icons";
import Heading from "../../Components/Heading";
import BusinessPhotos from "./BusinessPhotos";
import BookingModel from "./BookingModel";

export default function BusinessDetail() {
  const navigation = useNavigation();
  const param = useRoute().params;
  const [business, setBusiness] = useState(param.business);
  const [isReadMore, setIsReadMore] = useState(false);
  const [showModel, setShowModel] = useState(false);

  const onMessageBtnClick = () => {
    Linking.openURL(
      "mailto:" +
        business?.email +
        "?subject=I am booking for your Service&body=Hi There,"
    );
  };
  return (
    <View>
      <ScrollView style={{ height: "91%" }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtnContainer}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Image
          source={{ uri: business?.images[0]?.url }}
          style={{ width: "100%", height: 300 }}
        />
        <View style={styles.infoContainer}>
          <Text style={{ fontFamily: "outfit-bold", fontSize: 25 }}>
            {business?.name}
          </Text>
          <View style={styles.subContainer}>
            <Text
              style={{
                fontFamily: "outfit-medium",
                color: Colors.PRIMARY,
                fontSize: 20,
              }}
            >
              {business?.contactPerson}{" "}
              <Entypo name="star" size={24} color="orange" />
            </Text>
            <Text
              style={{
                color: Colors.WHITE,
                backgroundColor: Colors.PRIMARY,
                padding: 5,
                borderRadius: 5,
                fontSize: 14,
              }}
            >
              {business.category.name}
            </Text>
          </View>
          <Text
            style={{ fontSize: 17, fontFamily: "outFit", color: Colors.GRAY }}
          >
            <Entypo name="location-pin" size={20} color={Colors.PRIMARY} />
            {business?.address}
          </Text>

          {/* horizontal line  */}
          <View
            style={{
              borderWidth: 0.4,
              borderColor: Colors.GRAY,
              marginTop: 20,
              marginBottom: 20,
            }}
          />

          {/* about me section  */}
          <View>
            <Heading text={"About me"} />
            <Text
              style={{
                fontFamily: "outfit",
                color: Colors.GRAY,
                fontSize: 16,
                lineHeight: 28,
              }}
              numberOfLines={isReadMore ? 25 : 5}
            >
              {business?.about}
            </Text>
            <TouchableOpacity onPress={() => setIsReadMore(!isReadMore)}>
              <Text
                style={{
                  color: Colors.PRIMARY,
                  fontSize: 16,
                  fontFamily: "outfit",
                }}
              >
                {isReadMore ? "Read Less" : "Read more..."}
              </Text>
            </TouchableOpacity>
          </View>

          {/* horizontal line  */}
          <View
            style={{
              borderWidth: 0.4,
              borderColor: Colors.GRAY,
              marginTop: 20,
              marginBottom: 20,
            }}
          />

          {/* business photos  */}
          <BusinessPhotos business={business} />
        </View>
      </ScrollView>
      <View
        style={{ display: "flex", flexDirection: "row", gap: 5, margin: 5 }}
      >
        <TouchableOpacity
          style={styles.messageBtn}
          onPress={() => onMessageBtnClick()}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "outfit",
              color: Colors.PRIMARY,
              fontSize: 18,
            }}
          >
            Message
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bookingBtn}
          onPress={() => setShowModel(true)}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "outfit",
              color: Colors.WHITE,
              fontSize: 18,
            }}
          >
            Booking
          </Text>
        </TouchableOpacity>
      </View>

      {/* Booking Screen Model  */}
      <Modal animationType="slide" visible={showModel}>
        <BookingModel
          hideModel={() => setShowModel(false)}
          businessId={business.id}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  backBtnContainer: {
    position: "absolute",
    zIndex: 10,
    padding: 20,
  },

  infoContainer: {
    padding: 20,
    display: "flex",
    gap: 10,
  },

  subContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },

  messageBtn: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 99,
    flex: 1,
  },

  bookingBtn: {
    padding: 10,
    backgroundColor: Colors.PRIMARY,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 99,
    flex: 1,
  },
});
