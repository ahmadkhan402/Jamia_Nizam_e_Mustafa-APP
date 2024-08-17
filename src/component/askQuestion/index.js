import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenNames from '../../routes/route';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import Button from '../Button';
import { Height, Width } from '../../utils/Dimentions';
import AppCollors from '../../utils/AppCollors';
import FrontView from '../frontView';
import InputText from '../InputText';
import { Picker } from '@react-native-picker/picker';
import { FlashMessage } from '../flashMessage';
import { addQuestionData } from '../../api';
import CustomModal from '../customModal';

export default function AskQuestionScreen() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        question: '',
        address: '',
        contact: '',
        questiontitle: "",


    });
    const [modalVisible, setModalVisible] = useState(false);
    const [data, setData] = useState('');
    const content = [
        'فتوی کے لیے تقریبا دس دن انتظار کریں سوالات کی کثرت کی وجہ سے جواب میں تاخیر ہو سکتی ہے.جلدی جواب کے حصول کے لیے دیے گئے وٹس اپ نمبر پرعصرتا مغرب کے درمیان سوال کر سکتے ہیں۔',
        'کال یا میسج کرنے پر جواب نہیں دیا جائے گا۔',
        'جواب اپ کے دیے گئے ای میل ایڈریس پر ارسال کیا جائے گا اس لیے درست ای میل کا اندراج کریں۔',
        'مکرر(دوبارہ) سوال کا جواب نہیں دیا جائے گا۔',
        'سوال مختصر اور جامع کرنے کی کوشش کریں۔.',
        'واہیات اور فحش نوعیت کے سوالات سے اجتناب کریں سوال میں بہتر الفاظ کا چناؤ کریں',
        'فریقین کے متعلقہ یا کاروباری ازدواجی اور مالی تنازع پر مشتمل سوالات کا جواب ایک فریق کی بات پر نہیں دیا جائے گا۔'
    ];

    const inputFields = [
        { label: "Full Name (مکمل نام)", placeholderText: "Full Name", key: 'name' },
        { label: "Email Address (ای میل)", placeholderText: "Email Address", key: 'email' },
        { label: "Address (پتہ )", placeholderText: "Address", key: 'address' },
        { label: "Contact Number ( رابطہ نمبر )", placeholderText: "Whatsapp or Contact", key: 'contact' },
        // { label: "Your Question? (آپ کا سوال)", placeholderText: "Your Question", key: 'yourQuestion' },
    ];
    const pickerOptions = [
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
    const handleInputChange = (field, value) => {
        setForm({ ...form, [field]: value });
    };
    const handleSubmit = async () => {
        try {
            if (form.question && form.questiontitle && form.email && form.address && form.name && form.contact) {
                console.log(form);
                const res = await addQuestionData(form);
                console.log(res);

                if (res && res?.success === true) {
                    setData(res)
                    setModalVisible(true);
                    // FlashMessage({ message: "Question added successfully", success: true });
                }
            } else {
                FlashMessage({ message: "All fields are required", fail: true });
            }
        } catch (error) {

        }
    }
    return (

        // <View style={{ height: Height(50) }}>
        <ScreenWrapper scrollType='scroll' scrollViewProps={{ showsVerticalScrollIndicator: false }}>
            <View style={styles.container}>
                <FrontView text={"سوالات پوچھیے"} />
                <View style={styles.content_View}>
                    <Text style={styles.content_Text}>
                        سوال پوچھنے والے حضرات مندرجہ ذیل امور ملاحظہ فرمالیں
                    </Text>
                </View>
                <View style={styles.item_View}>
                    {content.map((item, index) => (
                        <View key={index} style={styles.listItem}>
                            {/* <Text style={styles.number}>. </Text> */}
                            <Text style={styles.text}>{index + 1} . {item} </Text>
                        </View>
                    ))}
                    <View style={styles.contactcontainer}>
                        <Text style={[styles.contText, { fontWeight: "light" }]}>Cell: (+92) 334 8688053</Text>
                        <Text style={[styles.contText, { fontWeight: "medium", fontSize: 18 }]}>Email: info@nizamemustafa.com</Text>
                        <Text style={[styles.contText, { marginTop: Height(2) }]}>ایڈریس : جامعہ نظام مصطفی ﷺ ٹھٹھی شریف ڈاکخانہ داؤدخیل تحصیل وضلع میانوالی پنجاب پاکستان</Text>
                    </View>

                </View>
                <View style={styles.content_View}>
                    <Text style={styles.content_Text}>
                        آپ کا سوال
                    </Text>
                </View>
                <View style={styles.inputViewContaienr}>
                    {inputFields && inputFields.map((field, index) => (
                        <InputText
                            key={index}
                            label={field.label}
                            placeholderText={field.placeholderText}
                            value={form[field.key]}
                            handleInputChange={(value) => handleInputChange(field.key, value)}
                            keyboardType={field.key === "contact" ? "numeric" : "default"}
                        />
                    ))}

                    {/* <View style={styles.container}> */}
                    <Picker
                        selectedValue={form.questiontitle}
                        onValueChange={(itemValue) => handleInputChange("questiontitle", itemValue)}
                        style={styles.picker}
                    >
                        {pickerOptions.map((option, index) => (
                            <Picker.Item key={index} label={option.label} value={option.value} />
                        ))}
                    </Picker>
                    <InputText multiline styleView={styles.inputView} label="Your Question? (آپ کا سوال)" placeholderText="Your Question" value={form.question} handleInputChange={(value) => handleInputChange("question", value)} />

                    <View style={styles.btn_View}>
                        <Button label="Submit" press={handleSubmit} />
                    </View>
                </View>
                <CustomModal Visible={modalVisible} title="Success" message={data?.message} onPress={() => setModalVisible(false)} />
            </View>
        </ScreenWrapper>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    picker: {
        marginTop: Height(2),
        height: 50,
        width: Width(90),
        alignSelf: 'center',
        backgroundColor: AppCollors.light
    },
    btn_View: {
        marginBottom: Height(5)
    },
    contentContainer: {

        marginTop: Height(1),
        marginBottom: Height(10),
    },
    content_View: {
        width: Width(100),
        height: Height(6),
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: Height(1),
        backgroundColor: AppCollors.primary

    },
    content_Text: {
        width: Width(92),
        fontSize: 18,
        fontWeight: "600",
        textAlign: "center",
        color: AppCollors.white
    },
    default_text: {
        textAlign: "right",
        color: AppCollors.red,
        paddingRight: Width(5),
        fontWeight: "800",
        fontSize: 20
    },
    item_Text: {
        textAlign: "right",
        color: AppCollors.black,
        fontSize: 20
    },
    item_View: {
        backgroundColor: AppCollors.white,
        width: Width(98),
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

    },
    listItem: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    number: {
        justifyContent: 'flex-end',
        fontWeight: 'bold',
    },
    text: {
        textAlign: 'right',
        fontSize: 14,
        flex: 1,
    },
    btn: {
        marginTop: Height(5)
    }
    ,
    contactcontainer: {
        padding: 20,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    contText: {
        fontSize: 20,
        fontWeight: "700",
        textAlign: "center",
        // color: AppCollors.white
    },
    inputViewContaienr: {
        width: Width(98),
        // backgroundColor: AppCollors.red,
        borderRadius: 10,
        borderWidth: 1,
        elevation: 5,
        alignItems: 'center',
        alignSelf: 'center',
        // marginBottom: Height(1)
    }
    ,
    inputView: {
        width: Width(90),
        padding: Height(1),
        verticalAlign: 'top',
        height: Height(10),
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: Height(3)
    }
});
