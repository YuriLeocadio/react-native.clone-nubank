import React from 'react';
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

export default function ActionButtons({ onPress, isDarkMode }) {

    const styles = isDarkMode ? darkStyles : lightStyles;

    const buttonTop = [
        {
            id: 1,
            title: "Pix",
            icon: <FontAwesome6 name='pix' size={24} color={isDarkMode ? '#fff' : '#000'} />
        },
        {
            id: 2,
            title: "Pagar",
            icon: <FontAwesome5 name='barcode' size={24} color={isDarkMode ? '#fff' : '#000'} />
        },
        {
            id: 3,
            title: "Transferir",
            icon: <FontAwesome6 name='money-bill-transfer' size={24} color={isDarkMode ? '#fff' : '#000'} />
        },
        {
            id: 4,
            title: "Recarga",
            icon: <FontAwesome5 name='mobile' size={24} color={isDarkMode ? '#fff' : '#000'} />
        },
        {
            id: 5,
            title: "Depositar",
            icon: <FontAwesome6 name='money-bill-transfer' size={24} color={isDarkMode ? '#fff' : '#000'} />
        },
        {
            id: 6,
            title: "Caixinhas",
            icon: <FontAwesome6 name='circle-dollar-to-slot' size={24} color={isDarkMode ? '#fff' : '#000'} />
        },
        {
            id: 7,
            title: 'Investir',
            icon: <FontAwesome5 name='signal' size={24} color={isDarkMode ? '#fff' : '#000'} />
        }
    ]

    return (
        <View style={styles.container}>
            <FlatList
                data={buttonTop}
                contentContainerStyle={styles.wrapperButtons}
                horizontal
                showsHorizontalScrollIndicator={false}
                overScrollMode="never"
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => item.title === "Pix" && onPress()} style={styles.button}>
                        <View style={styles.wrapperIcon}>
                            {item.icon}
                        </View>

                        <Text style={styles.textButton}>
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                )}
            />

            <View style={styles.myCardsWrapper}>
                <TouchableOpacity style={styles.myCard}>
                    <FontAwesome5 name="credit-card" size={24} color={isDarkMode ? '#fff' : '#000'} />
                    <Text style={styles.myCardText}>Meus Cartões</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const darkStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapperButtons: {
        paddingLeft: 24,
        marginTop: 10,
    },
    button: {
        paddingRight: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapperIcon: {
        height: 75,
        width: 75,
        backgroundColor: '#ddd3',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        marginTop: 7,
        fontWeight: 'bold',
        color: '#fff',
    },
    myCardsWrapper: {
        padding: 24,
    },
    myCard: {
        backgroundColor: '#ddd4',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderRadius: 8,
        marginTop: 16,
    },
    myCardText: {
        marginLeft: 15,
        color: '#fff',
        fontWeight: 'bold',
    }
});

const lightStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapperButtons: {
        paddingLeft: 24,
        marginTop: 10,
    },
    button: {
        paddingRight: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapperIcon: {
        height: 75,
        width: 75,
        backgroundColor: '#ddd',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        marginTop: 7,
        fontWeight: 'bold',
        color: '#000',
    },
    myCardsWrapper: {
        padding: 24,
    },
    myCard: {
        backgroundColor: '#ddd',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderRadius: 8,
        marginTop: 16,
    },
    myCardText: {
        marginLeft: 15,
        color: '#000',
        fontWeight: 'bold',
    }
});
