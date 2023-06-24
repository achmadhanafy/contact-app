import {View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import Style from './style';
import {Text} from '..';
import {Color} from '../../config/Color';

function Input({
  placeholder,
  prefix,
  style = {},
  label,
  editable = true,
  value,
}) {
  return (
    <View style={style}>
      {label && (
        <Text weight={600} size={12} color={Color.black.light} style={{marginLeft: 15}}>
          {label}
        </Text>
      )}
      <View style={[Style.container]}>
        {prefix}
        <TextInput
          value={value}
          editable={editable}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
}

export default Input;
