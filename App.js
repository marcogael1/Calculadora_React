import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { estilos } from './Componentes/Estilos';

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
    <SafeAreaView style={estilos.container}>
      <View style={estilos.display1}>
        <Text style={estilos.display}>{valor}</Text>
      </View>
      <View style={estilos.calculator}>
        <Cuerpo operaciones={operaciones} />
      </View>
    </SafeAreaView>
  );
};

const Cuerpo = ({ operaciones }) => (
  <View style={estilos.buttonsContainer}>
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
      estilos.button,
      special ? estilos.specialButton : {},
      double ? { ...estilos.button, width: buttonWidth * 2 + -10 } : {},
    ]}
  >
    <Text style={estilos.buttonText}>{texto}</Text>
  </TouchableOpacity>
);
export default App;
