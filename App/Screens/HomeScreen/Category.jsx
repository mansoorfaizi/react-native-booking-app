import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "../../Utils/GlobalApi";
import Heading from "../../Components/Heading";
import Colors from "../../Utils/Colors";
import { useNavigation } from "@react-navigation/native";

export default function Category() {
  const [category, setCategory] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    getCategory();
  }, []);
  const getCategory = () => {
    GlobalApi.getCategories().then((resp) => {
      setCategory(resp?.categories);
    });
  };
  return (
    <View style={{ marginTop: 10 }}>
      <Heading text={"Categories"} isViewAll={true} />
      <FlatList
        data={category}
        numColumns={4}
        renderItem={({ item, index }) =>
          index <= 3 && (
            <TouchableOpacity
              style={styles.container}
              onPress={() =>
                navigation.push("business-list", {
                  category: item.name,
                })
              }
            >
              <View style={styles.iconsContainer}>
                <Image
                  source={{ uri: item?.image?.url }}
                  style={{ width: 40, height: 40 }}
                />
              </View>
              <Text style={{ fontFamily: "outfit-medium", marginTop: 5 }}>
                {item?.name}
              </Text>
            </TouchableOpacity>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  iconsContainer: {
    backgroundColor: Colors.LIGHT_GRAY,
    padding: 17,
    borderRadius: 99,
  },
});
