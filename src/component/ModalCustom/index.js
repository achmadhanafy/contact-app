import {View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import React from 'react';
import {SIZE} from '../../util/constant';
import {Color} from '../../config/Color';
import {Text} from '..';
import Button from '../Button';
import {Close} from '../../config/Svg';
import style from './style';

function ModalCustom({
  text,
  img,
  isVisible,
  onPrimaryPress,
  onClosePress,
  primaryLabel,
  children,
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
      style={style.modal}>
      <View style={style.container}>
        <View style={style.p16}>
          <View style={style.closeContainer}>
            <TouchableOpacity onPress={onClosePress}>
              <Close fill={Color.neutral.light} width={20} height={20} />
            </TouchableOpacity>
          </View>

          <View style={style.imgContainer}>{img}</View>
          <Text style={style.text} size={18} weight={600} align="center">
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
