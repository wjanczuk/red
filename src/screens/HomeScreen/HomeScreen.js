import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CyclesSingleScreen from '../CyclesSingleScreen/CyclesSingleScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import InsightsScreen from '../InsightsScreen/InsightsScreen';
import AnalysisScreen from '../AnalysisScreen/AnalysisScreen';
import GetHelpScreen from '../GetHelpScreen/GetHelpScreen'

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor: '#a46950',
      activeBackgroundColor: '#eee1db',
      inactiveBackgroundColor: '#eee1db',
          style: {
                backgroundColor: '#eee1db',
                paddingBottom: 7
          }
   }}>
      <Tab.Screen name="Cycle" component={CyclesSingleScreen} />
      <Tab.Screen name="Insights" component={InsightsScreen} />
      <Tab.Screen name="Analysis" component={AnalysisScreen} />
      <Tab.Screen name="Get Help" component={GetHelpScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function HomeScreen() {

    return (
        <BottomTabNavigator>
        </BottomTabNavigator>
    )
}