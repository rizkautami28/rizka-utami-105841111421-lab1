import { StyleSheet, Text, View, Image } from "react-native";

import 'react-native';
const App = () => {
  return (

    <View style = {{
      flex: 1, flexDirection:'column',}}>
      <View style={{
         flex:1, backgroundColor: 'purple', }}></View>
     <View style={{
      flex: 1, backgroundColor: 'green', }}></View>
      

      <View style={{ flex: 1, flexDirection: 'row'}}>
     <View style={{flex:1, backgroundColor: 'blue', }}></View>
    </View>
     </View>
  )
}

export default App