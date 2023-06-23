import {View, Image} from 'react-native';
import React from 'react';
import {Input, Text} from '../../../../../../component';
import {Search} from '../../../../../../config/Svg';
import {Color} from '../../../../../../config/Color';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {DummyProfile} from '../../../../../../config/Image';

function HomeHeader({colorScheme, homeHeader}) {
  const ContactRecent = ({img}) => {
    return (
      <View style={{width: 35, height: 35}}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: 10,
            backgroundColor: Color.primary20[colorScheme],
            borderRadius: 15,
          }}>
          <TouchableOpacity style={{width: 15, height: 15, padding: 3}}>
            <Text
              style={{bottom: 1.5}}
              align="center"
              size={10}
              color={Color.white[colorScheme]}>
              X
            </Text>
          </TouchableOpacity>
        </View>

        <Image source={img} style={{width: 35, height: 35, borderRadius: 25}} />
      </View>
    );
  };
  return (
    <View>
      <Text size={18} weight={600}>
        Contact List
      </Text>

      <Text style={{marginTop:24,marginBottom: 10}} weight={600}>Recents</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row', gap: 10}}>
          {homeHeader.contactRecent?.map(element => (
            <ContactRecent img={element?.img} />
          ))}
        </View>
      </ScrollView>
      <Input
        style={{marginTop:24}}
        prefix={
          <Search width={20} height={20} fill={Color.primary20[colorScheme]} />
        }
        placeholder="Search"
      />
    </View>
  );
}

export default HomeHeader;
