// import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { Home } from "./page/Home";
// import { About } from "./page/About";
// import { Contact } from "./page/Contact";

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="About" component={About} />
//         <Stack.Screen name="Contact" component={Contact} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthPage from './page/AuthPage';
import RegisterPage from './page/RegisterPage';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={AuthPage}
          options={{ title: 'Авторизация' }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterPage}
          options={{ title: 'Регистрация' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
