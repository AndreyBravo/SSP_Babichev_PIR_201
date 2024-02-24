// screens/HomeScreen.js

import React from 'react';
import { View, Text, Button } from 'react-native';

export const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      {/* <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      /> */}
      <Button
        title="Go to Contact"
        onPress={() => navigation.navigate('Contact')}
      />
    </View>
  );
}
