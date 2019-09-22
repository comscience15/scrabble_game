import React from 'react';
import {StyleSheet, Text} from 'react-native';

export interface IProps {
  double?: number;
  onPress?: () => void;
  value?: string;
}

export default class Tile extends React.Component {
  render() {
    return (
      <Text style={styles.tile} onPress={this.props.onPress}>
        {this.props.value}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  tile: {
    height: 50,
    width: 50,
  },
});
