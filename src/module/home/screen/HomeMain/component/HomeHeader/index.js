import {View, Image, useMemo} from 'react-native';
import React, {useState, useCallback} from 'react';
import {Input, Text} from '../../../../../../component';
import {Close, Search} from '../../../../../../config/Svg';
import {Color} from '../../../../../../config/Color';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {DummyProfile} from '../../../../../../config/Image';

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
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              zIndex: 10,
              backgroundColor: Color.primary30[colorScheme],
              borderRadius: 15,
            }}>
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
            style={{width: 40, height: 40, borderRadius: 25}}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{marginBottom: 16}}>
      {contactRecent?.length > 0 && (
        <View
          style={{
            marginTop: 24,
            marginBottom: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text weight={600}>Recents</Text>
          <TouchableOpacity onPress={() => setContactRecent([])}>
            <Text
              style={{textDecorationLine: 'underline'}}
              color={Color.redDanger[colorScheme]}
              weight={600}>
              Clear
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row', gap: 16}}>
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
        style={{marginTop: 24}}
        prefix={
          <Search width={20} height={20} fill={Color.primary20[colorScheme]} />
        }
        placeholder="Search"
      />
    </View>
  );
}

export default HomeHeader;
