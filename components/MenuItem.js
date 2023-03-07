import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Colors from "../contants/colors";

export default function MenuItem({ title, imageSrc, type, setType }) {

	const handlePress = () => {
		setType(title.toLowerCase())
	}

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View
        style={[
          styles.imageContainer,
          type === title.toLowerCase() && styles.active,
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
    width: 50,
    height: 50,
    borderRadius: 25,
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
    color: Colors.primaryTeal,
    fontSize: 12,
  },
});
