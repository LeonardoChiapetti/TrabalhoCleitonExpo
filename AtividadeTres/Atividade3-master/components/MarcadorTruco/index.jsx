import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function TrucoScoreboard() {
  const [scorePlayer1, setScorePlayer1] = useState(0);
  const [scorePlayer2, setScorePlayer2] = useState(0);

  const handleIncrementPlayer1 = (amount) => {
    setScorePlayer1(scorePlayer1 + amount);
  };

  const handleIncrementPlayer2 = (amount) => {
    setScorePlayer2(scorePlayer2 + amount);
  };

  const handleResetScores = () => {
    setScorePlayer1(0);
    setScorePlayer2(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.scoreContainer}>
        <View style={styles.scoreItem}>
          <Text style={styles.playerLabelNos}>Nós</Text>
          <Text style={styles.playerScoreNos}>{scorePlayer1}</Text>
        </View>
        <View style={styles.scoreItem}>
          <Text style={styles.playerLabelEles}>Eles</Text>
          <Text style={styles.playerScoreEles}>{scorePlayer2}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={[styles.button, styles.buttonGreen]}
            onPress={() => handleIncrementPlayer1(1)}
          >
            <Text style={styles.buttonText}>+1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonRed]}
            onPress={() => handleIncrementPlayer1(-1)}
          >
            <Text style={styles.buttonText}>-1</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={[styles.button, styles.buttonGreen]}
            onPress={() => handleIncrementPlayer2(1)}
          >
            <Text style={styles.buttonText}>+1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.buttonRed]}
            onPress={() => handleIncrementPlayer2(-1)}
          >
            <Text style={styles.buttonText}>-1</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.button, styles.buttonReset]}
        onPress={handleResetScores}
      >
        <Text style={styles.buttonText}>Zerar</Text>
      </TouchableOpacity>
    </View>
  );
}
