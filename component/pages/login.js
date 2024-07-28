import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import ButtonComponent from '../button/button';
import Inputan from '../TextInput/input';

const Login = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#EEEEEE',
            paddingHorizontal: 30,
            paddingTop: 100,
        }}>
        <View style = {{
            marginBottom: 60
        }}>
        <Text style = {{
                fontWeight: 'bold',
                fontSize: 50
        }}>
            Login
        </Text>
        </View> 
        
        <View style = {{
            marginBottom: 10

        }}>
            <Inputan name= "Email" color="black" />
            <Inputan name= "Password" color= "black" />

        <TouchableOpacity onPress = { () => Navigation.navigate('ForgotPassword')}>
           <Text style = {{
            fontSize: 14,
            color: 'black',
            marginTop: 5,
            marginBottom: 50,
            textAlign: 'right'
           }}>
            Forgot Your Password?
           </Text>
            </TouchableOpacity>    

        </View>
            <ButtonComponent title= "Login" color= "red" />
             <Text style = {{
                fontSize: 14,
                color: 'black',
                textAlign: 'center',
                marginTop: 90,
                marginBottom: 20
             }}>
                Or login with social account
             </Text>

             <View style = {{
                backgroundColor: 'row',
                justifyContent: 'center',
             }}>
          
                <TouchableOpacity style={{
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    width: 92,
                    height: 64,
                    marginHorizontal: 10,
                }}>
                    <Image
                        source={require('../../assets/google.jpg')}
                        style={{ width: 50, height: 50 }}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={{
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    width: 92,
                    height: 64,
                    marginHorizontal: 10,
                }}>
                    <Image
                        source={require('../../assets/fb.jpg')}
                        style={{ width: 50, height: 50 }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Login;