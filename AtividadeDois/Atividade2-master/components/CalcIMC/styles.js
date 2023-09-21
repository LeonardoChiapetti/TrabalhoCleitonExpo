// src/components/CalcIMC/styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    label: {
        fontSize: 18,
        marginBottom: 8,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign:'center',
    },
    button: {
        backgroundColor: '#a600ff',
        width: '100%',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    resultado: {
        fontSize: 20,
        marginTop: 16,
    },
    classificacao: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 8,
    },
});
