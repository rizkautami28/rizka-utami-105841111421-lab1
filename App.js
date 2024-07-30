import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './component/pages/login';
import ForgotPassword from './component/pages/forgotPassword';
import SignUp from './component/pages/SignUp';
import MainPages from './component/pages/mainPages'; 

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="MainPages" component={MainPages} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}

export default App;
