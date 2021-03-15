import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CyclesSingleScreen from './CyclesSingleScreen/CyclesSingleScreen'
import CyclesAllScreen from './CyclesAllScreen/CyclesAllScreen'

const CyclesBase = createStackNavigator();

export default function CyclesIndex() {

    return (
        <CyclesBase.Navigator initialRouteName={CyclesSingleScreen} screenOptions={{headerShown: false, animationEnabled: false}}>
            <CyclesBase.Screen name='Cycle' component={CyclesSingleScreen} />
            <CyclesBase.Screen name='All Cycles' component={CyclesAllScreen} />
        </CyclesBase.Navigator>
    )
}