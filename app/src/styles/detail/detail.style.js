import { StyleSheet } from 'react-native';

export const detailStyle = StyleSheet.create({
    title: {
        position: 'absolute',
        bottom: 20,
        left: 10,
    },
    titleText: {
        fontSize: 24,
        color: '#fff'
    },
    subtitleText: {
        fontSize: 20,
        color: '#fff'
    },
    liTag: {
        padding: 100,
        height: 12,
        color: "#799d67"
    },
    comment: {
        marginTop: 15
    },
    commentTitle: {
        flexDirection: "row",
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    },
    commentTitleText: {
        flex: 1,
        fontSize: 18,
        lineHeight: 20
    },
    commentTitleMore: {

    },
    commentTitleMoreText: {
        color: "#799d67",
        fontSize: 12
    }
});
