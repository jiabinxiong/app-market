import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import ICON from '../constants/icon.constant';
import { horizontalAnimation, headerOptions } from './configs';

import { headerStyle } from '../styles/header.style';

import HomeScreen from '../screens/home/Home.screen';
import DetailScreen from '../screens/detail/Detail.screen';
import SearchScreen from '../screens/search/Search.screen';

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator
            screenOptions={horizontalAnimation}
        >
            <HomeStack.Screen
                name="Home"
                component={ HomeScreen }
                options={{...headerOptions('Home')}}
            />
            <HomeStack.Screen
                name="Detail"
                component={ DetailScreen }
                options={{
                    ...headerOptions('Detail'),

                    headerRight: () => (
                        <View style={ headerStyle.right }>
                            <IconMaterialCommunityIcons
                                name={ ICON.STAR }
                                style={ headerStyle.start }
                            />
                        </View>
                    )
                }}
            />
            <HomeStack.Screen
                name="Search"
                component={ SearchScreen }
                options={{
                    headerShown: false,
                    tabBarVisible: false,
                }}
            />
        </HomeStack.Navigator>
    );
}

export default HomeStackScreen;
