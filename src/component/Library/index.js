import React, { useEffect, useState } from 'react';
import { View, Text, Linking } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import FrontView from '../frontView';
import BooksCardComponents from '../booksCard';
import styles from './styles';
import AppCollors from '../../utils/AppCollors';
import { getLibraryData } from '../../api';
import Loader from '../loader';
export default function LibraryScreen() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const getApiRequest = async () => {
        try {
            setLoading(true)
            const data = await getLibraryData()
            if (data.success === true) {
                setData(data.data)
                setLoading(false)
            } else {
                setLoading(false)
                Alert.alert('Error in Api Request')
            }
        } catch (error) {

        }
    }
    useEffect(() => {
        getApiRequest()
    }, [])
    return (
        <ScreenWrapper scrollType='scroll' statusBarColor={AppCollors.primary}>
            <View style={styles.container}>
                {loading ? <Loader isVisible={loading} /> : (
                    <>
                        <FrontView text="لائبریری" />

                        <View style={styles.cardDisplay}>
                            {data.map((item, index) => (
                                <BooksCardComponents bookImg={{ uri: `https://nizamemustafa.com/images/Books/${item.bookcover}` }} key={index} bookName={item.bookname} onpress={() => Linking.openURL(`https://nizamemustafa.com/images/Books/${item.book}`)} downloadBtn={"ڈاؤن لوڈ"} />
                            ))}
                        </View>
                    </>
                )}
            </View>
        </ScreenWrapper>
    );
}
