import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import Header from './components/common/Header';
import GameBoard from './components/GameBoard';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Header title={'Scrabble Game'}/>
          <ScrollView contentInsetAdjustmentBehavior={true}>
            {/* <Text>TEST</Text> */}
            <GameBoard />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}