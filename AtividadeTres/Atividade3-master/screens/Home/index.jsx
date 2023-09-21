import React from 'react';
import { View, Text } from 'react-native';
import MarcadorTruco from '../../components/MarcadorTruco'; // Certifique-se de importar o componente MarcadorTruco
import styles from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marcador de Truco</Text>
      <MarcadorTruco />
    </View>
  );
}
