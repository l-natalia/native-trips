import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import Colors from "../contants/colors";

export default function ItemScreen({ route }) {
  const navigation = useNavigation();

  const data = route?.params.param;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg",
            }}
            style={styles.image}
          />
          <View style={styles.actionsTop}>
            <TouchableOpacity
              style={{ ...styles.button, backgroundColor: "white" }}
            >
              <Entypo
                name="chevron-left"
                size={24}
                color={Colors.primaryTeal}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.button, backgroundColor: Colors.primaryTeal }}
            >
              <Entypo name="heart" size={24} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.priceContainer}>
            <Text style={styles.price}>99$/person</Text>
          </View>
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
  scrollView: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 230,
    resizeMode: "cover",
    borderRadius: 10,
  },
  actionsTop: {
    position: "absolute",
    flexDirection: "row",
    top: 10,
    justifyContent: "space-between",
    paddingHorizontal: 10,
    width: "100%",
  },
  button: {
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  priceContainer: {
    position: "absolute",
    flexDirection: "row",
    bottom: 10,
    justifyContent: "space-between",
    paddingHorizontal: 10,
    width: "100%",
  },
  price: {
    fontSize: 18,
    color: "white",
  },
});
