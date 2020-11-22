import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {vh} from '../mixin';

const JinguLogo = () => {
  return (
    <View>
      <Image
        source={{uri: 'https://www.jingu.ru/sirius/jingu-logo-512.png'}}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: vh(210),
    height: vh(210),
    borderRadius: vh(110),
  },
});

export default JinguLogo;
