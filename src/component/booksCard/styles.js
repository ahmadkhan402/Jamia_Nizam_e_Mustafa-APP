import { StyleSheet } from "react-native";
import { Height, Width } from "../../utils/Dimentions";
import AppCollors from "../../utils/AppCollors";

const styles = StyleSheet.create({
    container: {
        width: Width(48),
        height: Height(40),
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: Width(1),
        // backgroundColor: AppCollors.red

    },
    bookName: {
        fontSize: 25,
        fontWeight: "bold",
        color: 'white'
    },
    bookNameContainer: {
        width: Width(46),
        height: Height(7),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppCollors.liteBlue
    },
    bookImgContainer: {
        marginVertical: Height(0.4),
        width: Width(33),
        height: Height(23),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: AppCollors.medium
    },
    bookImg: {
        width: Width(29),
        height: Height(21),
        resizeMode: 'cover'

    },
    downloadBtn: {
        backgroundColor: AppCollors.primary,
        width: Width(20),
        height: Height(5),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    downloadBtnText: {
        color: AppCollors.white,
        fontSize: 18,
        fontWeight: 'bold'
    }

});

export default styles