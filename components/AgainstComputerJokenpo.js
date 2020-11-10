import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { AdMobBanner } from 'expo-ads-admob';
import { AD_BANNER_01_TESTE, JOKENPO_AGAINST_COMPUTER_BANNER } from '@env';

const AgainstComputerJokenpo = () => {
  const [gameStatus, setGameStatus] = useState('Faça sua escolha');
  const [computerChoiceVisual, setComputerChoiceVisual] = useState(null);
  const [playerScore1, setPlayerScore1] = useState(0);
  const [playerScore2, setPlayerScore2] = useState(0);

  function lose() {
    setGameStatus('Jogador perdeu');
    setPlayerScore2(playerScore2 + 1);
    setTimeout(() => {
      setGameStatus('Faça sua escolha');
      setComputerChoiceVisual(null);
    }, 1500);
  }

  function win() {
    setGameStatus('Jogador venceu');
    setPlayerScore1(playerScore1 + 1);
    setTimeout(() => {
      setGameStatus('Faça sua escolha');
      setComputerChoiceVisual(null);
    }, 1500);
  }

  function playerVsComputerMatch(playerChoice) {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
      case 0:
        setComputerChoiceVisual('hand-rock');
        computerChoice = 'rock';
        break;
      case 1:
        setComputerChoiceVisual('hand-paper');
        computerChoice = 'paper';
        break;
      case 2:
        setComputerChoiceVisual('hand-scissors');
        computerChoice = 'scissor';
        break;
    }

    if (playerChoice === computerChoice) {
      setGameStatus('Empate');
      setTimeout(() => {
        setGameStatus('Faça sua escolha');
        setComputerChoiceVisual(null);
      }, 1500);
      return;
    }

    if (playerChoice === 'rock') {
      if (computerChoice === 'paper') {
        win();
        return;
      } else {
        lose();
        return;
      }
    }

    if (playerChoice === 'paper') {
      if (computerChoice === 'scissor') {
        win();
        return;
      } else {
        lose();
        return;
      }
    }

    if (playerChoice === 'scissor') {
      if (computerChoice === 'rock') {
        win();
        return;
      } else {
        lose();
        return;
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.gameContainer}>
        <View style={styles.playerOptions}>
          <Text style={styles.computerScore}>
            Computer score: {playerScore2}
          </Text>
          <View style={styles.playerOption}>
            <FontAwesome5
              name={
                computerChoiceVisual === null
                  ? 'question'
                  : computerChoiceVisual
              }
              size={50}
              color='#ecf0f1'
            />
          </View>
          <View style={styles.playerOption}>
            <FontAwesome5
              name={
                computerChoiceVisual === null
                  ? 'question'
                  : computerChoiceVisual
              }
              size={50}
              color='#ecf0f1'
            />
          </View>
          <View style={styles.playerOption}>
            <FontAwesome5
              name={
                computerChoiceVisual === null
                  ? 'question'
                  : computerChoiceVisual
              }
              size={50}
              color='#ecf0f1'
            />
          </View>
        </View>
        <Text style={styles.gameText}>{gameStatus}</Text>
        <View style={styles.playerOptions}>
          <Text style={styles.playerScore}>Your score: {playerScore1}</Text>
          <TouchableOpacity
            style={styles.playerOption}
            onPress={() => playerVsComputerMatch('rock')}
            disabled={gameStatus !== 'Faça sua escolha' ? true : false}
          >
            <FontAwesome5 name='hand-rock' size={50} color='#ecf0f1' />
            <Text style={styles.label}>Pedra</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.playerOption}
            onPress={() => playerVsComputerMatch('paper')}
            disabled={gameStatus !== 'Faça sua escolha' ? true : false}
          >
            <FontAwesome5 name='hand-paper' size={50} color='#ecf0f1' />
            <Text style={styles.label}>Papel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.playerOption}
            onPress={() => playerVsComputerMatch('scissor')}
            disabled={gameStatus !== 'Faça sua escolha' ? true : false}
          >
            <FontAwesome5 name='hand-scissors' size={50} color='#ecf0f1' />
            <Text style={styles.label}>Tesoura</Text>
          </TouchableOpacity>
        </View>
      </View>
      <AdMobBanner
        style={styles.advertisement}
        bannerSize='largeBanner'
        adUnitID={AD_BANNER_01_TESTE}
      ></AdMobBanner>
    </View>
  );
};

export default AgainstComputerJokenpo;

const styles = StyleSheet.create({
  advertisement: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  computerScore: {
    position: 'absolute',
    bottom: -30,
    left: -3,
    color: 'black',
    padding: 5,
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#1C304A',
  },
  gameContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 15,
    backgroundColor: '#ffa54f',
  },
  gameText: {
    color: '#d35400',
    fontSize: 30,
    textAlign: 'center',
  },
  playerOptions: {
    borderColor: '#8b4513',
    borderWidth: 3,
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  playerOption: {
    flexGrow: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#8b4513',
    borderWidth: 1,
    backgroundColor: '#966F33',
  },
  playerScore: {
    position: 'absolute',
    top: -30,
    left: -3,
    color: 'black',
    padding: 5,
  },
});
