import {View} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {Container, Input, ModalCustom, Text} from '../../../../component';
import {ModalUploadPhoto, PhotoPreview} from '../../component';
import {DummyProfile} from '../../../../config/Image';
import {Color} from '../../../../config/Color';
import Button from '../../../../component/Button';
import {SCREEN, SIZE} from '../../../../util/constant';
import {EditPen, SavePaper} from '../../../../config/Svg';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {IMGBB_API_KEY, apiImGb} from '../../../../util/config';
import useContactDetailForm from '../ContactDetail/component/ContactDetailForm/useContactDetailForm';
import {ContactDetailForm} from '../ContactDetail/component';

function ContactAdd(props) {
  const {
    colorScheme,
    navigation,
    setContact: saveContact,
    route: {params},
  } = props;

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

  // useEffect(() => {
  //   getContact(params?.contactId);
  // }, [getContact, params]);

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
        style={{
          position: 'absolute',
          bottom: 0,
          width: SIZE.screen.width - 32,
          alignSelf: 'center',
          marginBottom: 24,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{marginRight: 10}}
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
      <View style={{flex: 1, paddingHorizontal: 16}}>
        <View style={{alignItems: 'center'}}>
          <PhotoPreview
            colorScheme={colorScheme}
            onEditPress={() => setIsShowUpload(true)}
            source={imagePick?.path ? {uri: imagePick?.path} : DummyProfile}
          />
        </View>
        <View style={{marginTop: 24}}>
          <ContactDetailForm
            contactDetailForm={contactDetailForm}
            colorScheme={colorScheme}
            editable
          />
        </View>
        {renderButton()}
      </View>
      {renderModalConfirm()}
      {renderModalUploadPhoto()}
    </Container>
  );
}

export default ContactAdd;
