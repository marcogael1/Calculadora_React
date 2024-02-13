import { StyleSheet,Dimensions } from "react-native";
const { width } = Dimensions.get('window');
const buttonWidth = (width - 40) / 4;

export const estilos = StyleSheet.create({
    container: {
        flex: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    calculator: {
        alignItems: 'center',
        padding: 20
    },
    display: {
        width: '90%', 
        minHeight: 70,
        fontSize: 30,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 2,
        borderRadius: 5,
        textAlign: 'right',
        padding: 10,
        paddingRight: 20, 
        alignSelf: 'center', 
    },
    
    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 9,
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