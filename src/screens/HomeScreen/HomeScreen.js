import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CyclesSingleScreen from '../CyclesSingleScreen/CyclesSingleScreen';
import ProfileScreen from '../ProfileScreen/ProfileScreen';
import InsightsScreen from '../InsightsScreen/InsightsScreen';
import AnalysisScreen from '../AnalysisScreen/AnalysisScreen';
import GetHelpScreen from '../GetHelpScreen/GetHelpScreen'

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator tabBarOptions={{
      showIcon: true,
      activeTintColor: '#a46950',
      activeBackgroundColor: '#eee1db',
      inactiveBackgroundColor: '#eee1db',
          style: {
                backgroundColor: '#eee1db',
                paddingBottom: 7,
                paddingTop: 7
          }
   }}>
      <Tab.Screen name="Cycle" component={CyclesSingleScreen} options={{tabBarIcon: ({color}) => (<Icon name="calendar-day" size={20} color={color} />)}}/>
      <Tab.Screen name="Insights" component={InsightsScreen} options={{tabBarIcon: ({color}) => (<Icon name="lightbulb" size={20} color={color} />)}}/>
      <Tab.Screen name="Analysis" component={AnalysisScreen} options={{tabBarIcon: ({color}) => (<Icon name="chart-bar" size={20} color={color} />)}}/>
      <Tab.Screen name="Get Help" component={GetHelpScreen} options={{tabBarIcon: ({color}) => (<Icon name="stethoscope" size={20} color={color} />)}}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{tabBarIcon: ({color}) => (<Icon name="female" size={20} color={color} />)}}/>
    </Tab.Navigator>
  );
}

export default function HomeScreen() {

    return (
        <BottomTabNavigator>
        </BottomTabNavigator>
    )
}