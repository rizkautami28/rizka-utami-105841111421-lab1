import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const App = () => {
  const [formLogin, setForm] = useState({
    email: '',
    password: ''
  });

  return (
    <View style={styles.container}>
      <Text>Form Login</Text>
      <View style={styles.form}>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(hasil) => setForm({ ...formLogin, email: hasil })}
          value={formLogin.email}
        />
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          onChangeText={(text) => setForm({ ...formLogin, password: text })}
          value={formLogin.password}
        />
        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={() => alert('Login')} />
        </View>
        <View style={styles.displayInfo}>
          <Text>Email: {formLogin.email}</Text>
          <Text>Password: {formLogin.password}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  form: {
    width: '100%',
    maxWidth: 300,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginTop: 10,
  },
  displayInfo: {
    marginTop: 20,
  },
});

export default App;
