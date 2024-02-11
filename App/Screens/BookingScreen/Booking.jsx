import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Utils/GlobalApi";
import BusinessListItem from "../businessListByCategoryScreen/BusinessListItem";

export default function Booking() {
  const [bookingList, setBookingList] = useState([]);
  const [loading, setLoading] = useState(false);

  const userEmail = "mansoorfaizi.cs05@gmail.com";
  useEffect(() => {
    getUserBookings();
  }, []);
  const getUserBookings = () => {
    setLoading(true);
    GlobalApi.getUserBookings(userEmail).then((resp) => {
      setBookingList(resp.bookings);
      setLoading(false);
    });
  };
  return (
    <View style={{ padding: 30 }}>
      <Text style={{ fontFamily: "outfit-medium", fontSize: 26 }}>
        My Bookings
      </Text>

      <View>
        <FlatList
          onRefresh={() => getUserBookings()}
          refreshing={loading}
          data={bookingList}
          renderItem={({ item, index }) => (
            <BusinessListItem business={item?.businessList} booking={item} />
          )}
        />
      </View>
    </View>
  );
}
