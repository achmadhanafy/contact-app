import {View, StatusBar} from 'react-native';
import React from 'react';
import style from './style';
import {Color} from '../../config/Color';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ChevronLeft} from '../../config/Svg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text} from '..';

function Container({
  children,
  colorScheme,
  statusBarStyle,
  statusBarColor,
  onBackPress,
  title,
}) {
  return (
    <SafeAreaView
      edges={['top']}
      style={[
        style.container,
        {
          backgroundColor: Color.white[colorScheme],
        },
      ]}>
      <StatusBar
        translucent
        barStyle={statusBarStyle || 'dark-content'}
        backgroundColor={statusBarColor || 'transparent'}
      />
      <View style={{flex: 1}}>
        {title && (
          <View style={style.headerContainer}>
            {onBackPress && (
              <View style={style.backPressContainer}>
                <TouchableOpacity
                  onPress={onBackPress}
                  style={[
                    style.backPress,
                    {
                      borderColor: Color.black[colorScheme],
                    },
                  ]}>
                  <ChevronLeft
                    fill={Color.black[colorScheme]}
                    width={20}
                    height={20}
                  />
                </TouchableOpacity>
              </View>
            )}
            <Text size={18} weight={600}>
              {title}
            </Text>
          </View>
        )}

        {children}
      </View>
    </SafeAreaView>
  );
}

export default Container;
