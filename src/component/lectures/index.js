import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Height, Width } from '../../utils/Dimentions';
import AppCollors from '../../utils/AppCollors';
import Button from '../Button';

export default function LecturesScreen() {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.contact_View}>
                <Text style={styles.contact_Text}>
                    آن لائن لیکچرز
                </Text>

            </View>
            <Text style={styles.des_Text}>درس نظامی (عالم کورس) للبنین و البنات</Text>

            <View style={styles.btn_container}>
                <Button label="عامہ سال دوم" press={() => null} style={styles.lec_btn} />
                <Button label="عامہ سال اول" press={() => null} style={styles.lec_btn} />
                <Button label="خاصہ سال دوم" press={() => null} style={styles.lec_btn} />
                <Button label="خاصہ سال اول" press={() => null} style={styles.lec_btn} />

                <Button label="عالیہ سال دوم" press={() => null} style={styles.lec_btn} />
                <Button label="عالیہ سال اول" press={() => null} style={styles.lec_btn} />
                <Button label="عالمیہ سال دوم" press={() => null} style={styles.lec_btn} />
                <Button label="عالمیہ سال اول" press={() => null} style={styles.lec_btn} />
            </View>
            <Text style={[styles.des_Text, { marginTop: Height(2) }]}>
                دیگر شعبہ جات
            </Text>

            <View style={styles.btn_container}>
                <Button label="شعبہ ناظرۃ تجوید" press={() => null} style={styles.lec_btn} />
                <Button label="شعبہ حفظ" press={() => null} style={styles.lec_btn} />
                <Button label="شارٹ کورسز" press={() => null} style={styles.lec_btn} />
            </View>
        </View >
    );
}
const styles = StyleSheet.create({
    contact_View: {
        width: Width(100),
        height: Height(12),
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: Height(1),
        backgroundColor: AppCollors.bgLight

    },
    contact_Text: {
        width: Width(98),
        fontSize: 28,
        fontWeight: "1200",
        textAlign: "center",
        color: AppCollors.white
    },
    des_Text: {
        width: Width(100),
        fontSize: 18,
        fontWeight: "800",
        textAlign: "center",
    },
    lec_btn: {
        width: Width(45),
        height: Height(6),
    },
    btn_container: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginHorizontal: 8,
        justifyContent: 'space-around'
    }
})
