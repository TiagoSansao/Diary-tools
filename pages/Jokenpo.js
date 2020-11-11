import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AdMobBanner } from 'expo-ads-admob';
import {
  AD_BANNER_01_TESTE,
  CHOOSE_MODE_BIG_BANNER,
  CHOOSE_MODE_SMALL_BANNER,
} from '@env';
import AgainstComputerJokenpo from '../components/AgainstComputerJokenpo';
import AgainstFriendJokenpo from '../components/AgainstFriendJokenpo';

const Jokenpo = () => {
  const [gameMode, setGameMode] = useState(null);

  if (gameMode === null) {
    return (
      <View style={styles.container}>
        <View style={styles.chooseMode}>
          <Text style={styles.chooseText}>Escolha um modo para jogar</Text>
          <TouchableOpacity onPress={() => setGameMode('againstComputer')}>
            <Text style={styles.chooseTextButton}>Jogar contra computador</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setGameMode('againstFriend')}>
            <Text style={styles.chooseTextButton}>Jogar contra um amigo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.advertisementContainer}>
          <AdMobBanner
            style={styles.advertisement}
            bannerSize='mediumRectangle'
            adUnitID={CHOOSE_MODE_BIG_BANNER}
          ></AdMobBanner>
          <AdMobBanner
            style={styles.advertisement}
            bannerSize='largeBanner'
            adUnitID={CHOOSE_MODE_SMALL_BANNER}
          ></AdMobBanner>
        </View>
      </View>
    );
  }

  if (gameMode === 'againstComputer') {
    return <AgainstComputerJokenpo />;
  }

  if (gameMode === 'againstFriend') {
    return <AgainstFriendJokenpo />;
  }
};

export default Jokenpo;

const styles = StyleSheet.create({
  advertisement: {
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  advertisementContainer: {
    marginTop: 'auto',
  },
  chooseMode: {
    alignItems: 'center',
    marginTop: 15,
  },
  chooseText: {
    color: 'white',
    fontSize: 20,
    textShadowColor: 'black',
    textShadowRadius: 3,
    marginBottom: 15,
  },
  chooseTextButton: {
    color: '#ecf0f1',
    borderWidth: 3,
    borderColor: '#d35400',
    backgroundColor: '#e67e22',
    fontSize: 15,
    marginBottom: 10,
    width: 250,
    height: 40,
    textAlign: 'center',
    paddingTop: 7,
    textShadowColor: 'black',
    textShadowRadius: 3,
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#1C304A',
  },
});
