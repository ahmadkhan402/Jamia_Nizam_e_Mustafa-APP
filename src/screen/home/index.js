import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScreenWrapper } from 'react-native-screen-wrapper'
import Header from '../../component/header'
import Swiper from 'react-native-swiper'
import { Height, Width } from '../../utils/Dimentions'
import AppCollors from '../../utils/AppCollors'
import YoutubePlayer from "react-native-youtube-iframe";
import { getYoutubeLink } from '../../api'
export default function HomeScreen() {
    const [youTubeLink, setYoutubeLink] = useState([])


    const imageList = [
        {
            id: 1,
            Link: require('./../../assets/gallary_image/1.jpg'),
        },
        {
            id: 2,
            Link: require('./../../assets/gallary_image/2.jpg'),
        },
        {
            id: 3,
            Link: require('./../../assets/gallary_image/3.jpg'),
        },
        {
            id: 4,
            Link: require('./../../assets/gallary_image/4.jpg'),
        },
        {
            id: 5,
            Link: require('./../../assets/gallary_image/5.jpg'),
        },
        {
            id: 6,
            Link: require('./../../assets/gallary_image/6.jpg'),
        },
        {
            id: 7,
            Link: require('./../../assets/gallary_image/7.jpg'),
        },
        {
            id: 8,
            Link: require('./../../assets/gallary_image/8.jpg'),
        },
        {
            id: 9,
            Link: require('./../../assets/gallary_image/9.jpg'),
        },
        {
            id: 10,
            Link: require('./../../assets/gallary_image/10.jpg'),
        },
    ];

    const getYoutubeLinks = async () => {
        const res = await getYoutubeLink()
        const { lectures } = res
        const data = lectures.map((item) => {
            return item.youtube
        })

        setYoutubeLink(data)

    }
    useEffect(() => {
        getYoutubeLinks()
    }, [])
    const renderItem = ({ item }) => {
        return (
            <View style={styles.gallery_item}>
                <Image source={item.Link} style={{ resizeMode: "cover", width: Width(40), height: Height(20), marginHorizontal: Width(0.5) }} />
            </View>
        )
    }
    return (
        <>
            <Header />
            <ScreenWrapper style={{ flex: 1 }} scrollType='scroll'>

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
                    <View style={styles.intro_Container}>

                        <View style={styles.intro_View}>
                            <Text style={styles.intro_Text}>
                                ہم آپ کو جامعہ نظام مصطفیٰ ﷺ میں خوش آمدید کہتے ہیں۔ جامعہ کا آغاز ۲۰۱۱ میں شروع کیا گیا تھا جس کا مقصد دین اسلام کی تعلیمات کی ترویج و اشاعت ہے دینِ اسلام و شریعت مطہرہ ہر مسلمان کی ضرورت ہے جس پر چلنا انسان کے لئےصرف کھانے پینےکی حد تک ہی نہیں بلکہ زندگی کے ہر کام سے زیادہ ضروری ہے،       </Text>
                            <Image source={require('./../../assets/images/mufti-sb.jpg')} style={styles.intro_Image} />
                        </View>
                        <Text style={styles.intro_Ctext}>دنیا کے ہر انسان کی بقاء اسی میں ہے کہ وہ شریعت مطہرہ پر زندگی بسر کرے، انسان جتنا شریعت محمدی ﷺ سے دور ہوتا جا رہا ہے اتنا ہی مصائب و پریشانیوں میں الجھتا جارہا ہے، دورِ جدید میں جہاں ٹیکنالوجی آسمانوں کو چھو رہی ہے زندگی نفسا نفسی کی بھینٹ چڑھ چکی ہےاورہرشخص مصروفیت کے بھنور میں پھنس چکا ہےلہذا ان تمام حالات و مسائل کے پیش نظر جامعہ نظام مصطفیٰ ﷺ کا آغاز کیا گیا جس کا مقصد۔ طلباء و طالبات کو دینی و دینوی علوم سے روشنا س کرنا اور اخلاقی اقدار و روحانیت سے نسل نو کو آگاہی فراہم کرنا ہے۔ جامعہ نظام مصطفیٰ ﷺ تنظیم المدارس اہلسنت پاکستان سے الحاق شدہ ہے اور گورنمنٹ سے منظور شدہ تنظیم المدارس کے مطابق نہم ، دہم ، ایف اے، بی اے ، ایم اے کرایا جاتا ہے جس میں دینی تعلیم مکمل مفت فراہم کی جاتی ہے۔ میٹرک تک دنیاوی تعلیم مع فیس کی جامعہ ہی میں سہولت موجود ہے۔
                        </Text>
                    </View>

                    <View style={styles.contact_View}>
                        <Text style={styles.contact_Text}>
                            جامعہ نظام مصطفیٰ ﷺ میں غریب اور مستحق طلباء و طالبات کو مفت تعلیم فراہم کی جاتی ہے
                        </Text>
                        <Text style={styles.contact_Text}>
                            آپ اپنی بساط کے مطابق اس نیک عمل میں حصہ ڈال کر شریک ہو سکتے ہیں عطیات و صدقات کے لئیے ناظم جامعہ سے رابطہ کریں 0304165565 , 03348688053
                        </Text>
                    </View>

                    <View style={[styles.content_View, { marginBottom: 0 }]}>
                        <Text style={styles.content_Text}>
                            Media / Gallery
                        </Text>
                    </View>
                    <View style={styles.gallery_View}>
                        <FlatList
                            data={imageList}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            horizontal={true}
                        />
                    </View>

                    <View style={styles.content_View}>
                        <Text style={styles.content_Text}>
                            لیکچرز کی نئی ویدیوز
                        </Text>

                    </View>
                    <View style={styles.video_View}>

                        {
                            youTubeLink.map((item, index) => (

                                <YoutubePlayer
                                    key={index}
                                    height={120}
                                    width={190}
                                    play={false}
                                    videoId={item}
                                />
                            ))
                        }


                    </View>


                </View>
            </ScreenWrapper>
        </>
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
    },
    intro_View: {
        width: Width(100),
        flexDirection: "row",
    },
    intro_Image: {
        width: Width(30),
        height: Height(17),
        resizeMode: "cover",
        margin: 2
    },
    intro_Text: {
        width: Width(68),
        fontSize: 14,
        textAlign: "right",
        marginHorizontal: 2
    },
    intro_Ctext: {
        width: Width(98),
        fontSize: 14,
        textAlign: "right",
        marginHorizontal: 2
    },
    contact_View: {
        width: Width(100),
        height: Height(15),
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: Height(1),
        backgroundColor: AppCollors.bgLight

    },
    contact_Text: {
        width: Width(98),
        fontSize: 15,
        fontWeight: "1200",
        textAlign: "center",
        color: AppCollors.white
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
    video_View: {
        // width: Width(100),
        // height: Height(30),
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        padding: 2,

    },
    gallery_View: {
        marginBottom: Height(1),
    }

})