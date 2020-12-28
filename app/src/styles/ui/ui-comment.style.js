import { StyleSheet, Dimensions } from 'react-native';

const imgWidth = () => {
    return (Dimensions.get('window').width - 50) / 4
};

export const uiCommentStyle = StyleSheet.create({
    block: {
        marginLeft: 10,
        marginRight: 10,
        paddingBottom: 15,
        marginBottom: 12,
        borderBottomWidth: 0.5,
        borderBottomColor: '#efefef',
    },
    t: {
        height: 50,
        flexDirection: 'row'
    },
    tL: {
        flex: 1,
        flexDirection: 'row'
    },
    portrait: {

    },
    portraitImg: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    userInfo: {
        marginLeft: 10
    },
    userName: {
        height: 16,
        marginTop: 8
    },
    userNameText: {
        fontSize: 16,
        lineHeight: 18
    },
    time: {
        height: 16,
        marginTop: 4
    },
    timeText: {
        lineHeight: 16,
        color: '#d4d4d4'
    },
    tR: {

    },
    cnt: {
        marginTop: 5
    },
    cntText: {
        fontSize: 12,
        lineHeight: 18
    },
    imgArea: {
        flexDirection: "row",
        marginTop: 10
    },
    imgBlock: {
        position: "relative",
        marginRight: 10
    },
    imgBlockMore: {
        position: "absolute",
        zIndex: 10,
        width: imgWidth(),
        height: imgWidth(),
        top: 0,
        left: 0,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        backgroundColor: "rgba(0, 0, 0, 0.3)"
    },
    imgBlockMoreText: {
        color: "#fff",
        fontSize: 16
    },
    imgBlockImg: {
        width: imgWidth(),
        height: imgWidth(),
        borderRadius: 10
    }
});
