import {View} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {Container, Input, Text} from '../../../../component';
import {PhotoPreview} from '../../component';
import {DummyProfile} from '../../../../config/Image';
import {capitalizeFirstLetter} from '../../../../util/function';
import {Color} from '../../../../config/Color';
import ContactDetailForm from './component/ContactDetailForm';
import useContactDetailForm from './component/ContactDetailForm/useContactDetailForm';
import Button from '../../../../component/Button';
import {SIZE} from '../../../../util/constant';
import {EditPen} from '../../../../config/Svg';

function ContactDetail(props) {
  const {
    colorScheme,
    navigation,
    getContactResponse,
    getContact,
    route: {params},
  } = props;

  const [editable, setEditable] = useState(false);

  const contactDetailForm = useContactDetailForm();
  const {contact: detailContact, setContact} = contactDetailForm;

  const contact = useMemo(() => {
    const data = {
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
        onPress={() => setEditable(true)}
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
    </Container>
  );
}

export default ContactDetail;
