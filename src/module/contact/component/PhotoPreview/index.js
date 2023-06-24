import {View, Text, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {EditPen} from '../../../../config/Svg';
import {Color} from '../../../../config/Color';

function PhotoPreview({source, colorScheme}) {
  return (
    <View>
      <Image
        source={source}
        style={{width: 120, height: 120, borderRadius: 24}}
      />
      <View style={{position: 'absolute', bottom: 0, right:-10}}>
        <TouchableOpacity>
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
