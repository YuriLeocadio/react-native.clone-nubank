import React from 'react';
import { Alert, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export default function CreditCard({ showBalance }) {
    const currentBalance = 'R$ 1.094,80';
    const limitCreditCard = 'R$ 730,00';
    const arrow = '>'

    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.7}
        >
            <View style={styles.topWrapper}>
                <Text style={styles.title}>Cartão de crédito</Text>
                <Text style={{color: '#fff', fontSize: 20}}>{arrow}</Text>
            </View>

            <View style={styles.wrapperCredit}>
                <Text style={styles.textWhiteLight}>
                    Fatura atual
                </Text>

                <Text style={styles.total}>
                    {showBalance ? currentBalance : "*****"}
                </Text>

                <Text style={styles.textGrayLight}>
                    Limite disponível: {showBalance ? limitCreditCard : "*****"}
                </Text>
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
    textGrayLight: {
        color: '#ddd',
        fontSize: 16,
        fontWeight: '600',
    },
});