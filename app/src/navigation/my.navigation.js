import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { horizontalAnimation, headerOptions } from './configs';

import MyScreen from '../screens/my/My.screen';

import TextScreen from '../screens/text/Text.screen';

const MyStack = createStackNavigator();
const MyStackScreen = () => {
    return (
        <MyStack.Navigator
            screenOptions={horizontalAnimation}
        >
            <MyStack.Screen
                name="My"
                component={ MyScreen }
                options={{...headerOptions('My')}}
            />
            <MyStack.Screen
                name="Text"
                component={ TextScreen }
                options={{
                    headerShown: false,
                    headerBackTitleVisible: false,
                    headerTransparent: true,
                }}
            />
        </MyStack.Navigator>
    );
}

export default MyStackScreen;
