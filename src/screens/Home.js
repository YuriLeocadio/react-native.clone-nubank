import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import Balance from '../components/Balance';
import ActionButtons from '../components/ActionButtons';
import CreditCard from '../components/CreditCard';
import Loan from '../components/Loan';


export default function Home({navigation}) {
  const [showBalance, setShowBalance] = useState(false);
  const [balance, setBalance] = useState(900);

  const handleChangeBalanceVisibility = () => {
    setShowBalance(!showBalance);
  };

  const handlePix = () => {
    navigation.navigate("Pix",{balance, setBalance});
  }

  return (
    <ScrollView style={styles.container}>
      <Header
        showBalance={showBalance}
        handleChangeBalanceVisibility={handleChangeBalanceVisibility}
      />
      <Balance showBalance={showBalance} balance={balance} />
      <ActionButtons onPress={handlePix}/>
      <View style={styles.separator} />
      <CreditCard showBalance={showBalance} />
      <View style={styles.separator} />
      <Loan showBalance={showBalance}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#000'
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#ddd',
    opacity: 0.5,
  },
});