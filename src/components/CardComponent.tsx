import { View, Text, Image, Button } from 'react-native'
import React from 'react'

const CarcComponent = () => {
  return (
    <View style={{alignItems: "center", borderColor: "black",}}>
      <Image
        source={ require ("../assets/cardimage.jpg") }
        style={{ width: 200, height: 200, borderRadius: 100, alignItems: "center", justifyContent: "center", margin: 10, }}      
      />

      <Text style={{ fontSize: 25, }}>
        John Appleseed
      </Text>

      <Text style={{ fontSize: 18, margin:15, textAlign: "center", }}>
        My name is John Appleseed and I love coding in React Native! 
      </Text>

      <Button
        onPress={() => alert("Hi I am John!")}
        title="Press me!"
        color="red"
      />

    </View>
  );
};

export default CarcComponent;