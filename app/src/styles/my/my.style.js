import { StyleSheet } from 'react-native';

export const myStyle = StyleSheet.create({
    user: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginTop: 20
    },
    userL: {
        flexDirection: "row",
        flex: 1
    },
    userImg: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    userName: {
        marginLeft: 5
    },
    userNameText: {
        fontSize: 18,
        lineHeight: 50
    },
    userR: {

    },
    userSetting: {
        width: 40,
        textAlign: "right",
        lineHeight: 50
    }
});
