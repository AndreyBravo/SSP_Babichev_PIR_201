// screens/AboutScreen.js

import React from "react";
import { View, Text, Button, Image } from "react-native";

export const About = ({ navigation, route }) => {
  const { imageUrl } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Image Details Screen</Text>
      <Image
        source={{ uri: imageUrl }}
        style={{ width: 200, height: 200, marginVertical: 20 }}
      />
    </View>
  );
};
