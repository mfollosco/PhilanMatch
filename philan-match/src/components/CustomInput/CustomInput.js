import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const CustomInput = ({field, placeholder, secureTextEntry}) => {
    return (
      <View style={styles.container}>
      <TextInput
        onChangeText= {field => this.setState({ field })}
        placeholder={placeholder} 
        style={styles.input} 
        secureTextEntry={secureTextEntry}
        />
      </View>
    );
  
};
 
const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'white',
        width: '80%',
        borderColor: '#e8e8e8',
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {

    },
});

export default CustomInput;
