import React from 'react';
import { View, Text, image, StyleSheet } from 'react-native';


export default function Home(){
    return(
        <View style={styles.homeStyle}>
            <Text style={styles.textStyle}>My Profile</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    homeStyle: {
        marginTop: 20
    },
    textStyle: {
        fontSize: 30
    }
})