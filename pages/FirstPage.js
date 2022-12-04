// React Native Tab
// https://aboutreact.com/react-native-tab/
 
import { Ionicons } from 'expo-vector-icons';
import { FontAwesome } from 'expo-vector-icons';
import * as React from 'react';
import {TouchableOpacity, StyleSheet, View, Text, SafeAreaView, 
  Image,} from 'react-native';
import { requestFrame } from 'react-native-reanimated/lib/reanimated2/core';

const FirstPage = ({ navigation }) => {

  const [bgName, setBgName] = React.useState('heart-o')
  function switchName(bgName){
    if(bgName=='heart-o'){
      bgName='heart'
    }
    else{
      bgName='heart-o'
    }
    return bgName;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16}}>
        <View
          style={{
            width: 170,
            height: 200,
            backgroundColor: '#fff',
            // flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 14,
          }}>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate('ThirdPage')
            }>
            <Image source={require('../images/sword_icon.png')} style={styles.icon}></Image>
          </TouchableOpacity>
          <View style={{
            flexDirection: 'row',}}>
              <View style={{flex: 0.75}}>
          <Text
            style={{
              marginTop: 3,
              fontSize: 12,
              textAlign: 'left',
              marginLeft: 20,
              fontWeight: 'bold',
            }}>
            Shiny Sword
          </Text>
          <Text
            style={{
              marginTop: 3,
              fontSize: 12,
              textAlign: 'left',
              marginLeft: 20,
              color: '#006BFF',
            }}>
            500₮
          </Text>
          </View>
          <FontAwesome style={{flex: 0.25, marginTop: 5} }
            name= {bgName}
            size={24} 
            color={'#006BFF'}
            onPress={() => setBgName(switchName(bgName))} />
          </View>
        </View>
        
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey'
          }}>
          React Native Tab Navigation
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
          }}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#ABCDFC',
    padding: 10,
    width: 140,
    height: 140,
    marginBottom: 4,
    // margin: 16,
  },
  icon: {
    alignItems: 'center',
    padding: 10,
    width: 130,
    height: 130,
  }
});
export default FirstPage;