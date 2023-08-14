import React, {useState} from 'react';
import { Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput/indexCI';
import CustomButton from '../../components/CustomButton/indexCB';
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {

  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const navigation = useNavigation();
  
  const onSubmitPressed = () => {
    //console.warn('onSubmitPressed');
    navigation.navigate('Home');
  }; 

  const onSignInPress = () => {
    //console.warn('onSignInPress');
    navigation.navigate('SignIn');
  }; 

  return (
      <ScrollView>
      <SafeAreaView style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
       
        <CustomInput 
        placeholder="Code" 
        value={code} 
        setValue={setCode} 
        secureTextEntry={true}
        />
        
        <CustomInput 
        placeholder="Enter your new password" 
        value={newPassword} 
        setValue={setNewPassword} 
        secureTextEntry={true}
        />

        <CustomButton
          text="Submit" 
          onPress={onSubmitPressed}  
        />

        <CustomButton
          text="Back to Sign In" 
          onPress={onSignInPress}  
          type="TERTIARY"
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
      marginTop: 40,
      marginBottom: 20,
    },
});
export default NewPasswordScreen;

// credit to https://youtu.be/ALnJLbjI7EY