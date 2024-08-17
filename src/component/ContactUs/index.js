import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FrontView from '../frontView';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import AppCollors from '../../utils/AppCollors';
import { Height } from '../../utils/Dimentions';

export default function ContactUsScreen() {
    return (
        <ScreenWrapper scrollType='scroll'>
            <FrontView text={"Contact Us"} />
            <View style={styles.container}>
                <Text style={[styles.text, { fontWeight: "light" }]}>Cell: (+92) 307 5674646</Text>
                <Text style={[styles.text, { fontWeight: "medium", fontSize: 18 }]}>Email: info@nizamemustafa.com</Text>
                <Text style={[styles.text, { marginTop: Height(2) }]}>ایڈریس : جامعہ نظام مصطفی ﷺ ٹھٹھی شریف ڈاکخانہ داؤدخیل تحصیل وضلع میانوالی پنجاب پاکستان</Text>
            </View>
        </ScreenWrapper>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    text: {
        fontSize: 20,
        fontWeight: "700",
        textAlign: "center",
        // color: AppCollors.white
    }
})  