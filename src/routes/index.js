
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenNames, { screenMapping } from './route';
import HomeScreen from '../screen/home';
import PurposeScreen from '../screen/GenaricScreen';
import GenaricScreen from '../screen/GenaricScreen';
import AddmissionScreen from '../screen/admisstion';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
                {Object.keys(screenMapping).map((key) => (
                    <Stack.Screen
                        key={screenMapping[key]}
                        name={screenMapping[key]}
                        component={GenaricScreen}
                    />
                ))}
                <Stack.Screen name={ScreenNames.ADDMISSION} component={AddmissionScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

