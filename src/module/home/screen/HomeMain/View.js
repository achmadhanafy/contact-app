import {View, Image, ScrollView, Modal} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {Container, Input, ModalCustom, Text} from '../../../../component';
import {SplashLogo} from '../../../../config/Image';
import {DeleteData, Search} from '../../../../config/Svg';
import {Color} from '../../../../config/Color';
import {HomeContactList, HomeHeader} from './component';
import useHomeHeader from './component/HomeHeader/useHomeHeader';
import useHomeContactList from './component/HomeContactList/useHomeContactList';
import {BASE_URL, api} from '../../../../util/config';
import {contactApi} from '../../../../redux/contact/contactApi';
import {SCREEN} from '../../../../util/constant';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import {Toast} from 'react-native-toast-message/lib/src/Toast';

function HomeMain(props) {
  const {
    colorScheme,
    navigation,
    getContacts,
    getContactsResponse,
    getContactClear,
    delContact,
  } = props;
  const homeHeader = useHomeHeader();
  const homeContactList = useHomeContactList();
  const isFocus = useIsFocused();

  const [isShowDeleteConfirm, setIsShowDeleteConfirm] = useState(false);
  const [deleteId, setIsDeleteId] = useState(undefined);

  const {listContact, setListContact} = homeContactList;

  // Mount
  useEffect(() => {
    if (isFocus) {
      getContacts();
    }
  }, [getContacts, isFocus]);

  useEffect(() => {
    if (getContactsResponse?.data) {
      setListContact(getContactsResponse?.data);
    }
  }, [getContactsResponse?.data, setListContact]);

  const renderModalDeleteConfirm = () => {
    return (
      <ModalCustom
        isVisible={isShowDeleteConfirm}
        text="Are you sure you want to delete the data ?"
        primaryLabel="Delete"
        img={
          <View
            style={{
              backgroundColor: Color.white[colorScheme],
              paddingHorizontal: 16,
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
            }}>
            <DeleteData width={150} height={150} />
          </View>
        }
        onClosePress={() => setIsShowDeleteConfirm(false)}
        onPrimaryPress={() => {
          delContact({
            id: deleteId,
            onSuccess: () => {
              setIsShowDeleteConfirm(false);
              Toast.show({
                type: 'success',
                text1: 'Data deleted successfully!',
              });
              getContacts();
            },
            onFailed: () => {
              setIsShowDeleteConfirm(false);
              Toast.show({
                type: 'error',
                text1: 'Sorry, an error occurred !',
              });
            },
          });
        }}
      />
    );
  };

  return (
    <Container title="Contact List" colorScheme={colorScheme}>
      <View style={{paddingHorizontal: 16}}>
        <HomeHeader homeHeader={homeHeader} colorScheme={colorScheme} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <HomeContactList
            onDeletePress={id => {
              setIsShowDeleteConfirm(true);
              setIsDeleteId(id);
            }}
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
      {renderModalDeleteConfirm()}
    </Container>
  );
}

export default HomeMain;
