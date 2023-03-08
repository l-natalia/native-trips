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
              onPress={() => navigation.navigate("Discover")}
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
        <View style={styles.info}>
          <Text style={styles.infoName}>Sample 1</Text>
          <View style={styles.infoLocationContainer}>
            <Entypo name="location-pin" size={24} color={Colors.fontLight} />
            <Text style={styles.infoLocation}>Zakopane</Text>
          </View>
        </View>

        <View style={styles.stats}>
          <View style={styles.statContainer}>
            <View style={styles.iconContainer}>
              <Entypo name="star" size={18} color="black" />
            </View>
            <View>
              <Text style={styles.statText}>3.4</Text>
              <Text style={styles.statText}>Ratings</Text>
            </View>
          </View>
          <View style={styles.statContainer}>
            <View style={styles.iconContainer}>
              <Entypo name="star" size={18} color="black" />
            </View>
            <View>
              <Text style={styles.statText}>$$$</Text>
              <Text style={styles.statText}>Price level</Text>
            </View>
          </View>
        </View>

        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </Text>

        <View style={styles.tags}>
          <TouchableOpacity style={styles.tag}>
            <Text>lorem</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tag}>
            <Text>vege</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contactContainer}>
          <View style={styles.contactItem}>
            <Entypo name="phone" size={18} color={Colors.primaryGrey} />
            <Text>+48 234-234-967</Text>
          </View>
          <View style={styles.contactItem}>
            <Entypo name="mail" size={22} color={Colors.primaryGrey} />
            <Text>sample1@mail.com</Text>
          </View>
          <View style={styles.contactItem}>
            <Entypo name="pin" size={22} color={Colors.primaryGrey} />
            <Text>Krupówki 23, Zakopane</Text>
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
  info: {
    marginTop: 10,
  },
  infoName: {
    color: Colors.fontDark,
    fontSize: 18,
    fontWeight: "bold",
  },
  infoLocationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },
  infoLocation: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.fontLight,
  },
  stats: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 5,
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 4,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
  },
  statText: {
    color: Colors.fontLight,
    fontSize: 12,
  },
  description: {
    marginTop: 15,
    fontSize: 14,
    color: Colors.fontLight,
  },
  tags: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: 10,
    columnGap: 5,
  },
  tag: {
    paddingHorizontal: 3,
    borderRadius: 5,
    backgroundColor: "pink",
  },
  contactContainer: {
    marginTop: 10,
    backgroundColor: "#ededeb",
    borderRadius: 5,
    padding: 5,
    rowGap: 4,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
});
