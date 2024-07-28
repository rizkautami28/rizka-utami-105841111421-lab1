import { TextInput } from 'react-native'
import React from 'react'

const Inputan = ({name, color}) =>{
    return(
        <TextInput placeholder={`${name}`}
        placeholderTextColor = {'rgba (0, 0, 0, 0.5)'}
        style = {{
            borderWidth: 1,
            borderColor: 'transparent',
            borderRadius: 5,
            width: 350,
            height: 60,
            marginVertical: 10,
            padding: 10,
            paddingTop: 20,
            BackgroundColor: 'white',
            color: color,
            fontSize: 16,
            textAlignVertical: 'top',
            textAlign: 'left'
        }}
        secureTextEntry = {name === 'Password'}
        />
    )
}
export default Inputan