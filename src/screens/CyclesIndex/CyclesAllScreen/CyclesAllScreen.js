import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Text, View } from 'react-native';
import styles from './styles';
import CalendarListComponent from '../CyclesCalendar/CyclesCalendar'

export default function CyclesSingleScreen({navigation}) {

    return (
        <View style={styles.container}>
        <View style={styles.headerContainer}>
            <View style={styles.headerLeft}>
                <Text style={styles.headerText}>All Data</Text>
            </View>
            <View style={styles.headerRight}>
            <Icon name="calendar-day" style={styles.headerIconInactive} size={20} onPress={() => navigation.navigate('Cycle')}></Icon>
            <Icon name="calendar-alt" style={styles.headerIconActive} size={20} onPress={() => navigation.navigate('All Cycles')}></Icon>
            </View>
        </View>
        <View style={styles.subContainer}>
            <Text>This is the all cycles screen.</Text>
            <CalendarListComponent onDayPress={(day) => navigation.navigate('Cycle', day)}></CalendarListComponent>
        </View>
        </View>
    )
}