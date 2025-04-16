import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import Post from "@/components/Post";
import { Link } from "expo-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { getAuth } from "firebase/auth";
const profile = () => {
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
  return (
    <View style={styles.container}>
      <View style={styles.profileFollowers}>
        <Image
          style={styles.proImg}
          source={require("../../assets/images/AccountIcon2.png")}
        />
        <View style={styles.followersMain}>
          <View style={styles.followersNumber}>
            <Text style={styles.bold}>1234</Text>
            <Text>Posts</Text>
          </View>
          <View style={styles.followersNumber}>
            <Text style={styles.bold}>5678</Text>
            <Text>Followers</Text>
          </View>
          <View style={styles.followersNumber}>
            <Text style={styles.bold}>9101</Text>
            <Text>Following</Text>
          </View>
        </View>
      </View>
      <View style={styles.bio}>
        <View style={styles.bioText}>
          <Text style={styles.bold}>{userData.username}</Text>
          <Text>{userData.category}</Text>
          <Text>{userData.bio}</Text>
          <Text style={styles.link}>{userData.link}</Text>
        </View>
        <View style={styles.bioFollowed}>
          <Image source={require("../../assets/images/avatars.png")} />
          <Text style={styles.bioFollowedText}>
            Followed by username, username and 100 others
          </Text>
        </View>
        <View style={styles.bioEdit}>
          <Link href={"/edit"} asChild>
            <TouchableOpacity
              style={{
                width: 200,
                borderWidth: 1,
                borderColor: "gray",
                borderRadius: 5,
                height: 25,
                alignItems: "center",
              }}
            >
              <Text>Edit</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
      <Post />
    </View>
  );
};
export default profile;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "white",
  },
  bioFollowedText: {
    width: 300,
    height: 32,
    fontSize: 13,
  },
  link: {},
  bioText: {
    width: "93%",
    height: 89,
  },
  bioFollowed: {
    width: "93%",
    height: 36,
    fontSize: 13,
    flexDirection: "row",
    alignItems: "center",
  },
  bioEdit: {
    width: "93%",
    height: 30,
  },
  bio: {
    fontSize: 13,
    width: "100%",
    height: 195,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  profileFollowers: {
    width: "100%",
    height: 90,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 60,
  },
  proImg: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
  },
  followersMain: {
    width: 197,
    height: 35,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  followersNumber: {
    flexDirection: "column",
    alignItems: "center",
    width: 56,
    height: 35,
    fontSize: 14,
  },
  bold: {
    fontWeight: "bold",
  },
});
