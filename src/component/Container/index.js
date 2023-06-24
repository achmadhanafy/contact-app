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
      <View style={{flex:1}}>
        {title && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 24
            }}>
            {onBackPress && (
              <View style={{position: 'absolute', left: 16}}>
                <TouchableOpacity
                  onPress={onBackPress}
                  style={{
                    borderColor: Color.black[colorScheme],
                    borderWidth: 1,
                    borderRadius: 16,
                    width: 30,
                    height: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
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
