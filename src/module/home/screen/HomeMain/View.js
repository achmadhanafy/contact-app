import {View, Image, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {Container, Input, Text} from '../../../../component';
import {SplashLogo} from '../../../../config/Image';
import {Search} from '../../../../config/Svg';
import {Color} from '../../../../config/Color';
import {HomeContactList, HomeHeader} from './component';
import useHomeHeader from './component/HomeHeader/useHomeHeader';
import useHomeContactList from './component/HomeContactList/useHomeContactList';
import {BASE_URL, api} from '../../../../util/config';
import {contactApi} from '../../../../redux/contact/contactApi';
import {SCREEN} from '../../../../util/constant';

function HomeMain(props) {
  const {colorScheme, navigation, getContacts, getContactsResponse, getContactClear} = props;
  const homeHeader = useHomeHeader();
  const homeContactList = useHomeContactList();

  const {listContact, setListContact} = homeContactList;

  // Mount
  useEffect(() => {
    getContacts();
  }, []);

  useEffect(() => {
    if (getContactsResponse?.data) {
      setListContact(getContactsResponse?.data);
    }
  }, [getContactsResponse?.data, setListContact]);

  return (
    <Container title="Contact List" colorScheme={colorScheme}>
      <View style={{paddingHorizontal: 16}}>
        <HomeHeader homeHeader={homeHeader} colorScheme={colorScheme} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <HomeContactList
            onContactPress={contact => {
              navigation.navigate(SCREEN.CONTACT.ContactDetail, {
                contactId: contact?.id,
              });
            }}
            homeContactList={homeContactList}
            colorScheme={colorScheme}
          />
        </ScrollView>
      </View>
    </Container>
  );
}

export default HomeMain;
