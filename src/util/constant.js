import {Dimensions} from 'react-native';

export const SCREEN = {
  COMPONENT: {
    SplashScreen: 'SplashScreen',
  },
  Home: {
    HomeMain: 'HomeMain',
  },
  CONTACT: {
    ContactDetail: 'ContactDetail',
    ContactAdd: 'ContactAdd',
  },
};

export const SIZE = {
  screen: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
};
