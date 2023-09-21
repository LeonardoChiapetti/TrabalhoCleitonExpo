// src/screens/Home/Home.js
import React from 'react';
import { View, Text } from 'react-native';
import { CalcIMC } from '../../components/CalcIMC/CalcIMC';
import styles from './styles';

export function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.calcContainer}>
                <Text style={styles.title}>Calculadora de IMC</Text>
                <Text style={styles.descricao}>
                    Descubra qual é o seu índice de Massa Corporal!
                </Text>
                <CalcIMC />
            </View>
        </View>
    );
}