import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button';
import { useState } from 'react';
import Display from './src/components/Display';

export default function App() {
  const [displayValue, setDisplayValue] = useState(0)

  const addDigital = (n) => {
    setDisplayValue(n)
  }

  const clearMemory = () => {
    setDisplayValue('0')
  }

  const setOparation = (oparation) => {

  }

  return (
    <View style={styles.container}>
      <Display value={displayValue}/>
      <View style={styles.buttons}>
        <Button label="AC" triple onClick={clearMemory}/>
        <Button label="/" operation onClick={setOparation}/>
        <Button label="7" onClick={addDigital}/>
        <Button label="8" onClick={addDigital}/>
        <Button label="9" onClick={addDigital}/>
        <Button label="*" operation onClick={setOparation}/>
        <Button label="4" onClick={addDigital}/>
        <Button label="5" onClick={addDigital}/>
        <Button label="6" onClick={addDigital}/>
        <Button label="-" operation onClick={setOparation}/>
        <Button label="1" onClick={addDigital}/>
        <Button label="2" onClick={addDigital}/>
        <Button label="3" onClick={addDigital}/>
        <Button label="+" operation onClick={setOparation}/>
        <Button label="0" double onClick={addDigital}/>
        <Button label="." onClick={addDigital}/>
        <Button label="=" operation onClick={setOparation}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
