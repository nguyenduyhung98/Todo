import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CategoryNavigatior from './CategoryNavigatior'
import SettingNavigatior from './SettingNavigator'
import ProfilesNavigatior from './ProfilesNavigatior'
import  CardNavigatior  from './CardNavigatior'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function TabNavigatior() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'information-circle-outline'
                : 'information-circle-sharp';
            } 
            else if (route.name === 'CardOrder') 
            {
              iconName = focused
                ? 'md-cart-outline'
                : 'md-cart-sharp';
            } 
            else if (route.name === 'Profile') 
            {
              iconName = focused ? 'md-person-outline' : 'md-person-sharp';
            } 
            else if (route.name === 'Setting')
            {
              iconName = focused ? 'md-options-outline' : 'md-options-sharp';
            }
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={CategoryNavigatior} />
        <Tab.Screen name="CardOrder" component={CardNavigatior} />
        <Tab.Screen name="Profile" component={ProfilesNavigatior} />
        <Tab.Screen name="Setting" component={SettingNavigatior} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}