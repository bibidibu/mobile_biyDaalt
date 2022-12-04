import * as React from 'react';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../Screen/SignInScreen/SignInScreen';
import SignUpScreen from '../Screen/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from '../Screen/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../Screen/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../Screen/NewPasswordScreen/NewPasswordScreen';
import FirstPage from '../../pages/FirstPage';
// import HomeScreen from '../Screen/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
                <Stack.Screen name="FirstPage" component={FirstPage} />
                {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
            </Stack.Navigator>
    );
};

export default Navigation;