import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import Colors from "../contants/colors";
import { images } from "../assets";

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
          <Image source={images[data.img].uri} style={styles.image} />
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
            <Text style={styles.price}>{data.price}$/person</Text>
          </View>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoName}>{data.title}</Text>
          <View style={styles.infoLocationContainer}>
            <Entypo name="location-pin" size={24} color={Colors.fontLight} />
            <Text style={styles.infoLocation}>{data.location}</Text>
          </View>
        </View>

        <View style={styles.stats}>
          <View style={styles.statContainer}>
            <View style={styles.iconContainer}>
              <Entypo name="star" size={18} color="black" />
            </View>
            <View>
              <Text style={styles.statText}>{data.rating}</Text>
              <Text style={styles.statText}>Rating</Text>
            </View>
          </View>
          <View style={styles.statContainer}>
            <View style={styles.iconContainer}>
              <Entypo name="price-tag" size={18} color="black" />
            </View>
            <View>
              <Text style={styles.statText}>{data.priceLvl}</Text>
              <Text style={styles.statText}>Price level</Text>
            </View>
          </View>
          <View style={styles.statContainer}>
            <View style={styles.iconContainer}>
              <Entypo name="calendar" size={18} color="black" />
            </View>
            <View>
              <Text style={styles.statText}>Open now</Text>
            </View>
          </View>
        </View>

        <Text style={styles.description}>{data.description}</Text>

        <View style={styles.tags}>
          {data.tags.map((tag) => (
            <View style={styles.tag} key={tag}>
              <Text>{tag}</Text>
            </View>
          ))}
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
          <TouchableOpacity style={styles.bookContainer}>
            <View style={styles.bookBtn}>
              <Text style={styles.bookBtnText}>BOOK NOW</Text>
            </View>
          </TouchableOpacity>
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
    color: Colors.fontDark,
    backgroundColor: "rgba(254, 254, 254, 0.6)",
    paddingHorizontal: 5,
    borderRadius: 10,
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
    columnGap: 30,
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
    backgroundColor: Colors.primaryTeal,
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
    paddingHorizontal: 5,
    borderRadius: 5,
    backgroundColor: Colors.primaryTealLight,
  },
  contactContainer: {
    marginTop: 15,
    backgroundColor: "#ededeb",
    borderRadius: 5,
    padding: 10,
    rowGap: 4,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
  bookContainer: {
    flexDirection: "row",
    justifyContent: "center",
		marginTop: 10,
  },
  bookBtn: {
    width: 200,
    backgroundColor: Colors.primaryTeal,
    paddingVertical: 10,
		borderRadius: 10,
  },
  bookBtnText: {
    textAlign: "center",
		color: "white",
		fontWeight: 'bold',
		fontSize: 15,
  },
});
