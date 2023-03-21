import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import Colors from "../contants/colors";
import { useNavigation } from "@react-navigation/native";
import { images } from "../assets";

export default function Card({ data }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate("ItemScreen", { param: data })}
    >
      <Image
        source={images[data.img].uri}
        style={styles.image}
      />
      <Text style={styles.title}>
        {data.title.lenght > 14 ? `${data.title.slice(0, 14)}...` : data.title}
      </Text>
      <Text style={styles.location}>
        {data.location.lenght > 14 ? `${data.location.slice(0, 14)}...` : data.location}
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
