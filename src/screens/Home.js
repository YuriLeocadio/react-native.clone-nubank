import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import Balance from '../components/Balance';
import ActionButtons from '../components/ActionButtons';
import CreditCard from '../components/CreditCard';
import Loan from '../components/Loan';
import { Switch } from 'react-native-gesture-handler';
import { useTheme } from '../context/ThemeContext';

export default function Home({ navigation }) {
  const [showBalance, setShowBalance] = useState(false);
  const [balance, setBalance] = useState(900);
  
  const { isDarkMode, toggleTheme } = useTheme();

  const handleChangeBalanceVisibility = () => {
    setShowBalance(!showBalance);
  };

  const handlePix = () => {
    navigation.navigate("Pix", { balance, setBalance, isDarkMode });
  };

  const styles = isDarkMode ? darkStyles : lightStyles;

  return (
    <ScrollView style={styles.container}>
      <Header
        showBalance={showBalance}
        handleChangeBalanceVisibility={handleChangeBalanceVisibility}
      />
      <Switch
        value={isDarkMode}
        onValueChange={toggleTheme}
        style={styles.themeSwitch}
      />
      <Balance showBalance={showBalance} balance={balance} />
      <ActionButtons onPress={handlePix} />
      <View style={styles.separator} />
      <CreditCard showBalance={showBalance} />
      <View style={styles.separator} />
      <Loan showBalance={showBalance} />
    </ScrollView>
  );
}

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#ddd',
    opacity: 0.5,
  },
  themeSwitch: {
    margin: 10,
  },
});

const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#000',
    opacity: 0.1,
  },
  themeSwitch: {
    margin: 10,
  },
});
