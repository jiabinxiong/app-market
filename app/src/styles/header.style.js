import { StyleSheet } from 'react-native';

import isPhone from "../tool/isPhone";

export const headerStyle = StyleSheet.create({
    left: {
        marginLeft: 10
    },
    leftBack: {

    },
    iconBack: {
        fontSize: 30, color: "#fff"
    },
    right: {
        ...isPhone().header.right,
        marginRight: 10
    },
    start: {
        fontSize: 26,
        color: "#fff"
    }
});
