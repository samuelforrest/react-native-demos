import { View, Text } from 'react-native';
import React from 'react';
import st from '../styles';

const AgeComponent = () => {
  return ( 
  <View style={st.shadowStyle}>
    <Text>I'm 16 years old</Text>
  </View>
  );
};

export default AgeComponent;