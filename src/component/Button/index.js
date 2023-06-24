import {View} from 'react-native';
import React from 'react';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Color} from '../../config/Color';

function Button({style = {}, children, onPress = () => {}}) {
  return (
    <View
      style={[
        {backgroundColor: Color.primary30.light, borderRadius: 16},
        style,
      ]}>
      <TouchableWithoutFeedback
        style={{alignItems: 'center', padding: 12}}
        onPress={onPress}>
        {children}
      </TouchableWithoutFeedback>
    </View>
  );
}

export default Button;
