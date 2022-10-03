import React, {Component} from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";

import BottomTabNavigator from "./BottomTabNavigator";
import ProfileScreen from  "../screens/profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return(
    <Drawer.Navigator>
      <Drawer.Screen name= "Inicio" component={BottomTabNavigator}/>
      <Drawer.Screen name= "Profile" component={ProfileScreen}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigator;