import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Colors from "../contants/colors";
import { HeroImage } from "../assets/index";
import * as Animatable from "react-native-animatable";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.lead}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>Go</Text>
        </View>
        <Text style={styles.leadText}>Travel </Text>
      </View>

      <View style={styles.subtextContainer}>
        <Text style={styles.subtext1}>Enjoy the trip with</Text>
        <Text style={{ ...styles.subtext2, color: Colors.primaryTeal }}>
          Good Moments
        </Text>

        <Text style={styles.subtext3}>
          lorem ipsum dolor sit amet consectetur um dolor sit amet consec
        </Text>
      </View>

      <View style={styles.circle1}></View>
      <View style={styles.circle2}></View>

      <View style={styles.imageContainer}>
        {/* <Image source={require("../assets/hero.png")} style={styles.image} /> */}
        <Animatable.Image
          source={HeroImage}
          style={styles.image}
          animation="fadeIn"
          easing="ease-in-out"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Discover")}>
            <Animatable.View
              style={styles.textContainer}
              animation="pulse"
              easing="ease-out"
              iterationCount="infinite"
            >
              <Text style={styles.buttonText}>Go</Text>
            </Animatable.View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: 35,
  },
  lead: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop: 8,
    alignItems: "center",
    columnGap: 10,
  },
  logo: {
    width: 40,
    height: 40,
    backgroundColor: Colors.primaryBlack,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    color: Colors.primaryTeal,
    fontSize: 18,
    fontWeight: "bold",
  },
  leadText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtextContainer: {
    paddingHorizontal: 20,
    marginTop: 8,
    columnGap: 30,
  },
  subtext1: {
    fontSize: 35,
    color: Colors.primaryGrey,
  },
  subtext2: {
    fontSize: 30,
    color: Colors.primaryTeal,
    fontWeight: "bold",
  },
  subtext3: {
    color: Colors.primaryGrey,
    marginTop: 10,
  },
  circle1: {
    width: 300,
    height: 300,
    backgroundColor: Colors.primaryTeal,
    borderRadius: 150,
    position: "absolute",
    bottom: 80,
    right: "-40%",
  },
  circle2: {
    width: 300,
    height: 300,
    backgroundColor: "#E99265",
    borderRadius: 150,
    position: "absolute",
    bottom: -100,
    left: "-50%",
  },
  imageContainer: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 60,
    width: 56,
    height: 56,
    borderLeftWidth: 2,
    borderTopWidth: 4,
    borderRightWidth: 2,
    borderColor: Colors.primaryTeal,
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primaryTeal,
  },
  buttonText: {
    color: "white",
    fontSize: 28,
  },
});

export default HomeScreen;
