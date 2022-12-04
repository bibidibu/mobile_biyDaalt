import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import Logo from '../../../images/mdesign.png';
import CustomInput from '../../Components/CustomInput/CustomInput';
import CustomButton from '../../Components/CustomButton/CustomButton';
import SocialSignInButtons from '../../Components/SocialSignInButton/SocialSignInButton';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
        navigation.navigate('FirstPage');
    };

    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPassword');
    };

    const onSignUpPress = () => {
        navigation.navigate('SignUp');
    };


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Image 
                source={Logo} 
                style={[styles.logo, {height: height * 0.3}]} 
                resizeMode="contain"
            />

            <CustomInput 
                placeholder="Username" 
                value={username} 
                setValue={setUsername} 
            />
            <CustomInput 
                placeholder="Password" 
                value={password} 
                setValue={setPassword} 
                secureTextEntry={true}
            />

            <CustomButton 
                text="Sign in" 
                onPress={onSignInPressed} 
            />
            <CustomButton 
                text="Forgot password?" 
                onPress={onForgotPasswordPressed} 
                type="TERTIARY"
            />
            <SocialSignInButtons />

            <CustomButton
                text="Don't have a account? Create one"
                onPress={onSignUpPress}
                type="TERTIARY"
            />
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center', 
        padding: 20,
    },
    logo: {
        width: '100%',
        maxWidth: 300,
        maxHeight: 200,
    },
});

export default SignInScreen