import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../component/header';
import Purpose from '../../component/purpose';
import AppCollors from '../../utils/AppCollors';
import DepartmentsScreen from '../../component/department';
import ScreenNames from '../../routes/route';
import OnlineCoursesScreen from '../../component/courses';
import LecturesScreen from '../../component/lectures';
import SyllabusScreen from '../../component/Syllabus';
import ResultsScreen from '../../component/Results';
import AffiliationScreen from '../../component/Affiliation';
import LibraryScreen from '../../component/Library';
import GalleryScreen from '../../component/Gallery';
import NewsSectionScreen from '../../component/NewsSection';
import DarAlIftaScreen from '../../component/DarAlIfta';
import ContactUsScreen from '../../component/ContactUs';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import AskQuestionScreen from '../../component/askQuestion';

export default function GenaricScreen() {
    const route = useRoute()
    const item = route.params.item
    const navigation = useNavigation()
    useEffect(() => {
        if (item === 'سرورق') {
            navigation.navigate(ScreenNames.HOME);
        }
    }, [item, navigation]);

    return (
        <ScreenWrapper scrollType='none' statusBarColor={AppCollors.primary}>
            <Header />
            <View style={styles.container}>
                {/* {item === "اغراض ومقاصد" && <Purpose />} */}
                {/* {item === 'شعبہ جات' && <DepartmentsScreen />} */}
                {item === 'آن لائن کورسز' && <OnlineCoursesScreen />}
                {item === 'لیکچرز' && <LecturesScreen />}
                {item === 'نصاب' && <SyllabusScreen />}
                {item === 'نتائج' && <ResultsScreen />}
                {item === 'الحاق' && <AffiliationScreen />}
                {item === 'لائبریری' && <LibraryScreen />}
                {item === 'گیلری' && <GalleryScreen />}
                {item === 'نیوز سیکشن' && <NewsSectionScreen />}
                {item === 'دارالافتاء' && <DarAlIftaScreen />}
                {item === 'سوالات پوچھیے' && <AskQuestionScreen />}
                {item === 'رابطہ کریں' && <ContactUsScreen />}
            </View>
        </ScreenWrapper>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppCollors.white
    }
})
