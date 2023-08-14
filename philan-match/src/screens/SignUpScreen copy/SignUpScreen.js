import React, {useState} from 'react';
import { Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/indexCB';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const onRegisterPressed = () => {
    console.warn('onRegisterPressed');
  }; 
  
  const onSignInPress = () => {
    console.warn('onSignInPress');
  }; 

  return (
      <ScrollView>
      <SafeAreaView style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
       

        <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
        <CustomInput placeholder="Email" value={email} setValue={setEmail}/>
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
        <CustomInput placeholder="Repeat Password" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry={true}/>
        
        <CustomButton text="Register" onPress={onRegisterPressed} />

        <CustomButton
          text="Forgot password?" 
          onPress={onForgotPassswordPressed} 
          type="TERTIARY"  
        />
         <CustomButton
          text="Have an account? Sign in" 
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
    },
});
export default SignUpScreen;

// credit to https://youtu.be/ALnJLbjI7EY