import {View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import React from 'react';
import {SIZE} from '../../util/constant';
import {Color} from '../../config/Color';
import {Text} from '..';
import Button from '../Button';
import {Close, SavePaper} from '../../config/Svg';

function ModalCustom({
  text,
  img,
  isVisible,
  onPrimaryPress,
  onClosePress,
  primaryLabel,
  children
}) {
  return (
    <Modal
      isVisible={isVisible}
      deviceHeight={SIZE.screen.height}
      deviceWidth={SIZE.screen.width}
      swipeDirection={null}
      useNativeDriverForBackdrop={true}
      backdropTransitionOutTiming={0}
      animationInTiming={500}
      animationOutTiming={500}
      style={{flex: 1, justifyContent: 'flex-end', margin: 0}}>
      <View
        style={{
          backgroundColor: Color.white.light,
          paddingTop: 12,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          margin: 0,
          zIndex: -1,
        }}>
        <View style={{padding: 16}}>
          <View style={{position: 'absolute', left: 15,top:5, zIndex: 10}}>
            <TouchableOpacity
              onPress={onClosePress}>
              <Close fill={Color.neutral.light} width={20} height={20} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              top: -100,
              position: 'absolute',
              width: SIZE.screen.width,
              alignItems: 'center',
            }}>
            {img}
          </View>
          <Text
            style={{marginTop: 48, marginBottom: 24}}
            size={18}
            weight={600}
            align="center">
            {text}
          </Text>
          {children}
          <Button onPress={onPrimaryPress}>
            <View>
              <Text color={Color.white.light} size={16} weight={700}>
                {primaryLabel}
              </Text>
            </View>
          </Button>
        </View>
      </View>
    </Modal>
  );
}

export default ModalCustom;
