import React from 'react';
import { View, Text } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import FrontView from '../frontView';
import BooksCardComponents from '../booksCard';
import styles from './styles';
export default function LibraryScreen() {
    return (
        <ScreenWrapper scrollType='scroll'>
            <FrontView text="لائبریری" />
            <View style={styles.cardDisplay}>
                <BooksCardComponents bookImg={{ uri: "https://nizamemustafa.com/images/bukhari.png" }} bookName={"بکهری"} downloadBtn={"دانلود"} />
                <BooksCardComponents bookImg={{ uri: "https://nizamemustafa.com/images/muslim.png" }} bookName={"صحیح مسلم"} downloadBtn={"دانلود"} />
                <BooksCardComponents bookImg={{ uri: "https://nizamemustafa.com/images/dawood.png" }} bookName={"سنن ابی داود"} downloadBtn={"دانلود"} />

            </View>
        </ScreenWrapper>
    );
}
