import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Settings} from '../screens/index'

const StackSetting = createStackNavigator();

export default function SettingNavigatior(){
    return (
            <StackSetting.Navigator>
                <StackSetting.Screen  
                    name="Setting" 
                    component={Settings}/>
            </StackSetting.Navigator>
    );
}