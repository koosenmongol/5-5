import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import PagerView from "react-native-pager-view";
import AntDesign from "@expo/vector-icons/AntDesign";
import Post from "@/components/Post";
import Entypo from "@expo/vector-icons/Entypo";
import { postData } from "@/src/data";
import { Link } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
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
      <ScrollView>
        {postData.map((dataPost) => (
          <View style={styles.post}>
            <View style={styles.postHeader}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
              >
                <Image
                  style={styles.profileImage}
                  source={dataPost.profileImage}
                />
                <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                  {dataPost.profileName}
                </Text>
              </View>
              <Entypo name="dots-three-horizontal" size={24} color="black" />
            </View>
            <Image
              style={{ width: "100%", height: Dimensions.get("window").width }}
              source={dataPost.img}
            />
            <View>
              <View style={styles.commentStyle}>
                <AntDesign name="hearto" size={24} color="black" />
                <Link
                  href={{
                    pathname: "/comments",
                    params: { id: dataPost.id },
                  }}
                  asChild
                >
                  <FontAwesome name="comment-o" size={24} color="black" />
                </Link>
                <Feather name="send" size={24} color="black" />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  commentStyle: {
    flexDirection: "row",
    gap: 10,
  },
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
  postHeader: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 7,
  },
  profileImage: {
    width: 36,
    height: 36,
  },
});
