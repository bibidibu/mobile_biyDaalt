// React Native Tab
// https://aboutreact.com/react-native-tab/
import 'react-native-gesture-handler';
 
import * as React from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import { FontAwesome } from 'expo-vector-icons';
import { Ionicons } from '@expo/vector-icons';
 
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import ForthPage from './pages/ForthPage';
import FifthPage from './pages/FifthPage';
import logStack from './src/Navigation/index';
 
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

function TabStack() {
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
 
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen
          name="TabStack"
          options={{ drawerLabel: 'First page Option', 
          title: 'App',
          headerRight: () => (
            <Ionicons
              color={'#000'}
              size={30}
              name="search"
              onPress={() => alert('This is a icon!')}
            />
          ),
        headerTitleStyle: {
          marginLeft: 120,
        }}}
          component={TabStack} />
        <Drawer.Screen
          name="logStack"
          options={{ drawerLabel: 'Second page Option' }}
          component={logStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
 
export default App;