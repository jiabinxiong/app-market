import React from "react";
import { View, Text } from 'react-native';
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import ICON  from "../constants/icon.constant";
import isPhone from '../tool/isPhone';

import { headerStyle } from '../styles/header.style';
/*
*  返回 左到右
* */
export const horizontalAnimation = {
    gestureDirection: 'horizontal',
    cardStyleInterpolator: ({ current, layouts }) => {
        return {
            cardStyle: {
                transform: [
                    {
                        translateX: current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.width, 0],
                        }),
                    },
                ],
            },
        };
    },
};


/*
* 头部
* */
export const headerOptions = (type) => {
    const defaultOptions = {
        headerBackTitleVisible: false,
        headerTransparent: true,
        headerStyle: { height: 75 },
        headerLeft: () => (
            <View style={[ isPhone().header.left, headerStyle.left ]}>
                <View style={ headerStyle.leftBack }>
                    <IconMaterialCommunityIcons
                        style={ headerStyle.iconBack }
                        name={ ICON.ARROW_LEFT }/>
                </View>
            </View>
        )
    };

    switch (type) {
        case 'Home':
            return {
                ...defaultOptions,
                headerShown: false,
            }
        case 'Detail':
            return {
                ...defaultOptions,
                title: '',
            }
        case 'Search':
            return {
                ...defaultOptions
            }
        case 'My':
            return {
                ...defaultOptions,
                headerShown: false,
            }
        default:
            return {
                ...defaultOptions
            }
    }
}
