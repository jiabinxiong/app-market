import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBarComponent from '../components/TabBar.component';

import HomeStackScreen from './home.navigation';
import MyStackScreen from './my.navigation';
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

const Tabs = createBottomTabNavigator();
const AppTabsScreen = () => (
    <Tabs.Navigator
        initialRouteName="Home"
        tabBar={ props => <TabBarComponent {...props} /> }
    >
        <Tabs.Screen
            name="Home"
            component={ HomeStackScreen }
            options={{
                tabBarLabel: '首页'
            }}
        />
        <Tabs.Screen
            name="My"
            component={ MyStackScreen }
        />
    </Tabs.Navigator>
);

const RootStack = createStackNavigator();
const AppNavigation = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator
                headerMode="none"
                screenOptions={{
                    animationEnabled: true,
                }}
            >
                <RootStack.Screen name="App" component={ AppTabsScreen }/>
            </RootStack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
