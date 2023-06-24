import {View} from 'react-native';
import React from 'react';
import {Input} from '../../../../../../component';

function ContactDetailForm({colorScheme, contactDetailForm, editable = false}) {
  const {contact} = contactDetailForm;
  return (
    <View>
      <Input value={contact?.firstName} label="First Name" editable={editable} />
      <Input
        style={{marginTop: 24}}
        value={contact?.lastName}
        label="Last Name"
        editable={editable}
      />
      <Input
        style={{marginTop: 24}}
        value={contact?.age?.toString()}
        label="Age"
        editable={editable}
      />
    </View>
  );
}

export default ContactDetailForm;
