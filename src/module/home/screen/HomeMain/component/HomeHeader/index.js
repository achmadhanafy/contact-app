import {View, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Input, Text} from '../../../../../../component';
import {Close, Search} from '../../../../../../config/Svg';
import {Color} from '../../../../../../config/Color';
import {DummyProfile} from '../../../../../../config/Image';
import style from './style';

function HomeHeader({
  colorScheme,
  homeHeader,
  onDebounce,
  onRecentPress = () => {},
}) {
  const [search, setSearch] = useState('');
  const {contactRecent, setContactRecent} = homeHeader;

  const renderContactRecent = ({img, id}) => {
    return (
      <View>
        <TouchableOpacity onPress={() => onRecentPress(id)}>
          <View
            style={[
              style.contactRecent.container,
              {
                backgroundColor: Color.primary30[colorScheme],
              },
            ]}>
            <TouchableOpacity
              onPress={() => {
                const deleteArray = contactRecent?.filter(element => {
                  return element?.id !== id;
                });
                setContactRecent(deleteArray);
              }}>
              <Close fill={Color.white[colorScheme]} width={15} height={15} />
            </TouchableOpacity>
          </View>

          <Image
            source={img?.uri?.includes('http') ? img : DummyProfile}
            style={style.contactRecent.img}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={style.mb16}>
      {contactRecent?.length > 0 && (
        <View style={style.main.recent}>
          <Text weight={600}>Recents</Text>
          <TouchableOpacity onPress={() => setContactRecent([])}>
            <Text
              style={style.underline}
              color={Color.redDanger[colorScheme]}
              weight={600}>
              Clear
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={style.main.recentMap}>
          {contactRecent?.map(element =>
            renderContactRecent({img: {uri: element?.photo}, id: element?.id}),
          )}
        </View>
      </ScrollView>
      <Input
        value={search}
        onChange={val => {
          setSearch(val);
          onDebounce(val);
        }}
        style={style.mt24}
        prefix={
          <Search width={20} height={20} fill={Color.primary20[colorScheme]} />
        }
        placeholder="Search"
      />
    </View>
  );
}

export default HomeHeader;
