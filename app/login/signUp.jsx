import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import { addUser } from "../../firebaseConfig";

const singUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = async () => {
    const responce = await addUser(email, password);
  };
  return (
    <View style={styles.container}>
      <View style={styles.signIn}>
        <Image
          style={{ width: "60%", height: "10%" }}
          source={require("@/assets/login/iglogo.png")}
        />
        <TextInput
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          style={styles.inputStyle}
        />
        <TextInput
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          style={styles.inputStyle}
        />
        <TextInput placeholder="Full name" style={styles.inputStyle} />
        <TextInput placeholder="Username" style={styles.inputStyle} />

        <Link href={"/login"} asChild>
          <TouchableOpacity onPress={handleClick} style={styles.logIn}>
            <Text style={styles.loginText}>Sign up</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default singUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  signIn: {
    width: "80%",
    height: "60%",
    justifyContent: "flex-start",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDDDDD",
    paddingTop: 20,
    gap: 20,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "#DDDDDD",
    width: "75%",
    height: "12%",
    borderRadius: 3,
  },
  logIn: {
    borderWidth: 1,
    borderColor: "#DDDDDD",
    height: "10%",
    backgroundColor: "#4CB5F9",
    borderRadius: 5,
    width: "75%",
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: { color: "white", fontWeight: "bold" },
});
