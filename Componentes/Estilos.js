import { StyleSheet,Dimensions } from "react-native";
const { width } = Dimensions.get('window');
const buttonWidth = (width - 40) / 4;

export const estilos = StyleSheet.create({
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
        justifyContent: 'center'
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
    }

})