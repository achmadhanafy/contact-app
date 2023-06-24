import {View, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {Color} from '../../config/Color';

function Button({style = {}, children, onPress = () => {}, disabled}) {
  return (
    <TouchableWithoutFeedback disabled={disabled} onPress={onPress}>
      <View
        style={[
          {
            backgroundColor: disabled ? Color.neutral20.light : Color.primary30.light,
            borderRadius: 16,
            alignItems: 'center',
            padding: 12,
          },
          style,
        ]}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Button;
