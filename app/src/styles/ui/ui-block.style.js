import { Dimensions, StyleSheet } from "react-native";
import { mainColor } from '../../constants/color.constant';

export const uiBlockStyle = StyleSheet.create({
    block: {
        height: 200,
        marginBottom: 8
    },
    imgBlock: {

    },
    img: {
        width: Dimensions.get('window').width - 20,
        height: 130,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    infoBlock: {

    },
    blockTitle: {
        height: 20,
        marginTop: 5,
    },
    blockTitleName: {
        fontSize: 16,
        lineHeight: 20,
        fontWeight: "800"
    },
    adder: {
        height: 18
    },
    adderText: {
        fontSize: 14,
        color: "#ccc"
    },
    blockData: {
        flexDirection: "row",
        height: 24
    },
    star: {
        flexDirection: "row",
    },
    starIcon: {
        lineHeight: 24,
        fontSize: 20,
        color: "#ccc"
    },
    starSelectIcon: {
        color: mainColor
    },
    starText: {
        lineHeight: 24,
    },
    startPeoples: {
        marginLeft: 5,
        lineHeight: 24,
        fontSize: 12,
        color: "#ccc"
    },
    blockDataL: {
        flex: 1
    },
    blockDataR: {

    },
    lRBlock: {
        flexDirection: "row",
        height: 100,
        borderBottomWidth: 1,
        borderBottomColor: "#f5f6f8",
        paddingBottom: 20,
        marginBottom: 20
    },
    lRInfo: {
        flex: 1,
        paddingRight: 40
    },
    lRImgBlock: {

    },
    lRImg: {
        width: 80,
        height: 80
    },
    lRDetail: {

    },
    lRDetailText: {
        lineHeight: 16,
        fontSize: 12,
        color: "#ad8b89"
    }
});
