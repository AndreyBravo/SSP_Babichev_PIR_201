// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomePage = ({ route }) => {
  const { email } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Добро пожаловать на страницу Home</Text>
      <Text style={styles.email}>Email пользователя: {email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  email: {
    fontSize: 18,
  },
});

export default HomePage;
