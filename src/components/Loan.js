import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useTheme } from '../context/ThemeContext';

export default function Loan({showBalance}) {
    const currentLoan = 'R$ 1.000,00'
    const { isDarkMode } = useTheme();
    const styles = isDarkMode ? darkStyles : lightStyles;

    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.7}
        >
            <View style={styles.topWrapper}>
                <Text style={styles.title}>Empréstimo</Text>
                <AntDesign name='right' size={16} color={isDarkMode ? '#fff' : '#000'}/>
            </View>

            <View style={styles.wrapperCredit}>
                <Text style={styles.textWhiteLight}>Valor disponivel de até</Text>
                <Text style={styles.total}>{showBalance ? currentLoan: "*****"}</Text>
            </View>
        </TouchableOpacity>
    );
}

const darkStyles = StyleSheet.create({
    container: {
        padding: 24,
        flexDirection: 'column',
    },
    topWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: '800',
        color: '#fff'
    },
    wrapperCredit: {
        marginTop: 18,
    },
    total: {
        color: '#fff',
        fontSize: 24,
        marginVertical: 5,
        fontWeight: '700',
    },
    textWhiteLight: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

const lightStyles = StyleSheet.create({
    container: {
        padding: 24,
        flexDirection: 'column',
    },
    topWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: '800',
        color: '#000'
    },
    wrapperCredit: {
        marginTop: 18,
    },
    total: {
        color: '#000',
        fontSize: 24,
        marginVertical: 5,
        fontWeight: '700',
    },
    textWhiteLight: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
    },
});