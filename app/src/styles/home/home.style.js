import { StyleSheet, Dimensions } from 'react-native';

import { backgroundColor, mainColor } from '../../constants/color.constant';


export const homeStyle = StyleSheet.create({
    body: {

    },
    header: {
        height: 200
    },
    headerBackImg: {
        flex: 1,
        resizeMode: "cover",
    },
    headerInfo: {
        flexDirection: "row",
        position: "absolute",
        bottom: 50,
        marginHorizontal: 10,
    },
    headerInfoL: {
        flex: 1
    },
    headerLocation: {
        flexDirection: "row",
    },
    headerLocationIcon: {
        fontSize: 20,
        color: "#fff"
    },
    headerLocationText: {
        color: "#fff",
        fontWeight: "bold"
    },
    headerUserName: {

    },
    headerUserNameText: {
        fontSize: 24,
        color: "#fff",
        lineHeight: 30,
        fontWeight: "bold"
    },
    headerInfoR: {

    },
    headerUserPortrait: {

    },
    headerUserPortraitImg: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    search: {
        height: 50,
        marginTop: -25,
        marginHorizontal: 20,
    },
    searchIcon: {
        height: 50,
        fontSize: 35,
        marginTop: 8,
        marginLeft: 10
    },
    searchTouch: {
        flexDirection: "row",
        width: "100%"
    },
    placeholder: {
        color: "#ccc",
        lineHeight: 50,
        fontSize: 16,
    },
    cnt: {
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center"
    }
    // search: {
    //     flex: 1,
    //     marginRight: 5,
    // },
    // searchIpt: {
    //
    // },
    // bell: {
    //
    // },
    // bellIcon: {
    //     width: 36,
    //     fontSize: 36,
    //     lineHeight: 35,
    //     color: mainColor
    // },
    // scroll: {
    //     paddingHorizontal: 10
    // },
    // cnt: {
    //
    // }
});
