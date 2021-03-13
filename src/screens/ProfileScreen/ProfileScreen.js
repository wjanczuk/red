import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles'

export default function ProfileScreen() {

    return (
        <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Profile</Text>
        </View>
        <Text>This is the profile screen.</Text>
        </View>
    )
}