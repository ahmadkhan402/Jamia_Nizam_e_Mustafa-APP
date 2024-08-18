import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import AppCollors from '../../utils/AppCollors';
import { Picker } from '@react-native-picker/picker';
import FrontView from '../frontView';
import { Height, Width } from '../../utils/Dimentions';
import { getAllQuestions, getQuestionList } from '../../api';
import Loader from '../loader';

export default function DarAlIftaScreen() {
    // Single state to manage the selected value of the Picker
    const [selectedQuestionTitle, setSelectedQuestionTitle] = useState("");
    const [questionList, setQuestionList] = useState([]);
    const [allQuestion, setAllQuestion] = useState([]);
    const [loading, setLoading] = useState(false)

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

    const getAllQuestionData = async () => {
        try {
            setLoading(true);
            const response = await getAllQuestions();
            if (response && response?.status === "success") {
                console.log("res", response);
                setQuestionList(response?.data);
                setLoading(false);
            } else {
                setLoading(false)
                setQuestionList([]);
            }
        } catch (error) {
        }
    }
    const getApiRequest = async () => {
        try {
            if (!selectedQuestionTitle) return
            setQuestionList([]);
            let data = {
                "category": selectedQuestionTitle
            }
            const response = await getQuestionList(data);
            // console.log("response", response);

            if (response && response?.success === true) {
                setQuestionList(response?.QuestionAnswares);
            }
        } catch (error) {
        }
    }
    useEffect(() => {
        getAllQuestionData()
    }, [])
    useEffect(() => {
        getApiRequest()
    }, [selectedQuestionTitle])
    return (
        <ScreenWrapper scrollType="scroll" statusBarColor={AppCollors.primary}>
            <View style={styles.container}>
                {loading ? <Loader isVisible={loading} /> : (
                    <View style={styles.container}>
                        <FrontView text={"آن لائن فتویٰ"} />
                        <Text style={styles.titleText}>آن لائن فتوی (سوالات اور جوابات حاصل کرنے کے لیے سوال کے عنوان پر کلک کریں)</Text>
                        <Text style={[styles.bggreen, { width: Width(90) }]}>سوال کا عنوان</Text>
                        <View style={styles.itemContainer}>
                            <Picker
                                selectedValue={selectedQuestionTitle}
                                onValueChange={(itemValue) => setSelectedQuestionTitle(itemValue)}
                                style={styles.picker}
                            >
                                {pickerOptions.map((option, index) => (
                                    <Picker.Item key={index} label={option.label} value={option.value} />
                                ))}
                            </Picker>
                        </View>
                        <View style={styles.questionView}>


                            <Text style={styles.bggreen}>سوالات اور جوابات</Text>
                            {questionList?.length !== 0 ? (
                                <View style={styles.questionItemContainer}>

                                    {questionList?.map((item, index) => (
                                        <View style={styles.questionItem} key={index}>
                                            <Text style={styles.questionTitle} numberOfLines={2}>{item.name} {(item.date).substring(0, 10)}</Text>
                                            <Text style={styles.questionText}><Text style={{ fontWeight: 'bold' }}>Question:</Text> {item?.question}</Text>
                                            <Text style={styles.answerText}><Text style={{ fontWeight: 'bold' }}>Answer:</Text> {item?.answare}</Text>
                                        </View>
                                    ))}
                                </View>
                            ) : (
                                <Text style={styles.noQuestion}>کوئی سوالات یا جوابات دستیاب نہیں ہیں۔</Text>
                            )}
                        </View>
                    </View>
                )}
            </View>
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    picker: {
        height: Height(7),
        width: Width(90),
        backgroundColor: AppCollors.light,
    },
    selectedValueText: {
        marginTop: 20,
        fontSize: 18,
        color: AppCollors.dark,
    },
    noQuestion: {
        borderWidth: 1,
        borderRadius: 8,
        marginTop: Height(3),
        width: Width(80),
        height: Height(8),
        textAlignVertical: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        textAlign: 'center',
    },
    itemContainer: {
        marginTop: Height(1),
        width: Width(90),
        alignSelf: 'center',
    }
    ,
    questionView: {
        justifyContent: 'center',
        marginTop: Height(3),
        width: Width(90),
        alignSelf: 'center',
    },
    questionText: {
        marginVertical: Height(1),
        fontSize: 16,
        color: AppCollors.dark,
    },
    titleText: {
        marginVertical: Height(2),
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: AppCollors.dark,
    },
    bggreen: {
        backgroundColor: AppCollors.primary,
        color: 'white',
        textAlign: 'center',
        padding: 10,
        borderRadius: 5,
        fontSize: 18,
    },
    questionTitle: {
        borderRadius: 10,
        width: Width(75),
        alignSelf: "center",
        backgroundColor: AppCollors.primary,
        color: 'white',
        textAlign: 'left',
        padding: 10,
        fontSize: 14,
    },
    questionItemContainer: {
        marginTop: Height(2),
        width: Width(90),
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 5,
        padding: Height(2),
        marginBottom: Height(2),
    },
    questionItem: {
        width: Width(85),
        // alignItems:"center",
        // height: Height(20),
        padding: Height(2),
        alignSelf: 'center',
        marginVertical: Height(1),
        // borderWidth: 1,
        borderRadius: 2,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
            },
            android: {
                elevation: 2
            }
        })
    }
});
