import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class GameBoard extends React.Component {

  render() {
    // 11 x 11 array 2 dimentions
    const x_arr = 11;
    const gameBoardSlots = [];
    
    for (let i = 1; i <= x_arr; i++) {
        gameBoardSlots.push(
        <View style={{marginTop: 80}}>
          <View key={'row1_'+ i} style={styles.rowContainer} />
          <View key={'row2_'+ i} style={styles.rowContainer} />
          <View key={'row3_'+ i} style={styles.rowContainer} />
          <View key={'row4_'+ i} style={styles.rowContainer} />
          <View key={'row5_'+ i} style={styles.rowContainer} />
          <View key={'row6_'+ i} style={styles.rowContainer} />
          <View key={'row7_'+ i} style={styles.rowContainer} />
          <View key={'row8_'+ i} style={styles.rowContainer} />
          <View key={'row9_'+ i} style={styles.rowContainer} />
          <View key={'row10_'+ i} style={styles.rowContainer} />
          <View key={'row11_'+ i} style={styles.rowContainer} />
        </View>,
      );
    }
    return <View style={styles.container}>{gameBoardSlots}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rowContainer: {
    borderColor: 'black',
    borderWidth: 0.5,
    height: 30,
    width: 30,
  },
  subContainer: {
    color: 'blue',
  },
});
