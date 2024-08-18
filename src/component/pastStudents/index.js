import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import AppCollors from '../../utils/AppCollors';
import FrontView from '../frontView';
import { Height, Width } from '../../utils/Dimentions';
import { getPastStudents } from '../../api';
import Loader from '../loader';

export default function PastStudents() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const getApiRequest = async () => {
        setLoading(true)
        let res = await getPastStudents()
        if (res && res?.success === true) {
            console.log(res);
            setData(res?.Paststudents)
            setLoading(false)

        } else {
            setLoading(false)

        }

    }
    useEffect(() => {
        getApiRequest()
    }, [])
    return (
        <ScreenWrapper scrollType='scroll' statusBarColor={AppCollors.primary}>
            <FrontView text={'سابقه طلباء'} />
            <View style={styles.container} >
                {loading ? <Loader isVisible={loading} /> : (
                    <View style={styles.viewItemContainer}>
                        {data.map((item) => (
                            <View style={styles.itemContainer} key={item.Id}>
                                <Image source={{ uri: `https://nizamemustafa.com/images/paststudents/${item.image}` }} style={styles.img} />
                                <Text style={styles.stuNameText}>{item.studentname}</Text>
                                <Text style={styles.text}>Passing Year: {item.passingyear}</Text>
                                <Text style={styles.text}>City: {item.city}</Text>
                            </View>
                        ))}
                    </View>
                )}
            </View>
        </ScreenWrapper>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewItemContainer: {
        width: Width(90),
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignSelf: 'center',
    },
    itemContainer: {
        borderWidth: 1,
        borderRadius: 10,
        padding: Height(1),
        alignItems: 'center',
        // backgroundColor: AppCollors.red,
        width: Width(42),

        marginVertical: Height(1),
    }
    ,
    stuNameText: {
        width: Width(40),
        alignSelf: 'center',
        alignItems: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: Height(1),
        textAlign: 'center',
    },
    img: {
        width: Width(30),
        height: Height(15),
        resizeMode: 'cover',
        borderRadius: Width(30)
    }
})