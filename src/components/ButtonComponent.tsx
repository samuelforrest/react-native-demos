import { View, Text, Button, Alert, Pressable } from 'react-native'
import React from 'react'

const ButtonComponent = () => {
  return (
    <View>
      <Text>Here are some buttons:</Text>
      <Button 
        title="PRESS ME!" 
        color="red"
        onPress={() => Alert.alert("You Pressed Me!")}
      />
      <Button 
        title="Tap Me!"
        color="crimson"
        onPress={() => console.log("Button Pressed Hard!")}>
      </Button>

      <Button 
        title="Tap Me!"
        color="green"
        onPress={() => console.log("Button Pressed!")}>
      </Button>

      <Pressable
        onPress={() => console.log("Pressable Pressed!")}>
        <Text style={{color: 'blue'}}>Press Me! (Pressable)</Text>
      </Pressable>

      <Pressable onPressIn={() => console.log("Pressable Pressed In!")}>
        <Text style={{color: 'blue'}}>Press Me (In)!</Text>
      </Pressable>

      <Pressable onPressOut={() => console.log("Pressable Pressed Out!")}>
        <Text style={{color: 'blue'}}>Press Me (Out)!</Text>
      </Pressable>

    </View>
  );
};

export default ButtonComponent;