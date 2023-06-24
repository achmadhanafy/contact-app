import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREEN} from '../util/constant';
import {HomeMain} from '../module/home/screen';
import {SplashScreen} from '../component';
import ContactDetail from '../module/contact/screen/ContactDetail';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={SCREEN.COMPONENT.SplashScreen}>
        <Stack.Screen
          name={SCREEN.COMPONENT.SplashScreen}
          component={SplashScreen}
        />
        <Stack.Screen name={SCREEN.Home.HomeMain} component={HomeMain} />
        <Stack.Screen
          name={SCREEN.CONTACT.ContactDetail}
          component={ContactDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
