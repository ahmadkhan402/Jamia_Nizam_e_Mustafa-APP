import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Height, Width } from '../../utils/Dimentions';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import FrontView from '../../component/frontView';
import { useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import AppCollors from '../../utils/AppCollors';

export default function AddmissionScreen() {
    const route = useRoute();
    const departmentText = route.params.value

    const [form, setForm] = useState({
        name: '',
        father: '',
        dob: '',
        gender: 'Male',
        email: '',
        mobile: '',
        country: 'Pakistan',
        image: null
    });

    const handleInputChange = (field, value) => {
        setForm({ ...form, [field]: value });
    };

    const handleSubmit = () => {
        // Handle form submission
        console.log(form);
    };

    console.log('====================================');
    console.log(form.image);
    console.log('====================================');
    const pickImage = async () => {
        let result = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (result.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            // allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!pickerResult.canceled) {
            handleInputChange('image', pickerResult.assets[0].uri);
        }
    };

    return (
        <ScreenWrapper scrollType='scroll' statusBarColor={AppCollors.primary}>
            <FrontView text={'داخلہ فارم (آن لائن کورسز)'} text1={departmentText} />
            <View style={styles.container}>

                <View style={styles.box}>
                    <Text style={styles.header}>Student Registration Form</Text>
                    <Text style={styles.warning}>Please fill form in English language only (فارم کو انگلش زبان میں فل کریں)</Text>
                    <View style={styles.form}>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Full Name (مکمل نام) <Text style={styles.required}>*</Text></Text>
                            <TextInput
                                style={styles.input}
                                value={form.name}
                                onChangeText={(value) => handleInputChange('name', value)}
                                placeholder="Full Name"
                            />
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Father Name (والد کا نام) <Text style={styles.required}>*</Text></Text>
                            <TextInput
                                style={styles.input}
                                value={form.father}
                                onChangeText={(value) => handleInputChange('father', value)}
                                placeholder="Father's Full Name"
                            />
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Date of Birth (تاریخ پیدائش) <Text style={styles.required}>*</Text></Text>
                            <TextInput
                                style={styles.input}
                                value={form.dob}
                                onChangeText={(value) => handleInputChange('dob', value)}
                                placeholder="YYYY-MM-DD"
                            />
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Gender (جنس) <Text style={styles.required}>*</Text></Text>
                            <Picker
                                selectedValue={form.gender}
                                style={styles.input}
                                onValueChange={(itemValue) => handleInputChange('gender', itemValue)}
                            >
                                <Picker.Item label="Male" value="Male" />
                                <Picker.Item label="Female" value="Female" />
                            </Picker>
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Email Address (ای میل ایڈریس) <Text style={styles.required}>*</Text></Text>
                            <TextInput
                                style={styles.input}
                                value={form.email}
                                onChangeText={(value) => handleInputChange('email', value)}
                                placeholder="Email Address"
                                keyboardType="email-address"
                            />
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Mobile (موبائل) <Text style={styles.required}>*</Text></Text>
                            <TextInput
                                style={styles.input}
                                value={form.mobile}
                                onChangeText={(value) => handleInputChange('mobile', value)}
                                placeholder="+923001234567"
                                keyboardType="phone-pad"
                            />
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Country Name (ملک) <Text style={styles.required}>*</Text></Text>
                            <Picker
                                selectedValue={form.country}
                                style={styles.input}
                                onValueChange={(itemValue) => handleInputChange('country', itemValue)}
                            >
                                <Picker.Item label="Pakistan" value="Pakistan" />
                                <Picker.Item label="Afghanistan" value="Afghanistan" />
                                <Picker.Item label="India" value="India" />
                                {/* Add more countries as needed */}
                            </Picker>
                        </View>
                        <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
                            {form.image ? (
                                <Image source={{ uri: form.image }} style={styles.image} />
                            ) : (
                                <Text style={styles.imageText}>Choose an image</Text>
                            )}
                        </TouchableOpacity>
                        <Button title="Submit" onPress={handleSubmit} />
                    </View>
                </View>
            </View>
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    box: {
        backgroundColor: '#f8f8f8',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
    },
    header: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 10,
    },
    warning: {
        color: 'red',
        textAlign: 'center',
        marginBottom: 20,
    },
    form: {
        width: Width(80),
    },
    formGroup: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    required: {
        color: 'red',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
    },
    imagePicker: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc',
        height: 150,
        borderRadius: 10,
        marginBottom: 15,
    },
    image: {
        width: Width(80),
        height: Height(20),
        borderRadius: 10,
    },
    imageText: {
        color: '#888',
        fontSize: 18,
    },
});
