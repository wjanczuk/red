import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles'

export default function InsightsHormonesScreen() {

    return (
        <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Insights</Text>
        </View>
        <Text>This is the insights hormones screen.</Text>
        </View>
    )
}