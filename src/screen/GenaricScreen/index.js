import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../component/header';
import Purpose from '../../component/purpose';
import AppCollors from '../../utils/AppCollors';
import DepartmentsScreen from '../../component/department';
import ScreenNames from '../../routes/route';

export default function GenaricScreen() {
    const route = useRoute()
    const item = route.params.item
    const navigation = useNavigation()
    return (
        <>
            <Header />
            <View style={styles.container}>
                {item === 'سرورق' &&
                    navigation.navigate(ScreenNames.HOME)
                }
                {item === "اغراض ومقاصد" &&
                    <Purpose />
                }
                {item === 'شعبہ جات' &&
                    <DepartmentsScreen />
                }
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppCollors.white
    }
})
