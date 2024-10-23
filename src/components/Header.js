import React from 'react';
import { View, Text, StatusBar, Pressable, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Header({ showBalance, handleChangeBalanceVisibility }) {
    const renderEyeIcon = () => {
        if (showBalance) {
            return <Feather name="eye" size={24} color="#fff" />
        } else {
            return <Feather name="eye-off" size={24} color="#fff" />
        }
    }

    const pressEyeButton = () => {
        handleChangeBalanceVisibility();
    }

    return (
        <View style={styles.container}>
            <View style={styles.topWrapper}>
                <View style={styles.wrapperIconProfile}>
                    <AntDesign name="user" size={24} color="#fff" />
                </View>

                <View style={styles.topRightContent}>
                    <Pressable onPress={pressEyeButton}>
                        {renderEyeIcon()}
                    </Pressable>

                    <AntDesign
                        name="questioncircleo"
                        size={22}
                        color="#fff"
                        style={styles.iconSpacing}
                    />

                    <MaterialCommunityIcons name="email-plus-outline" size={24} color="#fff" />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#9c44dc',
        height: 150,
        paddingTop: StatusBar.currentHeight + 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
    },
    wrapperIconProfile: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#bc8ae1',
        padding: 10,
        borderRadius: 50,
    },
    topWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    topRightContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconSpacing: {
        marginHorizontal: 24,
    }
});