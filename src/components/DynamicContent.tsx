import { View, Text } from 'react-native'
import React from 'react'

const DynamicContent = () => {

  const username = "Samuel Forrest";
  const mutliply = (a: number,b: number) => a * b;

  return (
    <View>
      <Text>Hello, {username}!</Text>
      <Text>2 * 3 = {mutliply(2,3)}</Text>
      <Text>{2+2}</Text>
      <Text>{2*10}</Text>
    </View>
  );
};

export default DynamicContent;