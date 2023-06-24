import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Text} from '../../../../../../component';
import {Color} from '../../../../../../config/Color';
import {capitalizeFirstLetter} from '../../../../../../util/function';
import {Trash} from '../../../../../../config/Svg';
import {DummyProfile} from '../../../../../../config/Image';

function HomeContactList({
  homeContactList,
  colorScheme,
  onContactPress = () => {},
  onDeletePress = () => {},
}) {
  const {listContact} = homeContactList;

  return (
    <View style={{marginTop: 24, paddingBottom: 450}}>
      {listContact?.map(element => (
        <TouchableOpacity
          onPress={() => onContactPress(element)}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 24,
          }}>
          <Image
            source={
              element?.photo?.includes('http')
                ? {uri: element?.photo}
                : DummyProfile
            }
            style={{width: 40, height: 40, borderRadius: 20, marginRight: 10}}
          />
          <View>
            <Text size={14} color={Color.black[colorScheme]} weight={600}>
              {capitalizeFirstLetter(element?.firstName)}{' '}
              {capitalizeFirstLetter(element?.lastName)}
            </Text>
            <Text size={12} color={Color.neutral[colorScheme]}>
              {element?.age}
            </Text>
          </View>
          <View style={{position: 'absolute', right: 20}}>
            <TouchableOpacity onPress={() => onDeletePress(element?.id)}>
              <Trash
                fill={Color.redDanger[colorScheme]}
                width={18}
                height={18}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default HomeContactList;
