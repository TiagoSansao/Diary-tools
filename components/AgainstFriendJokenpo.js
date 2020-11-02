import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { AdMobBanner } from 'expo-ads-admob';
import { AD_BANNER_01_TESTE } from '@env';

const AgainstComputerJokenpo = () => {

  console.log('renderizando')

  const [gameStatus, setGameStatus] = useState('Faça sua escolha')
  const [playerScore1, setPlayerScore1] = useState(0);
  const [playerChoice1, setPlayerChoice1] = useState(null)
  const [playerScore2, setPlayerScore2] = useState(0);  
  const [playerChoice2, setPlayerChoice2] = useState(null)

  function win(player) {
    if (player === 'Player1') {
      setPlayerScore1(playerScore1 + 1);
      setGameStatus('Player1 venceu');
      setPlayerChoice1(null);
      setPlayerChoice2(null);
      setTimeout(() => {
        setGameStatus('Faça sua escolha');
      }, 1500);
    } else {
      setPlayerScore2(playerScore2 + 1);
      setGameStatus('Player2 venceu');
      setPlayerChoice1(null);
      setPlayerChoice2(null);
      setTimeout(() => {
        setGameStatus('Faça sua escolha');
      }, 1500);
    };
  };

  if (playerChoice1 !== null && playerChoice2 !== null) {
    if (playerChoice1 === playerChoice2) {
      setGameStatus('Empate');
      setPlayerChoice1(null);
      setPlayerChoice2(null);
      setTimeout(() => {
        setGameStatus('Faça sua escolha')
      }, 1500);
      return
    };

    if (playerChoice1 === 'rock') {
      if (playerChoice2 === 'paper') {
        win('Player1');
        return;
      } else {
        win('Player2');
        return;
      }
    };

    if (playerChoice1 === 'paper') {
      if (playerChoice2 === 'rock') {
        win('Player1');
        return;
      } else {
        win('Player2');
        return;
      }
    };

    if (playerChoice1 === 'scissor') {
      if (playerChoice2 === 'paper') {
        win('Player1');
        return;
      } else {
        win('Player2');
        return;
      }
    };
  }

  return (
    <View style={styles.container}>
      <View style={styles.gameContainer}>
        <View style={styles.rotate180}>
          <Text style={styles.gameText}>{gameStatus}</Text>
          <View style={styles.playerOptions}>
            <Text style={styles.computerScore}>Player2 score: {playerScore2}</Text>
            <TouchableOpacity style={styles.playerOption} onPress={() => setPlayerChoice1('rock')} disabled={playerChoice1 !== null ? true : false} >
              <FontAwesome5 name="hand-rock" size={50} color="#ecf0f1" />
              <Text style={styles.label}>Pedra</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.playerOption} onPress={() => setPlayerChoice1('paper')} disabled={playerChoice1 !== null ? true : false} >
              <FontAwesome5 name="hand-paper" size={50} color="#ecf0f1" />
              <Text style={styles.label}>Papel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.playerOption} onPress={() => setPlayerChoice1('scissor')} disabled={playerChoice1 !== null ? true : false} >
              <FontAwesome5 name="hand-scissors" size={50} color="#ecf0f1" />
              <Text style={styles.label}>Tesoura</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rotate0}>
          <Text style={styles.gameText}>{gameStatus}</Text>
          <View style={styles.playerOptions}>
            <Text style={styles.playerScore}>Player1 score: {playerScore1}</Text>
            <TouchableOpacity style={styles.playerOption} onPress={() => setPlayerChoice2('rock')} disabled={playerChoice2 !== null ? true : false} >
              <FontAwesome5 name="hand-rock" size={50} color="#ecf0f1" />
              <Text style={styles.label}>Pedra</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.playerOption} onPress={() => setPlayerChoice2('paper')} disabled={playerChoice2 !== null ? true : false} >
              <FontAwesome5 name="hand-paper" size={50} color="#ecf0f1" />
              <Text style={styles.label}>Papel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.playerOption} onPress={() => setPlayerChoice2('scissor')} disabled={playerChoice2 !== null ? true : false} >
              <FontAwesome5 name="hand-scissors" size={50} color="#ecf0f1" />
              <Text style={styles.label}>Tesoura</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <AdMobBanner 
        style={styles.advertisement}
        bannerSize="largeBanner"
        adUnitID={AD_BANNER_01_TESTE} 
      ></AdMobBanner>
    </View>
  )
}

export default AgainstComputerJokenpo;

const styles = StyleSheet.create({
  advertisement: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  computerScore: {
    position: 'absolute',
    top: -30,
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
    backgroundColor: '#ffa54f'
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
    backgroundColor: '#966F33'
  },
  playerScore: {
    position: 'absolute',
    top: -30,
    left: -3,
    color: 'black',
    padding: 5,
  },
  rotate180: {
    transform: [{ rotate: '180deg' }],
    borderTopColor: '#8b4513',
    borderTopWidth: 3,
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  rotate0: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
})