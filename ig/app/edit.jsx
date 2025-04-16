import {
  Image,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Post from "@/components/Post";
import { Link } from "expo-router";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { getAuth } from "firebase/auth";

const edit = () => {
  const [userData, setUserData] = useState({
    username: "",
    category: "",
    bio: "",
    link: "",
  });
  const email = getAuth().currentUser.email;
  useEffect(() => {
    handleUser(email);
    console.log(email);
  }, []);

  const handleUser = async (email) => {
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Data");

      setUserData(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };
  const save = async () => {
    try {
      await setDoc(doc(db, "users", email), userData);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white", gap: 10 }}>
      <View style={styles.inputStyle}>
        <Text>Username</Text>
        <TextInput
          value={userData.username}
          onChangeText={(text) => setUserData({ ...userData, username: text })}
          style={{ margin: 0, padding: 0 }}
          placeholder="username"
        />
      </View>
      <View style={styles.inputStyle}>
        <Text>category</Text>
        <TextInput
          value={userData.category}
          onChangeText={(text) => setUserData({ ...userData, category: text })}
          style={{ margin: 0, padding: 0 }}
          placeholder="category"
        />
      </View>
      <View style={styles.inputStyle}>
        <Text>bio</Text>
        <TextInput
          value={userData.bio}
          onChangeText={(text) => setUserData({ ...userData, bio: text })}
          style={{ margin: 0, padding: 0 }}
          placeholder="bio"
        />
      </View>
      <View style={styles.inputStyle}>
        <Text>link</Text>
        <TextInput
          value={userData.link}
          onChangeText={(text) => setUserData({ ...userData, link: text })}
          style={{ margin: 0, padding: 0 }}
          placeholder="link"
        />
      </View>
      <TouchableOpacity
        onPress={save}
        style={{
          borderWidth: 1,
          width: 150,
          height: 30,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
        }}
      >
        <Text>Хадгалах</Text>
      </TouchableOpacity>
    </View>
  );
};

export default edit;

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: "#b3b3bb3",
    width: "80%",
    height: 50,
    padding: 3,
    borderRadius: 3,
  },
});
