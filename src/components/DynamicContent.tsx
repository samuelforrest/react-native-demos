import { View, Text } from 'react-native'
import React from 'react'

const DynamicContent = () => {

  const username = "Samuel Forrest";

  return (
    <View>
      <Text>Hello, {username}!</Text>
    </View>
  );
};

export default DynamicContent;