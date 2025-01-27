import {
  Keyboard,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Link, useLocalSearchParams, useNavigation } from "expo-router";
import { postData } from "@/src/data";
import React, { useEffect, useState } from "react";
export default function Modal() {
  const navigation = useNavigation();
  const [keyboardStatus, setKeyboardStatus] = useState("Keyboard Hidden");
  useEffect(() => {
    navigation.setOptions({ headerShown: true });
  }, [navigation]);
  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus("Keyboard Shown");
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus("Keyboard Hidden");
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  const id = useLocalSearchParams();
  const postId = id.id;
  const post = postData.find((post) => post.id == postId);
  const [commentData, setCommentData] = useState(post.comments);

  return (
    <View style={styles.container}>
      {commentData.map((comment) => (
        <View style={styles.oneComment}>
          <Image style={styles.proImg} source={{ uri: comment.idProfileImg }} />
          <Text>{comment.comment}</Text>
        </View>
      ))}
      <View style={styles.oneComment}>
        <Image
          style={styles.proImg}
          source={require("../assets/images/AccountIcon2.png")}
        />
        <TextInput
          style={styles.input}
          placeholder="Add comment..."
          onSubmitEditing={Keyboard.dismiss}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "start",
    justifyContent: "flex-start",
    padding: 10,
    gap: 10,
  },
  proImg: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
  },
  oneComment: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  input: {
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 4,
  },
});
