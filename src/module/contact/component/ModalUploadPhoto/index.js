import React from 'react';
import {ModalCustom} from '../../../../component';
import {AvatarPhoto} from '../../../../config/Svg';
import ImagePicker from 'react-native-image-crop-picker';

function ModalUploadPhoto({
  isVisbile,
  onClosePress = () => {},
  onImagePick = () => {},
}) {
  const openPicker = () => {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      cropping: true,
      compressImageQuality: 0.65,
      mediaType: 'photo',
      forceJpg: true,
    })
      .then(image => {
        onClosePress();
        onImagePick(image);
      })
      .catch(err => {
        onClosePress();
        console.log(err);
      });
  };

  return (
    <ModalCustom
      isVisible={isVisbile}
      onClosePress={onClosePress}
      onPrimaryPress={openPicker}
      text="Upload an image from your gallery"
      primaryLabel="Choose Photo"
      img={<AvatarPhoto width={150} height={150} />}
    />
  );
}

export default ModalUploadPhoto;
