import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Text} from '../../../../../../component';
import {Color} from '../../../../../../config/Color';
import {capitalizeFirstLetter} from '../../../../../../util/function';
import {Trash} from '../../../../../../config/Svg';
import {DummyProfile} from '../../../../../../config/Image';
import style from './style';

function HomeContactList({
  homeContactList,
  colorScheme,
  onContactPress = () => {},
  onDeletePress = () => {},
}) {
  const {listContact} = homeContactList;

  return (
    <View style={style.main}>
      {listContact?.map(element => (
        <TouchableOpacity
          onPress={() => onContactPress(element)}
          style={style.container}>
          <Image
            source={
              element?.photo?.includes('http')
                ? {uri: element?.photo}
                : DummyProfile
            }
            style={style.img}
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
          <View style={style.delete}>
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
