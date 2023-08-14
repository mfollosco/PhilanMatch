import React, {useState} from 'react';
import { Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput/indexCI';
import CustomButton from '../../components/CustomButton/indexCB';

const ConfirmEmailScreen = () => {

  const [code, setCode] = useState('');

  const onConfirmrPressed = () => {
    console.warn('onConfirmPressed');
  }; 
  
  const onSignInPress = () => {
    console.warn('onSignInPress');
  }; 

  return (
      <ScrollView>
      <SafeAreaView style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>
       
        <CustomInput placeholder="Enter your confirmation code" value={code} setValue={setCode} secureTextEntry={true}/>

        <CustomButton
          text="Confirm" 
          onPress={onConfirmrPressed}  
        />

      </SafeAreaView>
      </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 100,
        marginTop: 20,
        marginBottom: 20,
    },

    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#051C60',
      margin: 10,
    },
});
export default ConfirmEmailScreen;

// credit to https://youtu.be/ALnJLbjI7EY