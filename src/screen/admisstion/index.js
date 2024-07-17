import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { Height, Width } from '../../utils/Dimentions';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import FrontView from '../../component/frontView';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import AppCollors from '../../utils/AppCollors';
import { addmissionData } from '../../api';
import { getCountryData, getCountryDataList } from 'countries-list';
import * as FileSystem from 'expo-file-system';
import RadioButtonRN from 'radio-buttons-react-native';
import Checkbox from 'expo-checkbox';
import Button from '../../component/Button';
import ScreenNames from '../../routes/route';

export default function AddmissionScreen() {
    const route = useRoute();
    const navigation = useNavigation()
    const departmentText = route.params.value

    const [countryList, setCountryList] = useState([]);
    const [image, setImage] = useState(null);
    const [base64Image, setBase64Image] = useState("");
    const [form, setForm] = useState({
        name: '',
        father: '',
        dob: '',
        gender: 'Male',
        email: '',
        mobile: '',
        country: 'Pakistan',
        picture: null,
        province: "",
        city: "",
        course: '',
        fee: "500",
        formaleducation: "",
        address: '',
        islamiceducation: '',
        others: "",
    });
    const [selectedCountry, setSelectedCountry] = useState('Select Country');
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [isChecked, setChecked] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        handleInputChange('country', country);
        setDropdownVisible(false);
    };
    const handleInputChange = (field, value) => {
        setForm({ ...form, [field]: value });
    };

    const handleSubmit = async () => {
        try {
            if (form.address && form.name && form.father && form.dob && form.email && form.mobile && form.country && form.course && form.fee && form.province && form.city) {
                if (form.gender === 'Male' && !form.picture) {
                    Alert.alert('Error', 'Please upload an image for boys.');
                    return;
                }
                // Make API request with form data
                const res = await addmissionData(form); // Ensure addmissionData function is defined and works correctly
                console.log('====================================');
                console.log(res);
                console.log('====================================');
                if (res) navigation.navigate(ScreenNames.SUCCESSSCREEN, { data: res.message })
            } else {
                alert("Please fill all the required fields");
            }

        } catch (e) {
            console.log(e);
        }
    };

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
            // handleInputChange('image', pickerResult.assets[0].uri);
            setImage(pickerResult.assets[0].uri);
            convertToBase64(pickerResult.assets[0].uri);

        }
    };
    const convertToBase64 = async (uri) => {
        try {
            const base64 = await FileSystem.readAsStringAsync(uri, {
                encoding: FileSystem.EncodingType.Base64,
            });
            handleInputChange('picture', base64);
        } catch (error) {
            console.error("Error converting image to Base64:", error);
        }
    };


    const data = [
        {
            label: ' Yes, I agree'
        },

    ];
    useEffect(() => {
        const res = getCountryDataList()
        const countrylist = res.map((item) => {
            return item.name
        })
        setCountryList(countrylist)

    }, [])
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
                                keyboardType='numeric'
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



                            <TouchableOpacity onPress={toggleDropdown} style={styles.dropdown}>
                                <Text style={styles.dropdownText}> {selectedCountry ? selectedCountry : 'Select Country'}</Text>
                            </TouchableOpacity>

                            {dropdownVisible && (
                                <View style={styles.dropdownList}>
                                    {countryList.map((item, index) => (
                                        <TouchableOpacity key={index} onPress={() => handleCountrySelect(item)} style={styles.dropdownItem}>
                                            <Text style={styles.dropdownItemText}>{item}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            )}

                        </View >
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Province (صوبہ) <Text style={styles.required}>*</Text></Text>
                            <TextInput
                                style={styles.input}
                                value={form.province}
                                onChangeText={(value) => handleInputChange('province', value)}
                                placeholder="Enter province"
                                keyboardType="default"
                            />
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>City (شہر) <Text style={styles.required}>*</Text></Text>
                            <TextInput
                                style={styles.input}
                                value={form.city}
                                onChangeText={(value) => handleInputChange('city', value)}
                                placeholder="Enter city"
                                keyboardType="default"
                            />
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Address (مکمل ایڈریس) <Text style={styles.required}>*</Text></Text>
                            <TextInput
                                style={styles.input}
                                value={form.address}
                                onChangeText={(value) => handleInputChange('address', value)}
                                placeholder="Enter Address"
                                keyboardType="default"
                            />
                        </View>

                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Course Name (کورس کا انتخاب) <Text style={styles.required}>*</Text></Text>
                            <Picker
                                selectedValue={form.course}
                                style={styles.input}
                                onValueChange={(itemValue) => handleInputChange('course', itemValue)}
                            >
                                <Picker.Item label="شعبہ ناظرۃ و تجوید" value="شعبہ ناظرۃ و تجوید" />

                                {/* Add more countries as needed */}
                            </Picker>
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Registration Fee (داخلہ فیس) <Text style={styles.required}>*</Text></Text>
                            <Picker selectedValue={form.fee} style={styles.input} onValueChange={(itemValue) => handleInputChange('fee', itemValue)}>
                                <Picker.Item label='Rs. 500' value='500' />
                                <Picker.Item label='Rs. 1000' value='1000' />
                            </Picker>


                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Islamic Education & Institute Name (دینی تعلیم ، ادارہ کا نام) <Text style={styles.required}>*</Text></Text>
                            <TextInput
                                style={styles.input}
                                value={form.islamiceducation}
                                onChangeText={(value) => handleInputChange('islamiceducation', value)}
                                placeholder="Enter Islamic Education & Institute Name"
                                keyboardType="default"
                            />
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Secular Education & Institute Name (دنیاوی تعلیم، ادارہ کا نام) <Text style={styles.required}>*</Text></Text>
                            <TextInput
                                style={styles.input}
                                value={form.formaleducation}
                                onChangeText={(value) => handleInputChange('formaleducation', value)}
                                placeholder="Enter Secular Education & Institute Name"
                                keyboardType="default"
                            />
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.label}>Other Details (مزید تفصیلات) <Text style={styles.required}>*</Text></Text>
                            <TextInput
                                style={styles.input}
                                value={form.others}
                                onChangeText={(value) => handleInputChange('others', value)}
                                placeholder="Enter other details"
                                keyboardType="default"
                            />
                        </View>
                        <Text style={[styles.label, { paddingBottom: Height(3) }]}>Upload Picture - (Male Students Only) تصویر اپلوڈ کریں (صرف طلباء کیلئے ضروری ہے) <Text style={styles.required}>*</Text></Text>
                        <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
                            {image ? (
                                <Image source={{ uri: image }} style={styles.image} />
                            ) : (
                                <Text style={styles.imageText}>Choose an image</Text>
                            )}
                        </TouchableOpacity>
                        <Text style={styles.text}>" I confess under oath that the above data is my personal. I swear I will abide by all the rules And my purpose in joining this group is just to get a religious education,Other than that, there is no hidden or visible purpose."</Text>
                        <Text style={styles.text}>میں حلفیہ طورپر اقرارکرتا ہوں کہ مذکورہ بالا کوائف میرے زاتی ہیں میں قسم کھاتا ہوں کہ میں تمام قواعد کی پابندی کرونگا اوراس گروپ میں شامل ہونیکا مقصد صرف دینی تعلیم کا حصول ہے اسکے علاوہ کوئی چھپا ظاہر مقصد نہیں ہے</Text>
                        <View style={styles.section}>
                            <Checkbox
                                style={styles.checkbox}
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? AppCollors.secondary : undefined}
                            />
                            <Text style={styles.paragraph}>Yes, I agree</Text>
                        </View>
                        <Button label="Submit" press={handleSubmit} style={styles.button} />

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
    paragraph: {
        fontSize: 14,
        marginLeft: Width(2)
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
    label: {
        fontSize: 16,
        marginBottom: 10,
    },
    required: {
        color: 'red',
    },
    dropdown: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    dropdownText: {
        fontSize: 16,

    },
    dropdownList: {
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#cccs',
        borderRadius: 5,
    },
    dropdownItem: {

        padding: 10,
        borderTopColor: 'black',
        borderTopWidth: 1,
        backgroundColor: AppCollors.light
    },
    dropdownItemText: {
        fontSize: 16,
    },
    text: {

        fontSize: 14,
        textAlign: 'justify',
        marginBottom: 10,
    },
    section: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    checkbox: {
        margin: 8,
    },
    button: {
        height: Height(6),
    }
});
