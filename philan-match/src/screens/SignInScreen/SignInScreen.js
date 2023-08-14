import React, {useState} from 'react';
import { Text, SafeAreaView, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native';
import logo from '../../../assets/images/logo.jpg';
import CustomInput from '../../components/CustomInput/indexCI';
import CustomButton from '../../components/CustomButton/indexCB';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    //console.warn('Sign in');
    //validate user
    navigation.navigate('Home');
  }; 

  const onForgotPassswordPressed = () => {
    //console.warn('onForgotPasswordPressed');
    navigation.navigate('ForgotPassword');
  };
  
  const onSignUpPress = () => {
    //console.warn('onSignUpPress');
    navigation.navigate('SignUp')
  }; 

  return (
      <ScrollView>
        <SafeAreaView style={styles.root}>
        <Image source={logo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain" />
       

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
        <CustomButton text="Sign In" onPress={onSignInPressed} />
        <CustomButton
          text="Forgot password?" 
          onPress={onForgotPassswordPressed} 
          type="TERTIARY"  
        />
         <CustomButton
          text="Don't have an account? Create one" 
          onPress={onSignUpPress} 
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
});
export default SignInScreen;

// credit to https://youtu.be/ALnJLbjI7EY