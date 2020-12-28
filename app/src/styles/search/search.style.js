import { StyleSheet } from 'react-native';

export const searchStyle = StyleSheet.create({
    header: {
        height: 90,
        paddingHorizontal: 10,
        paddingTop: 45,
        flexDirection: "row"
    },
    search: {
        flex: 1
    },
    default: {
        height: 150,
        marginBottom: 10
    },
    defaultBlock: {
        marginLeft: 10,
        marginRight: 5
    },
    defaultImgBlock: {

    },
    defaultImg: {
        width: 130,
        height: 80
    },
    defaultInfo: {
        width: 130
    },
    clearBtn: {
        marginLeft: 10,
        width: 40,
        height: 35
    },
    clearText: {
        height: 35,
        lineHeight: 35,
        textAlign: "right",
        fontSize: 16
    },
    listBlock: {
        paddingHorizontal: 10
    }
});
