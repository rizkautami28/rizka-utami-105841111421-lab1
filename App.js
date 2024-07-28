import * as React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const App = () => {
  const [formLogin, setForm] = React.useState({
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
          onChangeText={(email) => setForm({ ...formLogin, email })}
          value={formLogin.email}
        />
        <Text>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          onChangeText={(password) => setForm({ ...formLogin, password })}
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
