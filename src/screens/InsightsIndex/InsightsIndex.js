import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InsightsCycleScreen from './InsightsCycleScreen/InsightsCycleScreen'
import InsightsHormonesScreen from './InsightsHormonesScreen/InsightsHormonesScreen'
import InsightsGoalsScreen from './InsightsGoalsScreen/InsightsGoalsScreen'
import InsightsTipsScreen from './InsightsTipsScreen/InsightsTipsScreen'
import InsightsObservationsScreen from './InsightsObservationsScreen/InsightsObservationsScreen'

const InsightsBase = createStackNavigator();

export default function CyclesIndex() {

    return (
        <InsightsBase.Navigator initialRouteName={InsightsCycleScreen} screenOptions={{headerShown: false, animationEnabled: false}}>
            <InsightsBase.Screen name='Cycle' component={InsightsCycleScreen} />
            <InsightsBase.Screen name='Hormones' component={InsightsHormonesScreen} />
            <InsightsBase.Screen name='Goals' component={InsightsGoalsScreen} />
            <InsightsBase.Screen name='Tips' component={InsightsTipsScreen} />
            <InsightsBase.Screen name='Observations' component={InsightsObservationsScreen} />
        </InsightsBase.Navigator>
    )
}