import React from 'react';
import { useState, useEffect } from 'react';
import {useColorScheme } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import QuoteScreen from './components/QuoteScreen';
import TodoScreen from './components/TodoScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import ColorStyle from './ColorStyle';


const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const Tab = createBottomTabNavigator();
  
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Todo list') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Citations') {
              iconName = focused ? 'bulb' : 'bulb-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={24} color={color} />;
          },
          tabBarActiveTintColor: ColorStyle.colors.gold,
          tabBarInactiveTintColor: ColorStyle.colors.muted,
          tabBarStyle: {backgroundColor: isDarkMode ? ColorStyle.colors.navDark: ColorStyle.colors.nav, paddingTop: 5,
          borderTopWidth: 0},
          headerShown: false,
          tabBarHideOnKeyboard: true,
        })}>
        <Tab.Screen name='Todo list' component={TodoScreen} />
        <Tab.Screen name='Citations' component={QuoteScreen} />
      </Tab.Navigator>
      
    </NavigationContainer>

  );
};



export default App;
