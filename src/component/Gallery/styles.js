import { StyleSheet } from "react-native";
import { Height, Width } from "../../utils/Dimentions";
import AppCollors from "../../utils/AppCollors";

const styles = StyleSheet.create({
    container: {
        width: Width(100),
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: 'center',
        alignItems: 'center',


    },
    imageContainer: {
        margin: Width(1),
        // backgroundColor: AppCollors.bgLight,

    },
    image: {
        width: Width(30),
        height: Height(15),
    }

});
export default styles