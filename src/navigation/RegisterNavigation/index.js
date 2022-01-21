import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"
import ProvinsiScreen from './../../screens/Register/ProvinsiScreen/index';
import NamaScreen from '../../screens/Register/NamaScreen';

const Stack = createStackNavigator();
const RegisterNavigation = () => (
    <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name="Provinsi" component={ProvinsiScreen}></Stack.Screen>
        <Stack.Screen name="Nama" component={NamaScreen}></Stack.Screen>
    </Stack.Navigator>
)

export default RegisterNavigation;
