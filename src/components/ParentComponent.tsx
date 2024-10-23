import { View, Text } from 'react-native'
import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
  return (
    <View>
      <Text>ParentComponent</Text>

      <ChildComponent 
        name="Samuel Forrest"
        age="16"
        hobbies={["Coding", "Cooking", "Music"]}/>
    </View>
  )
}

export default ParentComponent