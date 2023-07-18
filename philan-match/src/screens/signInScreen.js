import React from 'react';
import { Text, View, Image, StyleSheet, useWindowDimensions } from 'react-native';
import signInScreen from './src/screens/signInScreen';
import logo from '../../../assets/images/logo.jpg';

const signInScreen = () => {
    const {heigth} = useWindowDimensions();
    return (
      <View style={styles.root}>
        <Image source={logo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain" />
      </View>
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
export default signInScreen;

// credit to https://youtu.be/ALnJLbjI7EY