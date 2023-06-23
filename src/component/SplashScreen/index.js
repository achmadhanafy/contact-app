import {View, Image} from 'react-native';
import React, {useEffect} from 'react';
import Container from '../Container';
import {Color} from '../../config/Color';
import {SplashLogoWhite} from '../../config/Image';
import {SplashImg} from '../../config/Svg';
import {Text} from '..';
import style from './style';
import {SCREEN} from '../../util/constant';

function SplashScreen(props) {
  const {navigation} = props;
  const colorScheme = 'light';

  useEffect(() => {
    setTimeout(() => {
      navigation.replace(SCREEN.Home.HomeMain);
    }, 3000);
  }, []);

  return (
    <Container
      statusBarColor={Color.primary30[colorScheme]}
      statusBarStyle="light-content"
      colorScheme={colorScheme}>
      <View
        style={[
          style.container,
          {
            backgroundColor: Color.primary30[colorScheme],
          },
        ]}>
        <SplashImg width={200} height={200} />
        <Image
          resizeMode="stretch"
          source={SplashLogoWhite}
          style={style.logo}
        />
        <View style={style.developer}>
          <Text color={Color.white[colorScheme]} size={12}>
            By Achmad Hanafy
          </Text>
        </View>
      </View>
    </Container>
  );
}

export default SplashScreen;
