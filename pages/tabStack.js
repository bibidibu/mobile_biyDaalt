import * as React from 'react';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from 'expo-vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
 
import FirstPage from '../pages/FirstPage';
import SecondPage from '../pages/SecondPage';
import ThirdPage from '../pages/ThirdPage';
import ForthPage from '../pages/ForthPage';
import FifthPage from '../pages/FifthPage';
 
const Tab = createMaterialBottomTabNavigator();

const tabStack = () => {
    return (
      <Tab.Navigator
        initialRouteName="tabstack"
        screenOptions={{
          tabBarColor: '#fff',}}>
        <Tab.Screen
          name="FirstPage"
          component={FirstPage}
          options={{
            tabBarIcon: (color) => (
              <Ionicons
                  name="ios-home-sharp"
                  color={color}
                  size={24}
                />
            ),
          }}  />
        <Tab.Screen
          name="SecondPage"
          component={SecondPage}
          options={{
            tabBarIcon: (color) => (
              <FontAwesome 
              name="heart" 
              size={24} 
              color="color" />
            ),
          }} />
          <Tab.Screen
          name="ThirdPage"
          component={ThirdPage}
          options={{
            tabBarIcon: (color) => (
              <FontAwesome 
              name="shopping-bag" 
              size={24} 
              color="color" />
            ),
          }} />
          <Tab.Screen
          name="ForthPage"
          component={ForthPage}
          options={{
            tabBarIcon: (color) => (
              <Ionicons 
              name="add-circle" 
              size={24} 
              color="color" />
            ),
          }} />
          <Tab.Screen
          name="FifthPage"
          component={FifthPage}
          options={{
            tabBarIcon: (color) => (
              <FontAwesome 
              name="user" 
              size={24} 
              color="color" />
            ),
          }} />
      </Tab.Navigator>
    );
  }

export default tabStack;