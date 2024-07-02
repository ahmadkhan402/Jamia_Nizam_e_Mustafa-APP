import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Height, Width } from '../../utils/Dimentions'
import AppCollors from '../../utils/AppCollors'

export default function FrontView({ text, text1 }) {
    return (
        <View style={styles.contact_View}>
            <Text style={styles.contact_Text}>
                {text}
            </Text>
            {text1 && <Text style={styles.contact_Text1}> {text1} </Text>}
        </View>
    )
}
const styles = StyleSheet.create({
    contact_View: {
        width: Width(100),
        height: Height(12),
        justifyContent: 'center',
        alignItems: 'center',
        // marginVertical: Height(1),
        backgroundColor: AppCollors.bgLight

    },
    contact_Text: {
        width: Width(98),
        fontSize: 28,
        fontWeight: "700",
        textAlign: "center",
        color: AppCollors.white
    },
    contact_Text1: {
        width: Width(98),
        fontSize: 18,
        fontWeight: "700",
        textAlign: "center",
        color: AppCollors.white
    },

})