import {View} from 'react-native';
import React, {useMemo, useState} from 'react';
import {Container, ModalCustom, Text} from '../../../../component';
import {ModalUploadPhoto, PhotoPreview} from '../../component';
import {DummyProfile} from '../../../../config/Image';
import {Color} from '../../../../config/Color';
import Button from '../../../../component/Button';
import {SCREEN} from '../../../../util/constant';
import {SavePaper} from '../../../../config/Svg';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {IMGBB_API_KEY, apiImGb} from '../../../../util/config';
import useContactDetailForm from '../ContactDetail/component/ContactDetailForm/useContactDetailForm';
import {ContactDetailForm} from '../ContactDetail/component';
import style from './style';
import {ScrollView} from 'react-native-gesture-handler';

function ContactAdd(props) {
  const {colorScheme, navigation, setContact: saveContact} = props;

  const [isShowConfirm, setIsShowConfirm] = useState(false);
  const [isShowUpload, setIsShowUpload] = useState(false);
  const [imagePick, setImagePick] = useState({});

  const contactDetailForm = useContactDetailForm();
  const {contact: detailContact} = contactDetailForm;

  const isDisabled = useMemo(() => {
    const inputForm = Object.values(detailContact);
    let disable = false;

    inputForm?.forEach(element => {
      if (!element) {
        disable = true;
      }
    });
    return disable;
  }, [detailContact]);

  const setSave = imgUrl => {
    saveContact({
      data: {
        firstName: detailContact.firstName,
        lastName: detailContact.lastName,
        age: Number(detailContact.age),
        photo: imgUrl || 'none',
      },
      onSuccess: () => {
        setIsShowConfirm(false);
        Toast.show({
          type: 'success',
          text1: 'Data saved successfully !',
        });
        navigation.navigate(SCREEN.Home.HomeMain);
      },
      onFailed: () => {
        setIsShowConfirm(false);
        Toast.show({
          type: 'error',
          text1: 'Sorry, an error occurred !',
        });
      },
    });
  };

  const onUploadImage = image => {
    const payload = {
      file: image.path,
      fileName: image.filename ?? 'profile.jpg',
    };

    const sendData = new FormData();
    sendData.append('image', {
      uri: payload?.file,
      type: 'image/jpg',
      name: payload?.fileName,
    });
    apiImGb
      .post(`1/upload?key=${IMGBB_API_KEY}`, sendData)
      .then(res => {
        console.log(res);
        setSave(res?.data?.data?.url);
      })
      .catch(err => {
        console.log(err);
        setIsShowConfirm(false);
        Toast.show({
          type: 'error',
          text1: 'Sorry, an error occurred !',
        });
      });
  };

  const onSaveForm = () => {
    if (imagePick?.path) {
      return onUploadImage(imagePick);
    }
    return setSave();
  };

  const renderButton = () => {
    return (
      <Button
        onPress={() => setIsShowConfirm(true)}
        disabled={isDisabled}
        style={style.button.container}>
        <View style={style.button.item}>
          <Text
            style={style.mr10}
            size={16}
            weight={700}
            color={Color.white[colorScheme]}>
            Save
          </Text>
        </View>
      </Button>
    );
  };

  const renderModalConfirm = () => {
    return (
      <ModalCustom
        isVisible={isShowConfirm}
        onClosePress={() => {
          setIsShowConfirm(false);
        }}
        onPrimaryPress={() => onSaveForm()}
        primaryLabel="Yes, Save"
        text="The data that you have entered will be saved"
        img={<SavePaper width={150} height={150} />}
      />
    );
  };

  const renderModalUploadPhoto = () => {
    return (
      <ModalUploadPhoto
        onClosePress={() => setIsShowUpload(false)}
        isVisbile={isShowUpload}
        onImagePick={img => {
          setImagePick(img);
        }}
      />
    );
  };

  return (
    <Container
      title="Add Contact"
      onBackPress={() => navigation.pop()}
      colorScheme={colorScheme}>
      <ScrollView style={{flex: 1}}>
        <View style={style.main.container}>
          <View style={style.itemCenter}>
            <PhotoPreview
              colorScheme={colorScheme}
              onEditPress={() => setIsShowUpload(true)}
              source={imagePick?.path ? {uri: imagePick?.path} : DummyProfile}
            />
          </View>
          <View style={style.mt24}>
            <ContactDetailForm
              contactDetailForm={contactDetailForm}
              colorScheme={colorScheme}
              editable
            />
          </View>
        </View>
      </ScrollView>
      {renderButton()}
      {renderModalConfirm()}
      {renderModalUploadPhoto()}
    </Container>
  );
}

export default ContactAdd;
