import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const buttonWidth = (width - 40) / 4;

const App = () => {
  const [valor, setValor] = useState('');

  const operaciones = (valorBoton) => {
    if (valorBoton === 'AC') {
      setValor('');
    } else if (valorBoton === '⌫') {
      setValor(valor.slice(0, -1));
    } else {
      setValor(valor + valorBoton);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display1}>
        <Text style={styles.display}>{valor}</Text>
      </View>
      <View style={styles.calculator}>
        <Cuerpo operaciones={operaciones} />
      </View>
    </SafeAreaView>
  );
};

const Cuerpo = ({ operaciones }) => (
  <View style={styles.buttonsContainer}>
    <Boton texto="AC" onPress={() => operaciones('AC')} special />
    <Boton texto="⌫" onPress={() => operaciones('⌫')} special />
    <Boton texto="%" onPress={() => operaciones(' % ')} special />
    <Boton texto="÷" onPress={() => operaciones(' / ')} special />
    <Boton texto="7" onPress={() => operaciones('7')} />
    <Boton texto="8" onPress={() => operaciones('8')} />
    <Boton texto="9" onPress={() => operaciones('9')} />
    <Boton texto="X" onPress={() => operaciones(' * ')} special />
    <Boton texto="4" onPress={() => operaciones('4')} />
    <Boton texto="5" onPress={() => operaciones('5')} />
    <Boton texto="6" onPress={() => operaciones('6')} />
    <Boton texto="-" onPress={() => operaciones(' - ')} special />
    <Boton texto="1" onPress={() => operaciones('1')} />
    <Boton texto="2" onPress={() => operaciones('2')} />
    <Boton texto="3" onPress={() => operaciones('3')} />
    <Boton texto="+" onPress={() => operaciones(' + ')} special />
    <Boton texto="0" onPress={() => operaciones('0')} double />
    <Boton texto="." onPress={() => operaciones('.')} />
    <Boton texto="=" onPress={() => operaciones('=')} special />
  </View>
);

const Boton = ({ texto, onPress, special, double }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      styles.button,
      special ? styles.specialButton : {},
      double ? { ...styles.button, width: buttonWidth * 2 + -10 } : {},
    ]}
  >
    <Text style={styles.buttonText}>{texto}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  calculator: {
    alignItems: 'center',
    padding: 20
  },
  display1: {
    alignItems: 'center',
    padding: 10,
    width: '90%'
  },
  display: {
    width: '100%',
    minHeight: 70,
    fontSize: 30,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 5,
    textAlign: 'right',
    justifyContent:'center'
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    width: buttonWidth - 10,
    height: buttonWidth - 10,
    backgroundColor: '#f0f0f0',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: buttonWidth / 2,
  },
  specialButton: {
    backgroundColor: '#ff8c00',
    color: '#fff',
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
  },
});

export default App;
