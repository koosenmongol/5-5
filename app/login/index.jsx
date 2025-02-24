// signIn Page

import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import { newtreh } from "@/firebaseConfig";

const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const logIn = async () => {
    try {
      const responce = await newtreh(email, password);
      router.push("/home");
      setError("");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode == "auth/invalid-credential")
        setError("Нууц үг буруу байна");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.signIn}>
        <Image
          style={{ width: "60%", height: "10%" }}
          source={require("@/assets/login/iglogo.png")}
        />
        <TextInput
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          placeholder="email"
          style={styles.inputStyle}
        />
        <TextInput
          onChangeText={(text) => setPassword(text)}
          placeholder="password"
          style={styles.inputStyle}
        />
        <TouchableOpacity onPress={logIn} style={styles.logIn}>
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
        <Link href={"/login/signUp"} asChild>
          <TouchableOpacity>
            <Text style={{ fontWeight: "bold", color: "#4CB5F9" }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </Link>
        <Text style={{ color: "red" }}>{error}</Text>
      </View>
    </View>
  );
};

export default index;

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
    height: 50,
    borderRadius: 3,
  },
  logIn: {
    borderWidth: 1,
    borderColor: "#DDDDDD",
    height: 50,
    backgroundColor: "#4CB5F9",
    borderRadius: 5,
    width: "75%",
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: { color: "white" },
});
