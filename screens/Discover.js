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
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Avatar, Hotels, Attractions, Restaurants } from "../assets";
import MenuItem from "../components/MenuItem";
import Colors from "../contants/colors";
import Card from "../components/Card";
import { restaurants, hotels, attractions } from "../contants/places";

export default function Discover() {
  const navigation = useNavigation();
  const [category, setCategory] = useState("restaurants");
  const [currentPlaces, setCurrentPlaces] = useState(restaurants);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    switch (category) {
      case "restaurants":
        setCurrentPlaces(restaurants);
        break;
      case "hotels":
        setCurrentPlaces(hotels);
        break;
      case "attractions":
        setCurrentPlaces(attractions);
        break;
      default:
        setCurrentPlaces(restaurants);
    }
  }, [category]);

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
            title="Hotels"
            imageSrc={Hotels}
            category={category}
            setCategory={setCategory}
          />
          <MenuItem
            key="attraction"
            title="Attractions"
            imageSrc={Attractions}
            category={category}
            setCategory={setCategory}
          />
          <MenuItem
            key="restaurant"
            title="Restaurants"
            imageSrc={Restaurants}
            category={category}
            setCategory={setCategory}
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
          {currentPlaces.map((item) => (
            <Card key={item.id} data={item} />
          ))}
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
    flexWrap: "wrap",
  },
});
