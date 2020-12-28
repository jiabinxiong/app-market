import React from "react";
import {View, Text, ActivityIndicator, TouchableOpacity} from "react-native";
import IconMaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import ICON from '../constants/icon.constant';

import { uiTabBarStyle } from '../styles';

function TabBarComponent({ state, descriptors, navigation }) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    for(let i = 0; i < state.routes.length; i++) {
        if( state.routes[i].state !== undefined ) {
            if( state.routes[i].state.index > 0 ) {
                return null;
            }
        }
    }
    const iconFun = (type) => {
        if(type === "Home") {
            return ICON.HOME;
        } else if (type === "My") {
            return ICON.MY;
        }
    };

    return (
        <View style={ uiTabBarStyle.area }>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                        if(route.name === "My") {

                        } else {
                            // navigation.navigate(route.name);
                        }

                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={ uiTabBarStyle.block }
                        key={index}
                    >
                        <View>
                            <IconMaterialCommunityIcons
                                style={ [ uiTabBarStyle.icon, { color: isFocused ? "#799d67" : "#ad8b89" } ]  }
                                name={ iconFun(route.name) }
                            />
                           {/*<Text >{label}</Text>*/}
                        </View>

                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default TabBarComponent;
