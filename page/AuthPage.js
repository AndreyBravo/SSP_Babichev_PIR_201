// AuthPage.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,Alert } from 'react-native';

const AuthPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Ошибка', 'Пожалуйста, заполните все поля');
      return;
    }
    // Предположим, что у вас есть функция для проверки учетных данных пользователя
    // Здесь вы можете вызвать эту функцию и передать ей email и password
    // После успешной проверки, выполните следующее:
    navigation.navigate('Home', { email: email }); // Переход на экран Home с передачей email
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Авторизация</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Пароль"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Войти" onPress={handleLogin} />
      <Text style={styles.registerText} onPress={() => navigation.navigate('Register')}>
        Еще не зарегистрированы? Зарегистрируйтесь
      </Text>
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
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  registerText: {
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default AuthPage;
