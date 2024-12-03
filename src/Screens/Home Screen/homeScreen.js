import { View, Text,  TextInput } from 'react-native'
import React from 'react'
import { colors } from '../../Colors/colors'

export default function homeScreen() {
  return (
    <View style={{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:colors.primary
    }}>
      <Text>homeScreen</Text>
      

  <TextInput>

  </TextInput>

    </View>
  )
}





