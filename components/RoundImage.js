import React from 'react';

import { View, Image, StyleSheet } from 'react-native';
import pic from '../assets/picc.jpg';

export default function RoundImage(){

    return(
        
            <View>
        <Image style={styles.imgStyle} source={require('../assets/picc.jpg')} />
    </View>
        
    )
}

const styles = StyleSheet.create({
    
    imgStyle: {
        height: 120,
        width: 120,
        borderRadius: 60
    }
})