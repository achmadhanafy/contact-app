import {View, TextInput} from 'react-native';
import React from 'react';
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
  onChange = () => {},
}) {
  return (
    <View style={style}>
      {label && (
        <Text
          weight={600}
          size={12}
          color={Color.black.light}
          style={{marginLeft: 15}}>
          {label}
        </Text>
      )}
      <View style={[Style.container]}>
        {prefix}
        <TextInput
          style={{
            width: '100%',
            color: editable ? Color.black.light : Color.neutral.light,
          }}
          placeholderTextColor={Color.neutral.light}
          onChangeText={txt => onChange(txt)}
          value={value}
          editable={editable}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
}

export default Input;
