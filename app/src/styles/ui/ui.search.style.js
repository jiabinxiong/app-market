import { StyleSheet } from 'react-native';

export const uiSearchStyle= StyleSheet.create({
    search: {
        flexDirection: "row",
        height: 35,
        borderRadius: 10,
        backgroundColor: "#f5f6f8"
    },
    icon: {
        marginLeft: 5,
        fontSize: 28,
        lineHeight: 35,
        color: "#ad8b89"
    },
    ipt: {
        flex: 1,
        height: 35,
        fontSize: 12
    },
    close: {
        width: 30,
        height: 35,
    },
    closeIcon: {
        width: 15,
        height: 15,
        marginTop: 10,
        marginLeft: 6,
        fontSize: 15,
        lineHeight: 15,
        color: "#ad8b89",
        // backgroundColor: "#ad8b89",
        // borderRadius: 10
    },
    clearBtn: {

    }
});
