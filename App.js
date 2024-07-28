import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './component/pages/forgotPassword';
import SignUp from './component/pages/SignUp';
import ForgotPassword from './component/pages/forgotPassword';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        style = {{ backgroundColor: 'blue', padding: 10, marginTop: 'center'}}
        onPress = { () => navigation.navigate('Sign Up')}  
      >
        <Text style = {{ color: 'white' }}> Sign Up </Text>
      </TouchableOpacity> 
    </View>

    );
  }

  const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


