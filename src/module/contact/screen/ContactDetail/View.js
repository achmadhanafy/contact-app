import {View} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {Container, Input, ModalCustom, Text} from '../../../../component';
import {PhotoPreview} from '../../component';
import {DummyProfile} from '../../../../config/Image';
import {Color} from '../../../../config/Color';
import ContactDetailForm from './component/ContactDetailForm';
import useContactDetailForm from './component/ContactDetailForm/useContactDetailForm';
import Button from '../../../../component/Button';
import {SIZE} from '../../../../util/constant';
import {EditPen, SavePaper} from '../../../../config/Svg';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

function ContactDetail(props) {
  const {
    colorScheme,
    navigation,
    getContactResponse,
    getContact,
    putContact,
    route: {params},
  } = props;

  const [editable, setEditable] = useState(false);
  const [isShowConfirm, setIsShowConfirm] = useState(false);

  const contactDetailForm = useContactDetailForm();
  const {contact: detailContact, setContact} = contactDetailForm;

  const contact = useMemo(() => {
    const data = {
      id: getContactResponse?.data?.id,
      photo: getContactResponse?.data?.photo,
      firstName: getContactResponse?.data?.firstName,
      lastName: getContactResponse?.data?.lastName,
      age: getContactResponse?.data?.age,
    };
    if (data?.firstName) {
      setContact(data);
    }
    return data;
  }, [getContactResponse, setContact]);

  useEffect(() => {
    getContact(params?.contactId);
  }, [getContact, params]);

  const renderButton = () => {
    return (
      <Button
        onPress={() => {
          if (editable) {
            return setIsShowConfirm(true);
          }
          setEditable(true);
        }}
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
            {editable ? 'Save' : 'Edit'}
          </Text>
          {!editable && (
            <EditPen width={20} height={20} fill={Color.white[colorScheme]} />
          )}
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
        onPrimaryPress={() => {
          putContact({
            id: detailContact.id,
            data: {
              firstName: detailContact.firstName,
              lastName: detailContact.lastName,
              age: Number(detailContact.age),
              photo: detailContact.photo,
            },
            onSuccess: () => {
              setEditable(false);
              setIsShowConfirm(false);
              Toast.show({
                type: 'success',
                text1: 'Data updated successfully !',
              });
            },
            onFailed: () => {
              setEditable(false);
              setIsShowConfirm(false);
              Toast.show({
                type: 'error',
                text1: 'Sorry, an error occurred !',
              });
            },
          });
        }}
        primaryLabel="Save"
        text="Apakah Anda Yakin Untuk Melakukan Perubahan Tersebut ?"
        img={<SavePaper width={150} height={150} />}
      />
    );
  };

  return (
    <Container
      title="Contact Detail"
      onBackPress={() => navigation.pop()}
      colorScheme={colorScheme}>
      <View style={{flex: 1, paddingHorizontal: 16}}>
        <View style={{alignItems: 'center'}}>
          <PhotoPreview
            colorScheme={colorScheme}
            source={
              contact.photo?.includes('http')
                ? {uri: contact.photo}
                : DummyProfile
            }
          />
        </View>
        <View style={{marginTop: 24}}>
          <ContactDetailForm
            contactDetailForm={contactDetailForm}
            colorScheme={colorScheme}
            editable={editable}
          />
        </View>
        {renderButton()}
      </View>
      {renderModalConfirm()}
    </Container>
  );
}

export default ContactDetail;