import React, {useState} from 'react';
import { Text, SafeAreaView, Image, StyleSheet, useWindowDimensions } from 'react-native';
import logo from '../../assets/images/logo.jpg';
import CustomInput from '../components/CustomInput'

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();
    
  return (
      <SafeAreaView style={styles.root}>
        <Image source={logo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain" />
       

       <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
       <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>

      </SafeAreaView>
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
    },
});
export default SignInScreen;

// credit to https://youtu.be/ALnJLbjI7EY