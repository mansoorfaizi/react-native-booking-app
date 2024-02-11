import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import CalendarPicker from "react-native-calendar-picker";
import Colors from "../../Utils/Colors";
import Heading from "../../Components/Heading";
import GlobalApi from "../../Utils/GlobalApi";
import moment from "moment";

export default function BookingModel({ businessId, hideModel }) {
  const [timeList, setTimeList] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [note, setNote] = useState();
  useEffect(() => {
    getTime();
  }, []);

  // create Booking method
  const createNewBooking = () => {
    if (!selectedDate || !selectedTime) {
      ToastAndroid.show("Please Select Date and Time", ToastAndroid.LONG);
      return;
    }
    const data = {
      userName: "Mansoor Faizi",
      userEmail: "mansoorfaizi.cs05@gmail.com",
      time: selectedTime,
      date: moment(selectedDate).format("DD-MMM-yyyy"),
      note: note,
      businessId: businessId,
    };
    GlobalApi.createBooking(data).then((resp) => {
      ToastAndroid.show("Booking Created Successfully!", ToastAndroid.LONG);
      hideModel();
    });
  };

  const getTime = () => {
    const timeList = [];
    for (let i = 8; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":00 PM",
      });
    }
    for (let i = 1; i <= 7; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
    }
    setTimeList(timeList);
  };
  return (
    <ScrollView>
      <KeyboardAvoidingView style={{ padding: 20 }}>
        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
            marginBottom: 20,
          }}
          onPress={() => hideModel()}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
          <Text style={{ fontSize: 25, fontFamily: "outfit-medium" }}>
            Booking
          </Text>
        </TouchableOpacity>
        {/* Calender Section  */}
        <Heading text={"Select Date"} />
        <View style={styles.calendarContainer}>
          <CalendarPicker
            onDateChange={setSelectedDate}
            width={340}
            minDate={Date.now()}
            todayBackgroundColor={Colors.BLACK}
            todayTextStyle={{ color: Colors.WHITE }}
            selectedDayColor={Colors.PRIMARY}
            selectedDayTextColor={Colors.WHITE}
          />
        </View>

        {/* Time Selected Section  */}
        <View style={{ marginTop: 20 }}>
          <Heading text={"Select Time"} />
          <FlatList
            data={timeList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => setSelectedTime(item.time)}
              >
                <Text
                  style={[
                    selectedTime == item.time
                      ? styles.selectedTime
                      : styles.unSelectedTime,
                  ]}
                >
                  {item.time}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Note section  */}
        <View style={{ paddingTop: 20 }}>
          <Heading text={"Any Suggestion Note"} />
          <TextInput
            placeholder="Note"
            style={styles.noteTextArea}
            numberOfLines={4}
            multiline={true}
            onChangeText={(text) => setNote(text)}
          />
        </View>

        {/* Confirmation Button  */}
        <TouchableOpacity
          style={{ marginTop: 15 }}
          onPress={() => createNewBooking()}
        >
          <Text style={styles.confirmBtn}>Confirm & Book</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  calendarContainer: {
    backgroundColor: Colors.PRIMARY_LIGHT,
    padding: 20,
    borderRadius: 15,
  },

  selectedTime: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 99,
    paddingHorizontal: 18,
    backgroundColor: Colors.PRIMARY,
    color: Colors.WHITE,
  },

  unSelectedTime: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 99,
    paddingHorizontal: 18,
    color: Colors.BLACK,
  },

  noteTextArea: {
    borderWidth: 1,
    borderRadius: 15,
    textAlignVertical: "top",
    padding: 20,
    fontSize: 16,
    fontFamily: "outfit",
    borderColor: Colors.PRIMARY,
  },

  confirmBtn: {
    textAlign: "center",
    fontFamily: "outfit-medium",
    fontSize: 17,
    backgroundColor: Colors.PRIMARY,
    color: Colors.WHITE,
    padding: 13,
    borderRadius: 99,
    elevation: 2,
  },
});
