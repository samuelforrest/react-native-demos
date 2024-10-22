import { View, Text, Button, Alert } from 'react-native'
import React from 'react'

const ButtonComponent = () => {
  return (
    <View>
      <Text>ButtonComponent</Text>
      <Button 
        title="PRESS ME!" 
        color="red"
        onPress={() => Alert.alert("You Pressed Me!")}
      />
      <Button 
        title="Tap Me!"
        color="crimson"
        onPress={() => console.log("Button Pressed!")}>
      </Button>
    </View>
  );
};

export default ButtonComponent;