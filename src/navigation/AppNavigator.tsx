import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import HomeScreen from '../screens/home/HomeScreen';
import DeviceDetailsScreen from '../screens/deviceDetails/DeviceDetailsScreen';
import AccountScreen from '../screens/account/AccountScreen';
import {images} from '../assets';

const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            let icon;
            if (route.name === 'Home') {
              icon = focused ? images.HomeIcon : images.HomeIcon;
            } else if (route.name === 'Device Details') {
              icon = focused ? images.DeviceIcon : images.DeviceIcon;
            } else if (route.name === 'Account') {
              icon = focused ? images.AccountIcon : images.AccountIcon;
            }
            return (
              <Image
                source={icon}
                style={{
                  width: size,
                  height: size,
                  tintColor: color,
                  marginTop: 5,
                }}
              />
            );
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#c2c1be',
          tabBarStyle: {
            backgroundColor: '#6a1b9a',
            borderTopWidth: 1,
            borderTopColor: 'gray',
            height: 65,
            borderTopRightRadius: 20,
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: '500',
            marginBottom: 5,
          },
          tabBarTabStyle: {
            alignItems: 'center',
            justifyContent: 'center',
          },
          tabBarShowIcon: true,
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Device Details" component={DeviceDetailsScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
