import { StyleSheet } from 'react-native';

import isPhone from '../../tool/isPhone';

export const uiTabBarStyle = StyleSheet.create({
    area: {
        backgroundColor: "#fff",
        flexDirection: "row",
        ...isPhone().tabBar.area,
    },
    block: {
        flex: 1,
        alignItems: "center"
    },
    icon: {
        marginTop: 10,
        fontSize: 26,
        color: "#ad8b89"
    }
});
