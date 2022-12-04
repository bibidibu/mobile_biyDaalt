// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/
 
import * as React from 'react';
import {Button, View, Text, SafeAreaView, TouchableOpacity, StyleSheet,Image,TextInput} from 'react-native';
import { FontAwesome } from 'expo-vector-icons';
import { SelectList } from 'react-native-dropdown-select-list';
const ThirdPage = ({navigation}) => {
  const [selected, setSelected]= React.useState('')
  const sizeData=[
    {key:'1', value:'Жижиг'},
    {key:'1', value:'Дунд'},
    {key:'1', value:'Том'},
  ];
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
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
      <View
          style={{
            width: 340,
            height: 500,
            backgroundColor: '#fff',
            // flex: 1,
            alignItems: 'center',
            marginTop: 14,
            marginLeft: 20,
          }}>
          <TouchableOpacity
            style={styles.button}
            onPress={
              () => navigation.navigate('ThirdPage')
            }>
            <Image source={require('../images/sword_icon.png')} style={styles.icon}></Image>
          </TouchableOpacity>
          <View style={{
            flexDirection: 'row',margin:20, marginBottom: 10, fontSize:20}}>
              <View style={{flex: 0.85}}>
          <Text
            style={{
              textAlign: 'left',
              marginLeft: 20,
              fontWeight: 'bold',
            }}>
            Shiny Sword
          </Text>
          <Text
            style={{
              marginTop: 10,
              textAlign: 'left',
              marginLeft: 20,
              color: '#006BFF',
            }}>
            500₮
          </Text>
          </View>
          <FontAwesome style={{flex: 0.15, marginTop: 5} }
            name= {bgName}
            size={24} 
            color={'#006BFF'}
            onPress={() => setBgName(switchName(bgName))} />
          </View>
          <View style={{ flexDirection: 'row'}}>
            <SelectList
            style={styles.selectList}
            data={sizeData}
            setSelected={setSelected}
            dropdownStyles={{backgroundColor: '#ABCDFC'}}
            dropdownItemStyles={{marginHorizontal: 10}}
            dropdownTextStyles={{color: 'white'}}
            placeholder= 'Хэмжээ'
            maxHeight={100}
            />
            <TextInput style={styles.input}></TextInput>
          </View>
          <TouchableOpacity 
            onPress={()=>alert("Амжилттай нэмэгдлээ!")}
            style={styles.button1}
          >
            <Text style={styles.button1Text}>Сагсанд нэмэх</Text>
          </TouchableOpacity>
          
            
        </View>
      </View>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#ABCDFC',
    padding: 10,
    width: 280,
    height: 280,
    marginBottom: 4,
    marginTop: 20, 
    borderRadius: 20,   
    // margin: 16,
  },
  icon: {
    alignItems: 'center',
    padding: 10,
    width: 260,
    height: 260,
  },
  selectList: {
    flex: 0.5,
    backgroundColor: '#ABCDFC',
  },
  input: { 
    borderWidth: 1,
    borderColor: 'gray',
    marginLeft: 20,
    flex: 0.5,
    height: 45,
    borderRadius: 10,
  },
  button1: {
    backgroundColor: '#ABCDFC',
    height: 100,
    width: 280,
    marginTop: 15,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    borderWidth: 1,
  },
  button1Text: {
    textAlign: 'center',
    fontWeight: 'bold',

  }
});
export default ThirdPage;