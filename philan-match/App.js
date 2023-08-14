//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
//import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen/indexSU';
//import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen/indexCE';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <SignUpScreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC"
  },
});

export default App;