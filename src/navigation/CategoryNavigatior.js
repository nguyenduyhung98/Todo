import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Category,Categories } from '../screens/index'

const StackCategory = createStackNavigator();

export default function CategoryNavigatior(){
    return(
            <StackCategory.Navigator>     
                <StackCategory.Screen 
                    name="Categories" 
                    component={Categories} />  

                <StackCategory.Screen 
                    name="Category" 
                    options={({ route }) => ({ title: route.params.categoryName })} 
                    component={Category} />
            </StackCategory.Navigator>
    );   
}