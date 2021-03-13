import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles'

export default function CyclesSingleScreen() {

    return (
        <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Today's Data</Text>
        </View>
        <Text>This is the single cycle screen.</Text>
        </View>
    )
}