import React from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';

import {images} from '../../assets';
import {styles} from './customHeader.style';

const CustomHeader = ({title, onPressNotification}: any) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.startView}></View>
      <View style={styles.centerView}>
        <Text style={styles.headerTxt}>{title}</Text>
      </View>
      <View style={styles.endView}>
        <TouchableOpacity onPress={onPressNotification}>
          <Image
            source={images.notification}
            style={styles.headerIconStyle}
            resizeMode="contain"
            tintColor={'white'}
          />
        </TouchableOpacity>
        <Menu>
          <MenuTrigger>
            <Image
              source={images.dots}
              style={styles.headerIconStyle}
              resizeMode="contain"
              tintColor={'white'}
            />
          </MenuTrigger>
          <MenuOptions
            customStyles={{
              optionsContainer: styles.menuOptionsContainer,
              optionWrapper: styles.menuOptionWrapper,
              optionText: styles.menuOptionText,
            }}>
            <MenuOption onSelect={() => Alert.alert('Settings')}>
              <View style={styles.titleAndIcon}>
                <Text style={styles.menuTxt}>Settings</Text>
                <Image
                  source={images.settings}
                  style={styles.headerIconStyle}
                  resizeMode="contain"
                  tintColor={'gray'}
                />
              </View>
            </MenuOption>
            <MenuOption onSelect={() => Alert.alert('Logout')}>
              <View style={styles.titleAndIcon}>
                <Text style={styles.menuTxt}>Logout</Text>
                <Image
                  source={images.logout}
                  style={styles.headerIconStyle}
                  resizeMode="contain"
                  tintColor={'gray'}
                />
              </View>
            </MenuOption>
          </MenuOptions>
        </Menu>
      </View>
    </View>
  );
};

export default CustomHeader;
