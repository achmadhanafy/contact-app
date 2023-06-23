import {View, Image} from 'react-native';
import React from 'react';
import {Container, Input, Text} from '../../../../component';
import {SplashLogo} from '../../../../config/Image';
import {Search} from '../../../../config/Svg';
import {Color} from '../../../../config/Color';
import {HomeHeader} from './component';
import useHomeHeader from './component/HomeHeader/useHomeHeader';

function HomeMain(props) {
  const {colorScheme, navigation} = props;
  const homeHeader = useHomeHeader();
  return (
    <Container colorScheme={colorScheme}>
      <View style={{paddingHorizontal: 16, paddingTop: 24}}>
        <HomeHeader homeHeader={homeHeader} colorScheme={colorScheme} />
      </View>
    </Container>
  );
}

export default HomeMain;
