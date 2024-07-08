import React from 'react';
import { View, Text } from 'react-native';
import FrontView from '../frontView';

export default function ContactUsScreen() {
    return (
        <ScreenWrapper scrollType='scroll'>
            <FrontView text={"Contact Us"} />
        </ScreenWrapper>
    );
}
