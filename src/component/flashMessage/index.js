import React from 'react';
import { View, Text } from 'react-native';
import { showMessage } from 'react-native-flash-message';

export const FlashMessage = ({ message, success, fail, description = "" }) => {
    if (success) {
        showMessage({
            message: message,
            description: description,
            type: 'success',
        });
    } else if (fail) {
        showMessage({
            message: message,
            description: description,
            type: 'danger',
        });
    }
};