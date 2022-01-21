import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from './../screens/OnboardingScreen/index';
import DashboardScreen from '../screens/DashboardScreen';
import RegisterNavigation from './RegisterNavigation';
const Stack = createStackNavigator();
const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Onboarding" component={OnboardingScreen}/>
                <Stack.Screen name="Register" component={RegisterNavigation}/>
                <Stack.Screen name="Dashboard" component={DashboardScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;
