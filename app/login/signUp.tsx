import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link } from "expo-router";

const singUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.signIn}>
        <Image
          style={{ width: "60%", height: "10%" }}
          source={require("@/assets/login/iglogo.png")}
        />
        <TextInput placeholder="Email" style={styles.inputStyle} />
        <TextInput placeholder="Password" style={styles.inputStyle} />
        <TextInput placeholder="Full name" style={styles.inputStyle} />
        <TextInput placeholder="Username" style={styles.inputStyle} />

        <Link href={"/login"} asChild>
          <TouchableOpacity style={styles.logIn}>
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
