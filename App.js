/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {vh} from './mixin';
import JinguLogo from './components/JinguLogo';
import NameText from './components/NameText';
import Emoji from './components/Emoji';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView style={styles.scrollView}>
        <ScrollView>
          <View style={styles.block}>
            <JinguLogo />
            <NameText />
            <Emoji />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  block: {
    marginTop: vh(121),
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default App;
