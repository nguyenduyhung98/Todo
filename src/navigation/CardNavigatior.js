import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Card } from '../screens/index';

const StackCard = createStackNavigator();

export default function CardNavigatior() {
    return(
        <StackCard.Navigator>
            <StackCard.Screen 
                name="CardOrder" 
                component={Card} />
        </StackCard.Navigator>
    );
}