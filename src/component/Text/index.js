import {View, Text} from 'react-native';
import React from 'react';
import {Color} from '../../config/Color';

function TextCustom({
  children,
  size = 14,
  color = Color.black.light,
  align = 'left',
  weight = 'normal',
  style = {},
}) {
  const styling = {
    fontSize: size,
    color,
    textAlign: align,
    fontWeight: weight,
  };

  return <Text style={[styling, style]}>{children}</Text>;
}

export default TextCustom;
