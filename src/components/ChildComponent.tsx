import { View, Text, } from 'react-native'
import React from 'react'

inteface ChildProps {
  name: string;
  age: numnber;
  hobbie: string[];
};

const ChildComponent = ({name,age,hobbies}: ChildProps) => {
  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <Text>Hobbies: {hobbies}</Text>
    </View>
  );
};

export default ChildComponent;