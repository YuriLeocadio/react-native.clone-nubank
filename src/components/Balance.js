import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Balance({ showBalance, balance }) {
    const currentBalance = balance.toFixed(2);
    const { isDarkMode } = useTheme();

    const styles = isDarkMode ? darkStyles : lightStyles;

    return (
        <View style={styles.container}>
            <View style={styles.topWrapper}>
                <Text style={styles.accountText}>Conta</Text>
                <AntDesign name='right' size={16} color={isDarkMode ? '#fff' : '#000'}/>
            </View>

            <Text style={styles.balanceText}>
                {showBalance ? currentBalance : "*****"}
            </Text>
        </View>
    )
}

const darkStyles = StyleSheet.create({
    container: {
        padding: 24,
    },
    topWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    accountText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    balanceText: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold',
    },
});

const lightStyles = StyleSheet.create({
    container: {
        padding: 24,
    },
    topWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    accountText: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
    },
    balanceText: {
        color: '#000',
        fontSize: 26,
        fontWeight: 'bold',
    },
});