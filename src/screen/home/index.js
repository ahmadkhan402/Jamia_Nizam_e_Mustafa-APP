import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { ScreenWrapper } from 'react-native-screen-wrapper'
import Header from '../../component/header'
import Swiper from 'react-native-swiper'
import { Height, Width } from '../../utils/Dimentions'
import AppCollors from '../../utils/AppCollors'

export default function HomeScreen() {
    return (
        <ScreenWrapper style={{ flex: 1 }}>
            <Header />
            <View style={styles.container}>


                <View style={styles.swaper_container}>
                    <Swiper style={styles.wrapper} showsButtons={true} loop={true} autoplay={true}>
                        <View style={styles.slide1}>
                            <Image source={require("./../../assets/images/1.jpg")} style={{ resizeMode: "contain", height: Height(20), width: Width(100), }} />
                        </View>
                        <View style={styles.slide2}>
                            <Image source={require("./../../assets/images/2_s.jpg")} style={{ resizeMode: "contain", height: Height(20), width: Width(100) }} />
                        </View>
                        <View style={styles.slide3}>
                            <Image source={require("./../../assets/images/3_s.jpg")} style={{ resizeMode: "contain", height: Height(20), width: Width(100) }} />
                        </View>
                    </Swiper>
                    <View style={styles.welCome_View}>
                        <Text style={styles.welCome_Text}>جامعہ نظام مصطفیٰ ﷺ میں خوش آمدید</Text>
                    </View>
                </View>


            </View>
        </ScreenWrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    swaper_container: {
        marginTop: Height(2),
        height: Height(23),
        // justifyContent: 'center',
        backgroundColor: "#e8e6e6"


    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: "#e8e6e6"
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welCome_View: {
        backgroundColor: AppCollors.red,
        height: Height(5),
        justifyContent: 'center',
        alignItems: 'center',
    },
    welCome_Text: {
        color: AppCollors.white,
        fontWeight: "800",
        fontSize: 18
    }

})