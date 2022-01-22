
import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodoScreen from './TodoScreen';


const SearchStack = createNativeStackNavigator();

export default function SearchStackScreen({ navigation }) {
  return (
    <SearchStack.Navigator >
      <SearchStack.Screen name="Todo" component={TodoScreen} options={{
      headerShown: false, 
    }}/>
    </SearchStack.Navigator>
  );
}
