import React, {Component} from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import FeedScreen from "../screens/feed"
import CreatePostScreen from "../screens/createPost"

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return(
    <Tab.Navigator
      screenOptions = {({route}) =>({
        tabBarIcon: ({focused,color,size}) => {
          var iconName;
          if(route.name === "Feed"){
            iconName = focused ? "newspaper" : "newspaper-outline";
          }else if( route.name == "CreatePost"){
            iconName = focused ? "book" : "book-outline";
          }

          return <Ionicons name={iconName} size={size} color= {color}/>
        },
      })}
      tabBarOptions={{
        activeTintColor: "cyan",
        inactiveTintColor: "grey"
      }}>
      <Tab.Screen name = "Feed" component={FeedScreen}/>
      <Tab.Screen name = "CreatePost" component={CreatePostScreen}/>
    </Tab.Navigator>
  )
}

export default BottomTabNavigator