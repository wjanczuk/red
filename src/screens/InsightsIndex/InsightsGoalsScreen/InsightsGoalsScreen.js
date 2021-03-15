import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles'

export default function InsightsCycleScreen() {

    return (
        <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Insights</Text>
        </View>
        <Text>This is the insights cycle screen.</Text>
        </View>
    )
}