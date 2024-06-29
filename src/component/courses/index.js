import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { Height, Width } from '../../utils/Dimentions';
import AppCollors from '../../utils/AppCollors';
import Button from '../Button';
import ScreenNames from '../../routes/route';

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
    const renderContent = () => {
        switch (selectedCourse) {
            case 'شعبہ ناظرۃ و تجوید':
                return renderTajveez();
            case 'شعبہ حفظ':
                return <Text>Content for شعبہ حفظ</Text>;
            case 'شعبہ درس نظامی (عالم کورس)للبنین والبنات':
                return <Text>Content for شعبہ درس نظامی (عالم کورس)للبنین والبنات</Text>;
            case 'شارٹ کورسز':
                return <Text>Content for شارٹ کورسز</Text>;

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
    },
    content_View: {
        width: Width(100),
        height: Height(5),
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: Height(1),
        backgroundColor: AppCollors.primary

    },
    content_Text: {
        width: Width(98),
        fontSize: 15,
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
        width: Width(96),
        height: Height(25),
        justifyContent: 'center',
        alignItems: 'center',

    },
    // btn_View: {

    //     marginTop: Height()
    // }

});
