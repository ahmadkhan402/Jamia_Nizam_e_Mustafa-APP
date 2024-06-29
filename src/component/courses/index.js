import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { Height, Width } from '../../utils/Dimentions';
import AppCollors from '../../utils/AppCollors';
import Button from '../Button';
import ScreenNames from '../../routes/route';
import { ScreenWrapper } from 'react-native-screen-wrapper';

export default function OnlineCoursesScreen() {
    const [selectedCourse, setSelectedCourse] = useState('');
    const navigation = useNavigation()
    const focus = useIsFocused()
    useEffect(() => {
        // if (focus) setSelectedCourse("")
    }, [focus])


    const renderTajveez = () => {
        return (
            <View style={{ height: Height(50) }}>
                <View style={styles.content_View}>
                    <Text style={styles.content_Text}>
                        آن لائن شعبہ ناظرۃ و تجوید
                    </Text>
                </View>
                <View style={styles.item_View}>
                    <Text style={styles.item_Text}>ان شرائط و ضوابطہ کا مطالعہ کرنے کے بعد داخلہ حاصل کرنے کے لئے مندرجہ ذیل لنک سے داخلہ فارم فل کر کے بھیجیں.</Text>
                    <View style={styles.btn_View}>
                        <Button label="داخلہ فارم" press={() => navigation.navigate(ScreenNames.ADDMISSION)} />
                    </View>
                </View>
            </View>
        )
    }
    const renderHefiz = () => {
        return (
            <View style={{ height: Height(50) }}>
                <View style={styles.content_View}>
                    <Text style={styles.content_Text}>
                        آن لائن شعبہ حفظ
                    </Text>
                </View>
                <View style={styles.item_View}>
                    <Text style={styles.item_Text}>
                        ان شرائط و ضوابطہ کا مطالعہ کرنے کے بعد داخلہ حاصل کرنے کے لئے مندرجہ ذیل لنک سے داخلہ فارم فل کر کے بھیجیں ِ
                    </Text>
                    <View style={styles.btn_View}>
                        <Button label="داخلہ فارم" press={() => navigation.navigate(ScreenNames.ADDMISSION)} />
                    </View>
                </View>
            </View>
        )
    }
    const renderDarsaNizami = () => {
        const content = [
            'یہ کورس پانچ سال کے مختصر عرصہ میں کرانیکی کوشش کی جائیگی اور یہ کورس طلباء و طالبات دونوں کے لئے علیحدہ علیحدہ گروپس میں کروایاجائیگا اور کورس کے ابتدائی درجات کو استاذ الاساتذہ شیخ الحدیث والتفسیر جامع المعقول والمنقول مفتی محمد جنیدرضاخان قادری خودپڑھائیں گے اوردیگر کی نگرانی فرمائیں گے',
            'ابتدائی سال (درجہ عامہ) میں ہفتہ میں تین دن جمعہ ،ہفتہ ،اتوار کو لیکچر بھیجے جائیں گے ۔اگلے درجات میں چھ دن لیکچرز بھیجے جائیں گے',
            'ہر لیکچر کے آخر میں دی گئی مشق کو مکمل کرنا ضروری ہوگا۔اور کتاب ختم ہونے پر ٹیسٹ کو پاس کرنا بھی ضروری ہوگا ۔ٹیسٹ میں فیل یا غیرحاضر ہونے والے کو دوبارہ وہی کتاب پڑھنی ہوگی',
            'لیکچرز آڈیوز ،ویڈیوز دونوں طرح سے ہونگے اور یوٹیوب سے لنکڈ ہونگے ۔اورآڈیوز صرف وٹس اپ پر ہونگے، حتی الوسع ویڈیوز لیکچرز بھی وٹس اپ پر بھیجے جائیں گے',
            'لیکچرز سننے کے لئے کوئی وقت مقرر نہیں ہوگا۔چوبیس گھنٹوں میں جس وقت آسانی ہو سماعت کر کے مشق حل کرکے بھیج سکتے ہیں ۔مشق رہ جانے کی صورت میں ہفتے کے اندر تمام مشقوں کو مکمل کرنا ضروری ہوگا',
            'لیکچرز میں کسی قسم کی پریشانی کی صورت میں آپ کو گروپ میں یا فردا سوال کرنیکی مکمل اجازت ہوگی',
            'اسباق و مشق کے حساب سے آپ کی حاضری شمار کی جائیگی۔اسی فیصد حاضری مکمل ہونیکی صورت میں سالانہ امتحان میں شرکت کا اھل قرار دیا جائیگا',
            'شعبان المعظم کی دس تاریخ کے بعد سالانہ امتحان ہوگا جو کہ آن لائن ہوگا اور چوبیس گھنٹوں میں حل کرکے اسکو فردا ارسال کرنا ہوگا',
            'سالانہ امتحان میں فیل ہونے والوں یا بالعذرغیرحاضر کو ضمنی امتحان کا موقع دیاجائیگا ۔سالانہ وضمنی دونوں موقع ضائع کرنے والے کو اگلے درجہ میں ترقی نہیں دی جائیگی',
            'کامیاب طلباء کو جامعہ کی طرف سے اسناد بھی جاری کی جائینگی',
            'تنظیم المدارس اہلسنت پاکستان ملحق ہائیر ایجوکیشن کمیشن بورڈ کے سالانہ امتحان میں داخلہ اختیاری ہوگا۔اور داخلہ لینے والا اپنی سہولت کے تحت کسی بھی شہر کیں ملحقہ ادارے سے داخلہ لے سکتا ہے اور جامعہ نظام ممصطفی ﷺ کے تحت داخلہ بھیجنے والوں کو امتحانی شیڈول کیمطابق جامعہ کے مقررہ بورڈ میں حاضر ہونا ہوگا',
            'نصاب تعلیم تنظیم المدارس کے مطابق مع الترمیم ہوگا',
            'سال کے دوران کسی بھی علاقے میں دورہ کے دوران قرب وجوار کے طلباء کو ورکشاپ کے ذریعے مستفید ہونیکا بھی موقع دیا جایگا',
        ];
        return (

            // <View style={{ height: Height(50) }}>
            <ScreenWrapper scrollType='scroll' scrollViewProps={{ showsVerticalScrollIndicator: false }}>
                <View style={styles.content_View}>
                    <Text style={styles.content_Text}>
                        آن لائن درس نظامی داخلہ شرائط وضوابط
                    </Text>
                </View>
                <View style={styles.item_View}>
                    {content.map((item, index) => (
                        <View key={index} style={styles.listItem}>
                            {/* <Text style={styles.number}>. </Text> */}
                            <Text style={styles.text}>{index + 1} . {item} </Text>
                        </View>
                    ))}
                    <Text style={styles.item_Text}>
                        ان شرائط و ضوابطہ کا مطالعہ کرنے کے بعد داخلہ حاصل کرنے کے لئے مندرجہ ذیل لنک سے داخلہ فارم فل کر کے بھیجیں ِ
                    </Text>
                    <View style={styles.btn_View}>
                        <Button label="داخلہ فارم" press={() => navigation.navigate(ScreenNames.ADDMISSION)} />
                    </View>
                </View>
            </ScreenWrapper>
        )
    }
    const renderShortCourse = () => {
        return (
            <View style={{ height: Height(50) }}>
                <View style={styles.content_View}>
                    <Text style={styles.content_Text}>
                        آن لائن شارٹ کورسز
                    </Text>
                </View>
                <View style={styles.item_View}>
                    <Text style={styles.item_Text}>
                        ان شرائط و ضوابطہ کا مطالعہ کرنے کے بعد داخلہ حاصل کرنے کے لئے مندرجہ ذیل لنک سے داخلہ فارم فل کر کے بھیجیں ِ
                    </Text>
                    <View style={styles.btn_View}>
                        <Button label="داخلہ فارم" press={() => navigation.navigate(ScreenNames.ADDMISSION)} />
                    </View>
                </View>
            </View>
        )
    }
    const renderContent = () => {
        switch (selectedCourse) {
            case 'شعبہ ناظرۃ و تجوید':
                return renderTajveez();
            case 'شعبہ حفظ':
                return renderHefiz()
            case 'شعبہ درس نظامی (عالم کورس)للبنین والبنات':
                return renderDarsaNizami()
            case 'شارٹ کورسز':
                return renderShortCourse()

            default:
                return <Text style={styles.default_text}>براہ کرم ایک کورس منتخب کریں۔</Text>;
        }
    };

    return (
        <View style={styles.container}>
            <Picker
                selectedValue={selectedCourse}
                onValueChange={(itemValue) => setSelectedCourse(itemValue)}
                style={styles.picker}
            >
                <Picker.Item label="کورس منتخب کریں۔" value="" />
                <Picker.Item label="شعبہ ناظرۃ و تجوید" value="شعبہ ناظرۃ و تجوید" />
                <Picker.Item label="شعبہ حفظ" value="شعبہ حفظ" />
                <Picker.Item label="شعبہ درس نظامی (عالم کورس)للبنین والبنات" value="شعبہ درس نظامی (عالم کورس)للبنین والبنات" />
                <Picker.Item label="شارٹ کورسز" value="شارٹ کورسز" />
            </Picker>
            <View style={styles.contentContainer}>
                {renderContent()}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    picker: {
        marginTop: Height(2),
        height: 50,
        width: '100%',
        backgroundColor: AppCollors.light
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
        width: Width(98),
        fontSize: 18,
        fontWeight: "800",
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


});
