import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import PagerView from "react-native-pager-view";
import AntDesign from "@expo/vector-icons/AntDesign";
import Post from "@/components/Post";

const index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.homeHeader}>
        <View>
          <Image source={require("../../assets/home/instaLoco.png")} />
        </View>
        <View style={styles.headerLoco}>
          <AntDesign name="hearto" size={24} color="black" />
          <Image source={require("../../assets/home/directMessage.png")} />
          <AntDesign name="plussquareo" size={24} color="black" />
        </View>
      </View>
      <View style={styles.homeStory}>
        <Image source={require("../../assets/home/Story user.png")} />
        <Image source={require("../../assets/home/Story user (1).png")} />
        <Image source={require("../../assets/home/Story user (2).png")} />
        <Image source={require("../../assets/home/Story user (3).png")} />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
  homeHeader: {
    width: "100%",
    padding: 5,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerLoco: {
    flexDirection: "row",
    gap: 20,
  },
  homeStory: {
    flexDirection: "row",
    width: "100%",
    height: 105,
    gap: 12,
  },
});
