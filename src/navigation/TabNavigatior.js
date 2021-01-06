import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CategoryNavigatior from './CategoryNavigatior'
import SettingNavigatior from './SettingNavigator'
import ProfilesNavigatior from './ProfilesNavigatior'
import  CardNavigatior  from './CardNavigatior'

const Tab = createBottomTabNavigator();

export default function TabNavigatior() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={CategoryNavigatior}/>
        <Tab.Screen name="CardOrder" component={CardNavigatior} />
        <Tab.Screen name="Profile" component={ProfilesNavigatior} />
        <Tab.Screen name="Setting" component={SettingNavigatior} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}