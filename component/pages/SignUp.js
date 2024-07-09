import { Text, View, Image } from 'react-native'
import React from "react"
import ButtonComponent from '../button/button'
import Inputan from '../TextInput/input'

const SignUp = () => {
    return (
        <View style = {{
            flex: 1,
            backgroundcolor: '#EEEEEE'
        }}>

        <View style = {{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            marginLeft: 20,
            marginTop: 70
        }}>
     <Text style = {{
        fontWeight: 'bold',
        fontSize: 40
     }}>
        SignUp
     </Text>
     </View>

     <View style = {{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 100

     }}>
      <Inputan name="Email" color ="black"/>
      <Inputan name="Username" color ="black"/>
      <Inputan name="Password" color ="black"/>
     
      <Text style = {{
        fontSize: 14,
        marginTop: 5,
        marginBottom: 30,
        textAlign: 'right',
        marginLeft: 175
      }}>
        Already have an Account?
      </Text>
      <ButtonComponent title = "Sign Up" color = "red" />
     </View>

     <View style = {{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
     }}>
        <Text style = {{
            fontSize: 14,
            color: 'black',
            textAlign: 'center',
            marginBottom: 10,
        }}>
            Or Sign Up With Social Account
        </Text>
        <View style = {{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly'
        }}>
            <View style = {{
             flex: 1,
             backgroundColor: 'white',
             justifyContent: 'center',
             alignItems: 'center',
             borderRadius: 5,
             width: 90,
             height: 80,
             marginRight: 15

        }}>
        
        <Image 
          source = {require('../../assets/google.jpg')}
          style={ {width: 50, height: 50}}
          />
        </View>
        <View style = {{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            width: 90,
            height: 80
    
        }}>
            <Image 
             source = {require('../../assets/fb.jpg')}
             style={ {width: 50, height: 50}}
             />
            </View>  
          </View>
        </View>
     </View>
    )
}

export default SignUp