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
            <TouchableOpacity style={{
                position: 'absolute',
                top: 60,
                left: 20,
            }}>
                <Image
                    source={require('../../assets/back.jpg')}
                    style={{ width: 30, height: 30 }}
                />
            </TouchableOpacity>
            
            <View style={{
                marginBottom: 60,
                marginTop: 40
            }}>
                <Text style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}>
                    Login
                </Text>
            </View>

            <View style={{
                marginBottom: 10
            }}>
                <Inputan name="Email" color="black" />
                <Inputan name="Password" color="black" />
            </View>    

            <Text style={{
                fontSize: 14,
                color: 'black',
                marginTop: 5,
                marginBottom: 50,
                textAlign: 'right'
            }}>
                Forgot You Password?
            </Text>
    
            <ButtonComponent title="LOGIN" color="red"  />

            <Text style={{
                fontSize: 14,
                color: 'black',
                marginTop: 90,
                marginBottom: 20,
                textAlign: 'center'
            }}>
                or Login with social account
            </Text>
                
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center'
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