import { View } from "react-native"
import React from 'react'
import { estilos } from "./Estilos"

export const Calculadora = () => {
    return (
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
    )
}