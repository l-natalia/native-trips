import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Colors from "../contants/colors";

export default function MenuItem({ title, imageSrc, category, setCategory }) {

  const handlePress = () => {
    setCategory(title.toLowerCase());
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View
        style={[
          styles.imageContainer,
          category === title.toLowerCase() && styles.active,
        ]}
      >
        <Image source={imageSrc} style={styles.image} />
      </View>

      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  active: {
    backgroundColor: "#ededeb",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  text: {
    color: Colors.fontDark,
    fontSize: 14,
  },
});
