import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from './../src/components/Login/Login';
import CustomerRegistrationScreen from './../src/components/Registration/CustomerRegistration';

const rootStackScreen = createStackNavigator();

const RootStackScreen = ({ navigation }) => {
    return (
        <RootStack.Navigator headerMode='none'>
            <RootStack.Screen name="LoginScreen" component={LoginScreen} />
            <RootStack.Screen name="CustomerRegistrationScreen" component={CustomerRegistrationScreen} />
        </RootStack.Navigator>
    );
};

export default RootStackScreen;