import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Heading from "../../Components/Heading";
import GlobalApi from "../../Utils/GlobalApi";
import BusinessListItemSmall from "./BusinessListItemSmall";

export default function Business() {
  const [business, setBusiness] = useState([]);
  useEffect(() => {
    getBusiness();
  }, []);
  const getBusiness = () => {
    GlobalApi.getBusinessList().then((resp) => {
      setBusiness(resp?.businessLists);
    });
  };
  return (
    <View style={{ marginTop: 20 }}>
      <Heading text={"Latest Business"} isViewAll={true} />
      <FlatList
        data={business}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 10 }}>
            <BusinessListItemSmall business={item} />
          </View>
        )}
      />
    </View>
  );
}
