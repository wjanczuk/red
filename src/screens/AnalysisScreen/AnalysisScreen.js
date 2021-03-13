import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles'

export default function AnalysisScreen() {

    return (
        <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Analysis</Text>
        </View>
        <Text>This is the analysis screen.</Text>
        </View>
    )
}