import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Link, useLocalSearchParams, useNavigation } from "expo-router";
import { postData } from "@/src/data";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
const onepost = () => {
  const id = useLocalSearchParams();
  const postId = id.id;
  const post = postData.find((post) => post.id == postId);
  const postNumber = post.comments?.length;
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: true });
  }, [navigation]);
  return (
    <View>
      <Image style={styles.postImg} source={post.img} />
      <View style={styles.commentContainer}>
        <View style={styles.commentStyle}>
          <AntDesign name="hearto" size={24} color="black" />
          <Link
            href={{
              pathname: "/comments",
              params: { id: postId },
            }}
            asChild
          >
            <FontAwesome name="comment-o" size={24} color="black" />
          </Link>
          <Text style={{ fontSize: 20 }}>{postNumber}</Text>
          <Feather name="send" size={24} color="black" />
        </View>
        <View>
          <FontAwesome name="bookmark-o" size={24} color="black" />
        </View>
      </View>
      <Text>{post.desc}</Text>
    </View>
  );
};

export default onepost;

const styles = StyleSheet.create({
  postImg: {
    width: 390,
    height: 390,
  },
  commentContainer: {
    width: 390,
    height: 50,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  commentStyle: {
    flexDirection: "row",
    gap: 10,
  },
});
