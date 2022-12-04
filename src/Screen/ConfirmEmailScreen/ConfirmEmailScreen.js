import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import CustomInput from '../../Components/CustomInput/CustomInput';
import CustomButton from '../../Components/CustomButton/CustomButton';
import SocialSignInButtons from '../../Components/SocialSignInButton/SocialSignInButton';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {
    const [code, setCode ] = useState('');
    const navigation = useNavigation();

    const onConfirmPressed = () => {
        navigation.navigate('HomeScreen');
    };

    const onSignInPress = () => {
        navigation.navigate('SignIn');
    };

    const onResendPress = () => {
        console.warn('onResendPressed')
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style={styles.title}>Comfirm your email</Text>

            <CustomInput 
                placeholder="Enter your confirmation code" 
                value={code} 
                setValue={setCode} 
            />

            <CustomButton 
                text="Confirm" 
                onPress={onConfirmPressed} 
            />

            <CustomButton
                text="Resend code"
                onPress={onResendPress}
                type="SECONDARY"
            />
          
            <CustomButton
                text="Back to Sign in"
                onPress={onSignInPress}
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
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        color: 'gray',
        marginVertical: 10,

    },
    link: {
        color: '#FDB075',
    },
});

export default ConfirmEmailScreen;