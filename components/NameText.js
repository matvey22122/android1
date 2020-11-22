import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {vw, vh} from '../mixin';

const NameText = () => {
  return (
    <View>
      <Text style={styles.title}>Матвей Карпов</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: vh(86),
    fontFamily: 'Roboto-Light',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: vw(40),
  },
});

export default NameText;
