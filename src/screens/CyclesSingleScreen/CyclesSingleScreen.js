import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, View } from 'react-native';
import styles from './styles'

export default function CyclesSingleScreen() {

    return (
        <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Today's Data</Text>
        </View>
        <Text>This is the single cycle screen. <Icon name="rocket" size={30} color="#900" /></Text>
        
        
        </View>
    )
}