import React from "react";
import { View, Text, Image, Button } from "react-native";
import { TouchableOpacity } from "react-native-web";

const Splash = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "#eee",
        flex: 1,
        padding: 20,
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Image
        style={{ height: 200, width: 200, alignSelf: "center" }}
        source={require("../assets/welcome.png")}
      />

      <Text
        style={{
          fontSize: 23,
          fontWeight: "bold",
          marginVertical: 15,
        }}
      >
        Get things with TODO
      </Text>

      <Text>
        {" "}
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum
      </Text>
      <Button
        title="Get Started"
        onPress={() => {
          console.log("ok");
          navigation.navigate("Login");
        }}
      ></Button>
    </View>
  );
};

export default Splash;
