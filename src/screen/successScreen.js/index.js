import { View, Text, Image } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import styles from './style'

export default function Success() {
    const route = useRoute()
    const reponse = route.params.data
    return (
        <View style={styles.container}>
            <Image source={require('./../../assets/sucess.png')} style={styles.img} />
            <Text style={styles.text}>{reponse}</Text>
        </View>
    )
}