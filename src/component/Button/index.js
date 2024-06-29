import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Height, Width } from '../../utils/Dimentions';
import AppCollors from '../../utils/AppCollors';

export default function Button({ label, press, style }) {
    return (
        <TouchableOpacity style={[styles.container, style]} onPress={press}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        width: Width(80),
        height: Height(7),
        backgroundColor: AppCollors.btn_bg,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 5,
        marginTop: Height(2)
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
});
