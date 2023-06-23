import {View, Text} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import Style from './style';

function Input({placeholder, prefix, style = {}}) {
  return (
    <View style={[Style.container, style]}>
      {prefix}
      <TextInput placeholder={placeholder} />
    </View>
  );
}

export default Input;
