import React, { Component } from 'react';
import { Text, SafeAreaView, StyleSheet, ScrollView, Button, TextInput } from 'react-native';
import CustomInput from '../../components/CustomInput/indexCI';
import CustomButton from '../../components/CustomButton/indexCB';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../../../config';



export class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',

    }
    this.onRegisterPressed.bind(this)
  }

  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [passwordRepeat, setPasswordRepeat] = useState('');

  //const navigation = useNavigation();

  onRegisterPressed() {
    //console.warn('onRegisterPressed');
    // navigation.navigate('ConfirmEmail');
    const { email, password } = this.state;
    firebase.auth().createUserWithEmailAndPassword(email,password)
    .then((result) => {
      console.log(result)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
  // onSignInPress = () => {
  //   //console.warn('onSignInPress');
  //   navigation.navigate('SignIn');
  // }; 
  render(){
    return (
      <ScrollView>
      <SafeAreaView style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
       

        <TextInput placeholder="Username" onChangeText={(username) => this.setState({ username })}/>
        <TextInput placeholder="Email" onChangeText={(email) => this.setState({ email })}/>
        <TextInput placeholder="Password" onChangeText={(password) => this.setState({ password })} secureTextEntry={true}/>
        <TextInput placeholder="Repeat Password" onChangeText={(passwordRepeat) => this.setState({ passwordRepeat })} secureTextEntry={true}/>
        
        <Button title="Register" onPress={() => this.onRegisterPressed()} />


      </SafeAreaView>
      </ScrollView>
    );
  }
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
      marginBottom: 30,
    },
});
export default SignUpScreen;

// credit to https://youtu.be/ALnJLbjI7EY