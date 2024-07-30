import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonComponent = ({ title, color, onPress }) =>  {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 10
        }}>

        <Text style= {{
            width: 150,
            height: 40,
            color: 'white',
            backgroundColor: color,
            textAlign: 'center',
            lineHeight: 50,
            fontSize: 20,
            borderRadius: 50
            }}>
            {title}
            </Text> 
        </View> 
    </TouchableOpacity>
    )
}

export default ButtonComponent

     