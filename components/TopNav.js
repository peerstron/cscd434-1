import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    navStyle: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',

    }
})

export default function TopNav(){

    return(
        <View style={styles.navStyle}>
            <Text>Arr</Text>
            <Text>Dot</Text>
        </View>
    )
}
