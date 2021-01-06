import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Profiles } from '../screens/index'

 const StackProfiles = createStackNavigator();

export default function ProfilesNavigatior(){
    return (
            <StackProfiles.Navigator>
                <StackProfiles.Screen  
                    name="Profiles" 
                    component={Profiles}/>
            </StackProfiles.Navigator>
    );
}