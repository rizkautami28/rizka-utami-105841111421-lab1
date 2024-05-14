import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>info magang abangku</Text>
      <Text style={{
        fontSize: 20,
        fontStyle: 'italic',
        color: 'black',
        textDecorationLine: 'underline',
        textShadowColor: 'red'
      }}>info magang abangku</Text>
      <Text style={{
        fontSize:50,
        fontWeight: 'bold',
        color: 'pink'
      }}>info magang abangku 50! </Text>
      
      
      
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
