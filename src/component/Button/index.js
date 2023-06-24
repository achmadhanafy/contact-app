import {View, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import {Color} from '../../config/Color';

function Button({style = {}, children, onPress = () => {}}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          {
            backgroundColor: Color.primary30.light,
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
