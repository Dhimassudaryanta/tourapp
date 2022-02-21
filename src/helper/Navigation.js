import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';




const Stack = createStackNavigator();


const Navigation = () => {



    return (
        <Stack.Navigator mode="modal" headerMode="float"
            screenOptions={() => ({
                headerShown: false
            })}
        >
            <Stack.Screen
                name="FirstScreen"
                component={FirstScreen}
            // options={
            //     headers
            // }
            />
            <Stack.Screen
                name="SecondScreen"
                component={SecondScreen}
            />
        </Stack.Navigator>
    )
}

export default Navigation;