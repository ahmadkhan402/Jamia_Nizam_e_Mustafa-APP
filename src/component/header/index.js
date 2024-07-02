import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScreenWrapper } from 'react-native-screen-wrapper'
import { Height, Width } from '../../utils/Dimentions'
import AppCollors from '../../utils/AppCollors';
import { useNavigation } from '@react-navigation/native';
import ScreenNames, { screenMapping } from '../../routes/route';



export default function Header() {
    const navigation = useNavigation();
    const data = [
        'سرورق',
        // 'ہمارے متعلق',
        // 'اغراض ومقاصد',
        // 'شعبہ جات',
        'آن لائن کورسز',
        'لیکچرز',
        'نصاب',
        'نتائج',
        // 'الحاق',
        'لائبریری',
        'گیلری',
        // 'نیوز سیکشن',
        'دارالافتاء',
        'بلاگ',
        'رابطہ کریں',
    ];

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.btn_main} onPress={() => navigation.navigate(screenMapping[item], { item })}>
                <Text style={styles.btn_text}>{item}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate(ScreenNames.HOME)}>


                <Image source={require('../../assets/images/jamia-logo.png')} style={styles.img_Logo} />
            </TouchableOpacity>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',

    },
    img_Logo: {
        width: Width(100),
        height: Height(18)
    },
    btn_main: {
        height: Height(10),
        width: Width(20),
        backgroundColor: AppCollors.primary,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: "center",
        margin: Width(0.5),
        // borderWidth: 1,
    },
    btn_text: {
        width: Width(16),
        textAlign: "center",
        color: AppCollors.white,
        fontWeight: "800"
    }
})