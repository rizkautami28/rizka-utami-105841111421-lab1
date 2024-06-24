import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import ButtonComponent from './component/button/button.js'

const App = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor:'#000'
    }}>
    <Image source={require('./assets/latar.jpg')}
    style={{
      width: '100%',
      height: '100%',
      position: 'absolute',
      opacity: 0.5,
      zIndex: -1,
    }}
    resizeMode="cover"
    />
     <ScrollView contentContainerStyle={{
      flexGrow: 1,
      justifyContent: 'row',
      alignContent:'center',
      alignItems: 'center',
      padding:50,
       }}>
        <Image source={require('./assets/comely.png')}
        style={{
          width: 200,
          height: 200,
          marginTop: 50,
          opacity: 1,
          zIndex: 1,
        }}
        />
        <Text style={{
          color:'white',
          fontSize: 28,
          fontWeight: '300',
          textAlign: 'center',
          marginTop: 20,
        }}>
          Jual Dry florist
        </Text>
        <Text style={{
          color:'white',
          fontSize: 18,
          textAlign: 'center',
          marginTop: 20,
        }}>
          Tersedia Buanga kering, Buket buang kering, Frame bunga kering dan bisa request bentuk.
        </Text>
        <Text style={{
          color: 'white',
          fontSize: 18,
          textAlign: 'center',
          marginTop: 30,
        }}>
          harga sesuai dengan tingkat kesulitan pembuatan, ukuran frame dan ukuran buket.
        </Text>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
          marginBottom: 70,
        }}>
          <ButtonComponent title= "Sign In" color= "tan" />
          <ButtonComponent title= "Sign Up" color= "sienna" />
        </View>
       </ScrollView>
     </View>
  )
}


export default App;