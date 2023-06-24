import {View} from 'react-native';
import React from 'react';
import {Input} from '../../../../../../component';

function ContactDetailForm({colorScheme, contactDetailForm, editable = false}) {
  const {contact, setContact} = contactDetailForm;

  const onChangeForm = (key, value) => {
    setContact({
      ...contact,
      [key]: value,
    });
  };
  return (
    <View>
      <Input
        onChange={val => onChangeForm('firstName', val)}
        value={contact?.firstName}
        label="First Name"
        editable={editable}
      />
      <Input
        onChange={val => onChangeForm('lastName', val)}
        style={{marginTop: 24}}
        value={contact?.lastName}
        label="Last Name"
        editable={editable}
      />
      <Input
        onChange={val => onChangeForm('age', val)}
        style={{marginTop: 24}}
        value={contact?.age?.toString()}
        label="Age"
        editable={editable}
      />
    </View>
  );
}

export default ContactDetailForm;
