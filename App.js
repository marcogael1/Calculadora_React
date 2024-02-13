import React, { useState } from 'react';
import { SafeAreaView} from 'react-native';
import { estilos } from './Componentes/Estilos';
import { Calculadora} from './Componentes/Calculadora';

const App = () => {

  return (
    <SafeAreaView style={estilos.container}>
      <Calculadora />
    </SafeAreaView>
  );
};
export default App;
