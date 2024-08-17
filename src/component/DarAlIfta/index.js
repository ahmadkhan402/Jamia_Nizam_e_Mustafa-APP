import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import AppCollors from '../../utils/AppCollors';
import { Picker } from '@react-native-picker/picker';

export default function DarAlIftaScreen() {
    const [selectedQuestionTitle, setSelectedQuestionTitle] = useState("");

    const pickerOptions = [
        { label: "سوال کا عنوان منتخب کریں۔", value: "" },
        { label: "ایمان و کفر", value: "Belief and Disbelief" },
        { label: "قیامت و آخرت", value: "Judgment and Hereafter" },
        { label: "طہارت", value: "Purity" },
        { label: "پاکی و ناپاکی کے احکام", value: "Cleaning and Impurity" },
        { label: "جہاد", value: "Jihad" },
        { label: "قربانی و ذبیحہ", value: "Sacrifice and Slaughter" },
        { label: "حج و عمرہ", value: "Haj and Umrah" },
        { label: "زکوۃ و صدقات", value: "Charity and Zakat" },
        { label: "روزہ و رمضان", value: "Fasting and Ramadan" },
        { label: "جنائز", value: "Funeral" },
        { label: "نوافل عبادات", value: "Optional Acts of Worship" },
        { label: "عملیات و اذکار", value: "Supplication" },
        { label: "احکام مسجد", value: "Laws of the Masjid" },
        { label: "نماز", value: "Prayer" },
        { label: "امانات", value: "Deposit" },
        { label: "مالی معاوضات", value: "Financial Transactions" },
        { label: "احکام نکاح", value: "Laws of Marriage" },
        { label: "مخاصمات", value: "Quarrels" },
        { label: "ترکات", value: "Inheritance" },
        { label: "حکومت و سیاست", value: "Government and Politics" },
        { label: "احکام طلاق", value: "Laws of Divorce" },
        { label: "عدت نان و نفقہ", value: "Waiting period and Alimony" },
        { label: "آداب زندگی", value: "Etiquettes of Life" },
        { label: "تعلیم و تعلم", value: "Educating and Learning" },
        { label: "شعائر اسلام", value: "Rituals of Islam" },
        { label: "خواب و تعبیر", value: "Interpretation of Dreams" },
        { label: "بچوں کے اسلامی نام", value: "Baby Names and Meaning" },
        { label: "معاشرتی برائیاں", value: "Social Evils" },
        { label: "فنون و حرفت", value: "Arts and Crafts" },
        { label: "علاج و معالجہ", value: "Medicine and Health" },
        { label: "حجاب و شرعی پردہ", value: "Hijab and Islamic Veil" },
        { label: "ازدواجی مسائل", value: "Marital Problems" },
        { label: "اولاد کے مسائل و احکام", value: "Rights of Children" },
        { label: "حقوق و فرائض", value: "Rights and Duties" },
        { label: "بدعات و منکرات", value: "Innovations and Evil" },
        { label: "حلال و حرام", value: "Halal and Haram" },
        { label: "جائز و ناجائز", value: "Prohibition and Legalization" },
        { label: "کفارات", value: "Atonement" },
        { label: "حدود و سزا", value: "Sanctions" },
        { label: "تاریخ اسلام", value: "History of Islam" },
        { label: "سیرت", value: "Biography" },
        { label: "مذاہب", value: "Religions" },
        { label: "شخصیات", value: "Celebrities" },
        { label: "جماعت و فرق", value: "Community and Sect" },
        { label: "ٹیکنالوجی", value: "Information Technology" },
        { label: "جدید معاشیات", value: "Insurance" },
        { label: "بینکاری", value: "Banking" },
        { label: "تفسیر و احکام القرآن", value: "Quran Kareem" },
        { label: "تحقیق و تخریج حدیث", value: "Tafseer Quran" },
    ];

    return (
        <ScreenWrapper scrollType="scroll" statusBarColor={AppCollors.primary}>
            <View style={styles.container}>
                <Picker
                    selectedValue={selectedQuestionTitle}
                    onValueChange={(itemValue) => setSelectedQuestionTitle(itemValue)}
                    style={styles.picker}
                >
                    {pickerOptions.map((option, index) => (
                        <Picker.Item key={index} label={option.label} value={option.value} />
                    ))}
                </Picker>
                {/* You can display the selected value below, if needed */}
                <Text style={styles.selectedValueText}>
                    {selectedQuestionTitle ? `منتخب شدہ عنوان: ${selectedQuestionTitle}` : "براہ کرم ایک عنوان منتخب کریں"}
                </Text>
            </View>
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppCollors.light,
    },
    picker: {
        height: 50,
        width: '90%',
        backgroundColor: AppCollors.light,
    },
    selectedValueText: {
        marginTop: 20,
        fontSize: 18,
        color: AppCollors.dark,
    },
});

