import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import AppCollors from '../../utils/AppCollors';

export default function Loader({ isVisible }) {
    return (
        <Modal isVisible={isVisible}>
            <View style={styles.container}>
                <ActivityIndicator size="large" color={AppCollors.primary} />
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
