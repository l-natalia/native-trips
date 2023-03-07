import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect, useState } from "react";
import { Avatar, Hotels, Attractions, Restaurants } from "../assets";
import MenuItem from "../components/MenuItem";
import Colors from "../contants/colors";
import Card from "../components/Card";

export default function Discover() {
  const navigation = useNavigation();
  const [type, setType] = useState("restaurants");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.heading}>
        <View>
          <Text style={styles.heading1}>Discover</Text>
          <Text style={styles.heading2}>the beauty today</Text>
        </View>

        <View style={styles.avatar}>
          <Image source={Avatar} style={styles.avatarImg} />
        </View>
      </View>

      <ScrollView>
        <View style={styles.menuContainer}>
          <MenuItem
            key="hotel"
            title="Hotel"
            imageSrc={Hotels}
            type={type}
            setType={setType}
          />
          <MenuItem
            key="attraction"
            title="Attractions"
            imageSrc={Attractions}
            type={type}
            setType={setType}
          />
          <MenuItem
            key="restaurant"
            title="Restaurants"
            imageSrc={Restaurants}
            type={type}
            setType={setType}
          />
        </View>

        <View>
          <View style={styles.sectionHeader}>
            <Text style={styles.headerText}>Top picks</Text>
            <TouchableOpacity style={styles.link}>
              <Text style={styles.linkText}>Explore</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.listContainer}>
          <Card
            key={"101"}
            imageSrc={
              "https://cdn.pixabay.com/photo/2017/06/26/12/49/red-wine-2443699_1280.jpg"
            }
            title="Sample 1"
            location="Gdańsk"
          />
          <Card
            key={"102"}
            imageSrc={
              "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg"
            }
            title="Sample 2"
            location="Zakopane"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
    marginTop: 35,
  },
  heading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  heading1: {
    fontSize: 34,
    fontWeight: "bold",
    color: Colors.fontDark,
  },
  heading2: {
    fontSize: 26,
    color: Colors.fontLight,
  },
  avatar: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarImg: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 5,
  },
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    marginTop: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 20,
  },
  link: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    color: Colors.fontDark,
    fontSize: 22,
    fontWeight: "bold",
  },
  linkText: {
    color: Colors.fontLight,
    fontSize: 15,
  },
  listContainer: {
    paddingHorizontal: 10,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
		flexWrap: 'wrap'
  },
});
