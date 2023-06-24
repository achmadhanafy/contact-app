import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {EditPen} from '../../../../config/Svg';
import {Color} from '../../../../config/Color';

function PhotoPreview({
  source,
  colorScheme,
  onEditPress = () => {},
  imagePick,
}) {
  return (
    <View>
      <Image
        source={imagePick?.uri ? imagePick : source}
        style={{width: 120, height: 120, borderRadius: 24}}
      />
      <View style={{position: 'absolute', bottom: 0, right: -10}}>
        <TouchableOpacity onPress={onEditPress}>
          <View
            style={{
              backgroundColor: Color.primary20[colorScheme],
              width: 30,
              height: 30,
              borderRadius: 16,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <EditPen fill={Color.white[colorScheme]} width={18} height={18} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default PhotoPreview;
