import {
  View,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {Container, Input, ModalCustom, Text} from '../../../../component';
import {SplashLogo} from '../../../../config/Image';
import {
  CirclePlus,
  DataNotFound,
  DeleteData,
  Search,
} from '../../../../config/Svg';
import {Color} from '../../../../config/Color';
import {HomeContactList, HomeHeader} from './component';
import useHomeHeader from './component/HomeHeader/useHomeHeader';
import useHomeContactList from './component/HomeContactList/useHomeContactList';
import {BASE_URL, api} from '../../../../util/config';
import {contactApi} from '../../../../redux/contact/contactApi';
import {SCREEN} from '../../../../util/constant';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {debounce} from 'lodash';
import {setContact} from '../../../../redux/contact/contactAction';

function HomeMain(props) {
  const {
    colorScheme,
    navigation,
    getContacts,
    getContactsResponse,
    getContactClear,
    getContactsError,
    getContactsFetch,
    delContact,
  } = props;
  const homeHeader = useHomeHeader();
  const homeContactList = useHomeContactList();

  const {listContact, setListContact} = homeContactList;
  const {contactRecent, setContactRecent} = homeHeader;

  const isFocus = useIsFocused();
  const [isShowDeleteConfirm, setIsShowDeleteConfirm] = useState(false);
  const [deleteId, setIsDeleteId] = useState(undefined);
  const [notFound, setNotFound] = useState(false);

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

  const onDebounce = debounce(val => {
    const filterSearch = listContact?.filter(element => {
      const elementName = `${element?.firstName?.toLowerCase()} ${element?.lastName?.toLowerCase()}`;
      return elementName?.includes(val?.toLowerCase());
    });

    if (!val) {
      setNotFound(false);
      return setListContact(getContactsResponse?.data);
    }

    if (!filterSearch?.length && val) {
      return setNotFound(true);
    }

    setNotFound(false);
    return setListContact(filterSearch);
  }, 500);

  const setRecent = data => {
    const findExist = contactRecent?.find(element => {
      return element?.id === data?.id;
    });
    if (!findExist?.id) {
      setContactRecent([data, ...contactRecent]);
    }
  };

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

  const renderAddButton = () => {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 40,
          right: 40,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate(SCREEN.CONTACT.ContactAdd)}>
          <CirclePlus
            fill={Color.primary30[colorScheme]}
            width={40}
            height={40}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderListContact = () => {
    if (getContactsFetch && !getContactsResponse?.data) {
      return (
        <View style={{marginTop: 24}}>
          <ActivityIndicator
            size={'large'}
            color={Color.primary30[colorScheme]}
          />
        </View>
      );
    }
    if (notFound || getContactsError?.message?.length) {
      return (
        <View style={{marginTop: 46, alignItems: 'center'}}>
          <DataNotFound width={200} height={200} />
          <Text weight={600} size={18}>
            {notFound
              ? ' Opps, Data not found'
              : 'Sorry an error occurred, check your network and try again'}
          </Text>
        </View>
      );
    }
    return (
      <HomeContactList
        onDeletePress={id => {
          setIsShowDeleteConfirm(true);
          setIsDeleteId(id);
        }}
        onContactPress={contact => {
          navigation.navigate(SCREEN.CONTACT.ContactDetail, {
            contactId: contact?.id,
          });
          setRecent(contact);
        }}
        homeContactList={homeContactList}
        colorScheme={colorScheme}
      />
    );
  };

  return (
    <Container title="Contact List" colorScheme={colorScheme}>
      <View style={{paddingHorizontal: 16, flex: 1}}>
        <HomeHeader
          onRecentPress={id => {
            navigation.navigate(SCREEN.CONTACT.ContactDetail, {
              contactId: id,
            });
          }}
          onDebounce={search => {
            onDebounce(search);
          }}
          homeHeader={homeHeader}
          colorScheme={colorScheme}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          {renderListContact()}
        </ScrollView>
        {renderAddButton()}
      </View>
      {renderModalDeleteConfirm()}
    </Container>
  );
}

export default HomeMain;
