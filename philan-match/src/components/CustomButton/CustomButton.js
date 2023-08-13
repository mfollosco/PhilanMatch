import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'

const CustomButton = ({ onPress, text, type = "PRIMARY" }) => {
    return (
      <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
        <Text style={[styles.text, styles[`text_${type}`]]}> {text} </Text>
      </Pressable>
    );

};

const styles = StyleSheet.create({
    container: {

        width: '80%',
        marginVertical: 15,

        alignItems: 'center',
        borderRadius: 5,
    },

    container_PRIMARY: {
        backgroundColor: '#1D8169',
        padding: 15,
    },

    container_TERTIARY: { },

    text: {
        fontWeight: 'bold',
        color: 'white',
        padding: 2
    },

    text_TERTIARY: {
        color: 'gray',
    },
});

export default CustomButton;