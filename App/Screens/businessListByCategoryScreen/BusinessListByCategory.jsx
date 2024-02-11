import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";
import GlobalApi from "../../Utils/GlobalApi";
import BusinessListItem from "./BusinessListItem";
import Colors from "../../Utils/Colors";
import PageHeading from "../../Components/PageHeading";

export default function BusinessListByCategory() {
  const parm = useRoute().params;
  const [businessList, setBusinessList] = useState([]);
  useEffect(() => {
    getBusinessByCategory();
  }, []);

  const getBusinessByCategory = () => {
    GlobalApi.getBusinessListByCategory(parm.category).then((resp) => {
      setBusinessList(resp?.businessLists);
    });
  };
  return (
    <View style={{ padding: 20, paddingTop: 40 }}>
      <PageHeading title={parm.category} />
      {businessList?.length > 0 ? (
        <FlatList
          data={businessList}
          style={{ marginTop: 15 }}
          renderItem={({ item, index }) => <BusinessListItem business={item} />}
        />
      ) : (
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 20,
            textAlign: "center",
            marginTop: "20%",
            color: Colors.GRAY,
          }}
        >
          No Business Found
        </Text>
      )}
    </View>
  );
}
