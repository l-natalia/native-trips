import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import Colors from "../contants/colors";
import { useNavigation } from "@react-navigation/native";

export default function Card({ imageSrc, title, location, data }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate("ItemScreen", { param: data })}
    >
      <Image source={{ uri: imageSrc }} style={styles.image} />
      <Text style={styles.title}>
        {title?.lenght > 14 ? `${title.slice(0, 14)}...` : title}
      </Text>
      <Text style={styles.location}>
        {location?.lenght > 14 ? `${location.slice(0, 14)}...` : location}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
    width: 170,
    height: 170,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ededeb",
  },
  image: {
    width: "100%",
    height: 125,
    resizeMode: "cover",
    borderRadius: 5,
  },
  title: {
    color: Colors.fontDark,
    fontSize: 14,
    fontWeight: "bold",
  },
  location: {
    color: Colors.fontDark,
    fontSize: 12,
    fontWeight: "bold",
  },
});
