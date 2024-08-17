import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import AppCollors from '../../utils/AppCollors';
import { Width } from '../../utils/Dimentions';
import Button from '../Button';
import { getResultData } from '../../api';
import { FlashMessage } from '../flashMessage';
import { ScreenWrapper } from 'react-native-screen-wrapper';

export default function ResultsScreen() {
    const [form, setForm] = useState({
        gender: '',
        session: '',
        year: '',
        grade: '',
        rollNumber: ''
    });
    const [resultData, setResultData] = useState(null);
    const handleInputChange = (field, value) => {
        setForm({ ...form, [field]: value });
    };

    const handleSubmit = async () => {
        try {
            if (form.rollNumber) {
                const res = await getResultData(form.rollNumber)

                if (res && res?.success === true) {
                    setResultData(res?.image)
                } else {
                    setResultData(null)
                    FlashMessage({ message: 'Please Enter Valid Roll Number', fail: true })

                }
            } else {
                FlashMessage({ message: 'Please Enter Roll Number', fail: true })
            }
        } catch (error) {

        }
        // Handle form submission
        // console.log(form);
    };
    console.log(resultData);

    return (
        <ScreenWrapper scrollType='scroll' statusBarColor={AppCollors.primary}>
            {/* <ScrollView contentContainerStyle={styles.container}> */}
            <View style={styles.container}>
                <View style={styles.boxgrey}>
                    <Text style={styles.bggreen}>رزلٹ تلاش کریں</Text>
                    <View style={styles.blog}>
                        <View style={styles.forms}>
                            <View style={styles.formGroup}>
                                <Text style={styles.label}>جنس کا انتخاب</Text>
                                <Picker
                                    selectedValue={form.gender}
                                    onValueChange={(itemValue) => handleInputChange('gender', itemValue)}
                                    style={styles.picker}
                                >
                                    <Picker.Item label="طالبات" value="female" />
                                    <Picker.Item label="طلبہ" value="male" />
                                </Picker>
                            </View>
                            <View style={styles.formGroup}>
                                <Text style={styles.label}>سیشن کا انتخاب</Text>
                                <Picker
                                    selectedValue={form.session}
                                    onValueChange={(itemValue) => handleInputChange('session', itemValue)}
                                    style={styles.picker}
                                >
                                    <Picker.Item label="ضمنی" value="subsidiary" />
                                    <Picker.Item label="سالانہ" value="annual" />
                                </Picker>
                            </View>
                            <View style={styles.formGroup}>
                                <Text style={styles.label}>سال</Text>
                                <Picker
                                    selectedValue={form.year}
                                    onValueChange={(itemValue) => handleInputChange('year', itemValue)}
                                    style={styles.picker}
                                >
                                    <Picker.Item label="2021ء" value="2021" />
                                    <Picker.Item label="2022ء" value="2022" />
                                </Picker>
                            </View>
                            <View style={styles.formGroup}>
                                <Text style={styles.label}>درجہ کا انتخاب</Text>
                                <Picker
                                    selectedValue={form.grade}
                                    onValueChange={(itemValue) => handleInputChange('grade', itemValue)}
                                    style={styles.picker}
                                >
                                    <Picker.Item label="متوسطہ" value="middle" />
                                    <Picker.Item label="عامہ اول" value="aama1" />
                                    <Picker.Item label="عامہ دوئم" value="aama2" />
                                    <Picker.Item label="خاصہ اول" value="khassa1" />
                                    <Picker.Item label="خاصہ دوئم" value="khassa2" />
                                    <Picker.Item label="عالیہ اول" value="aaliya1" />
                                    <Picker.Item label="عالیہ دوئم" value="aaliya2" />
                                </Picker>
                            </View>
                            <View style={styles.formGroup}>
                                <Text style={styles.label}>رول نمبر:</Text>
                                <TextInput
                                    style={styles.input}
                                    value={form.rollNumber}
                                    onChangeText={(value) => handleInputChange('rollNumber', value)}
                                    placeholder="Roll Number"
                                    keyboardType="numeric"
                                />
                            </View>
                            <Button label={"نتیجہ دیکھیں"} press={handleSubmit} />

                            {resultData && (
                                <View style={styles.resultContainer}>
                                    <Text style={styles.rollNumberText}>Roll Number: {form.rollNumber}</Text>
                                    <Button textStyle={styles.downloadButtonText} style={styles.downloadButton} label={"Download Result"} press={() => Linking.openURL(`https://nizamemustafa.com/images/Results/${resultData}`)} />
                                    {/* <TouchableOpacity
                                        style={styles.downloadButton}
                                        onPress={() => Linking.openURL(`https://nizamemustafa.com/images/Results/${resultData.image}`)}
                                    >
                                        <Text style={styles.downloadButtonText}>Download Result</Text>
                                    </TouchableOpacity> */}
                                </View>
                            )}
                        </View>
                    </View>
                </View>




            </View>
            {/* </ScrollView> */}
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    boxgrey: {
        backgroundColor: '#f8f8f8',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },
    bggreen: {
        backgroundColor: 'green',
        color: 'white',
        textAlign: 'center',
        padding: 10,
        borderRadius: 5,
        fontSize: 18,
    },
    blog: {
        fontSize: 18,
    },
    forms: {
        marginTop: 20,
    },
    formGroup: {

        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    picker: {
        width: Width(80),
        height: 40,
        backgroundColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
    },
    button: {
        backgroundColor: 'green',
        padding: 15,
        borderRadius: 0,
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 24,
    },
    resultContainer: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        marginVertical: 15,
        alignItems: 'center',
    },
    rollNumberText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    downloadButton: {
        width: Width(50),
    },
    downloadButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    },
});
