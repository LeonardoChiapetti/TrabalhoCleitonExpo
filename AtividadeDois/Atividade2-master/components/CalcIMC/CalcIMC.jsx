// src/components/CalcIMC/CalcIMC.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export function CalcIMC() {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState('');
    const [classificacao, setClassificacao] = useState('');

    const calcularIMC = () => {
        const pesoNum = parseFloat(peso);
        const alturaNum = parseFloat(altura.replace(',', '.'));

        if (!pesoNum || !alturaNum) {
            setResultado('Valores inválidos');
            setClassificacao('');
            return;
        }

        const alturaMetros = alturaNum / 100;
        const imc = pesoNum / (alturaMetros * alturaMetros);
    
        let classificacaoIMC = '';
        if (imc < 18.5) {
            classificacaoIMC = 'Baixo peso';
        } else if (imc < 24.9) {
            classificacaoIMC = 'Peso normal';
        } else if (imc < 29.9) {
            classificacaoIMC = 'Sobrepeso';
        } else if (imc < 34.9) {
            classificacaoIMC = 'Obesidade grau 1';
        } else if (imc < 39.9) {
            classificacaoIMC = 'Obesidade grau 2';
        } else {
            classificacaoIMC = 'Obesidade grau 3 (obesidade mórbida)';
        }

        setResultado(`Seu IMC é ${imc.toFixed(2)}`);
        setClassificacao(classificacaoIMC);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.input, styles.negrito, styles.textCenter]}
                placeholder="Peso (kg)"
                keyboardType="numeric"
                onChangeText={setPeso}
                value={peso}
                caretHidden={true}
            />
            <TextInput
                style={[styles.input, styles.negrito, styles.textCenter]}
                placeholder="Altura (cm)"
                keyboardType="numeric"
                onChangeText={setAltura}
                value={altura}
                caretHidden={true}
            />
            <TouchableOpacity style={styles.button} onPress={calcularIMC}>
                <Text style={styles.buttonText}>Calcular</Text>
            </TouchableOpacity>
            <Text style={styles.resultado}>{resultado}</Text>
            <Text style={styles.classificacao}>{classificacao}</Text>
        </View>
        
    );
}