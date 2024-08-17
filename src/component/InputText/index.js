import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Height, Width } from '../../utils/Dimentions';

export default function InputText({ styleView, label, form, placeholderText, value = '', handleInputChange, ...rest }) {
    return (
        <View style={styles.parentView}>
            <Text style={styles.label}>{label}<Text style={styles.required}>*</Text></Text>
            <TextInput
                {...rest}
                style={[styles.input, styleView]}
                value={value}
                onChangeText={(txt) => handleInputChange(txt)}
                placeholder={placeholderText}

            />
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        width: Width(80),
    },
    parentView: {
        flex: 1,
        width: Width(90),
        alignSelf: 'center',
        marginTop: Height(2)
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    required: {
        color: 'red',
    },
    input: {
        height: Height(6),
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
    },
})