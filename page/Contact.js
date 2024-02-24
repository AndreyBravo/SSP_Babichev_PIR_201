// screens/ContactScreen.js

import React from 'react';
import { View, Text, Button } from 'react-native';

export const Contact = ({ navigation }) => {
  const images = [
    "https://brightmagazine.ru/wp-content/uploads/2024/02/adrien-king-XzBluXxBoyQ-unsplash-600x400.jpg",
    "https://brightmagazine.ru/wp-content/uploads/2024/02/parabol-the-agile-meeting-toolbox-BDfQnva_6mU-unsplash-768x512.jpg",
    "https://brightmagazine.ru/wp-content/uploads/2024/02/greg-rosenke-OqP4uMDQ1e0-unsplash-768x512.jpg",
  ];

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Gallery Screen</Text>
      {images.map((image, index) => (
        <Button
          key={index}
          title={`Image ${index + 1}`}
          onPress={() => navigation.navigate('About', { imageUrl: image })}
        />
      ))}
    </View>
  );
}