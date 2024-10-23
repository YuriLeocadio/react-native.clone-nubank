import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function Loan({showBalance}) {
    const currentLoan = 'R$ 1.000,00'
    const arrow = '>'
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.7}
        >
            <View style={styles.topWrapper}>
                <Text style={styles.title}>Empréstimo</Text>
                <Text style={{color: '#fff', fontSize: 20}}>{arrow}</Text>
            </View>

            <View style={styles.wrapperCredit}>
                <Text style={styles.textWhiteLight}>Valor disponivel de até</Text>
                <Text style={styles.total}>{showBalance ? currentLoan: "*****"}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
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