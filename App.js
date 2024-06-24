import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'

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
      padding:20,
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
          marginTop: 20,
        }}>
          harga sesuai dengan tingkat kesulitan pembuatan, ukuran frame dan ukuran buket.
        </Text>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 50,
        }}></View>
          <View style= {{
            marginHorizontal: 10
          }}>
          <Text style={{
            width: 100,
            height: 50,
            color: 'white',
            backgroundColor: 'tan',
            textAlign: 'center',
            lineHeight: 50,
            fontSize: 17,
            borderRadius: 10,
          }}>
            Login
            </Text>
  
            <View style={{
              marginHorizontal: 1
            }}>
            <Text style={{
              width: 100,
              height: 50,
              color: 'white',
              backgroundColor: 'sienna',
              textAlign: 'center',
              lineHeight: 50,
              fontSize: 17,
              borderRadius: 10,
            }}>
              Register
            </Text>
          </View>
        </View>
       </ScrollView>
     </View>
  )
}


export default App;