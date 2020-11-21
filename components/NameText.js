import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {vh} from '../mixin';

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
    fontSize: vh(40),
  },
});

export default NameText;
