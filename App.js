import React, {Component} from 'react';
import { Text, View } from 'react-native';

import {NavigationContainer} from "@react-navigation/native";

import BottomTabNavigator from "./components/BottomTabNavigator";
import DrawerNavigator from "./components/DrawerNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
}