import React from 'react';
import { View, Text, Image } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import FrontView from '../frontView';
import styles from './styles';
import AppCollors from '../../utils/AppCollors';

export default function GalleryScreen() {
    const path = [
        {
            id: 1,
            url: require("./../../assets/gallary_image/1.jpg")
        },
        {
            id: 2,
            url: require("./../../assets/gallary_image/2.jpg")
        },
        {
            id: 3,
            url: require("./../../assets/gallary_image/3.jpg")
        },
        {
            id: 4,
            url: require("./../../assets/gallary_image/4.jpg")
        },
        {
            id: 5,
            url: require("./../../assets/gallary_image/5.jpg")
        },
        {
            id: 6,
            url: require("./../../assets/gallary_image/6.jpg")
        },
        {
            id: 7,
            url: require("./../../assets/gallary_image/7.jpg")
        },
        {
            id: 8,
            url: require("./../../assets/gallary_image/8.jpg")
        },
        {
            id: 9,
            url: require("./../../assets/gallary_image/9.jpg")
        },
        {
            id: 10,
            url: require("./../../assets/gallary_image/10.jpg")
        }
    ];

    return (
        <ScreenWrapper scrollType='scroll' statusBarColor={AppCollors.primary}>
            <FrontView text={"گالری"} />
            <View style={styles.container}>
                {path.map((item, index) => {
                    return (
                        <View key={index} style={styles.imageContainer}>
                            <Image
                                source={item.url}
                                style={styles.image}
                            />
                        </View>
                    )
                })
                }
            </View>
        </ScreenWrapper>
    );
}
