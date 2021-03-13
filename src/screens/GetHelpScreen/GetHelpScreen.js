import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles'

export default function GetHelpScreen() {

    return (
        <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Get Help</Text>
        </View>
        <Text>This is the get help screen.</Text>
        </View>
    )
}