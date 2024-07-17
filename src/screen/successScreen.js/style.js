import { StyleSheet } from "react-native";
import { Height, Width } from "../../utils/Dimentions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 200,
        height: 200
    },
    text: {
        marginTop: Height(3),
        width: Width(90),
        textAlign: 'center',
        fontSize: 20
    }
});

export default styles