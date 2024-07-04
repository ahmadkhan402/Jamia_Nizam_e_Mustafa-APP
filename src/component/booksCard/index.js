import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

export default function BooksCardComponents({ bookName, downloadBtn, bookImg, onpress }) {
    return (
        <View style={styles.container}>
            <View style={styles.bookNameContainer}>
                <Text style={styles.bookName}>{bookName}</Text>

            </View>
            <View style={styles.bookImgContainer}>
                <Image source={bookImg} style={styles.bookImg} />

            </View>
            <TouchableOpacity style={styles.downloadBtn} onPress={onpress}>
                <Text style={styles.downloadBtnText}>{downloadBtn}</Text>

            </TouchableOpacity>
        </View>
    )
}