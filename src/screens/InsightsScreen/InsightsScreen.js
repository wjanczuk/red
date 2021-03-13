import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles'

export default function InsightsScreen() {

    return (
        <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Insights</Text>
        </View>
        <Text>This is the insights screen.</Text>
        </View>
    )
}