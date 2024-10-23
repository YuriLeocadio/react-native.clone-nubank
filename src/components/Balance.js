import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IonIcons from '@expo/vector-icons/Ionicons';

export default function Balance({ showBalance, balance }) {
    const currentBalance = balance.toFixed(2);
    const arrow = '>'

    return (
        <View style={styles.container}>
            <View style={styles.topWrapper}>
                <Text style={styles.accountText}>Conta</Text>
                <Text style={{color: '#fff', fontSize: 20}}>{arrow}</Text>
            </View>

            <Text style={styles.balanceText}>
                {showBalance ? currentBalance : "*****"}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
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