import React, {useRef} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import {vh} from '../mixin';

const Emoji = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fade = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1075,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1075,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  fade();

  return (
    <View>
      <Animated.View style={[{opacity: fadeAnim}]}>
        <Text style={styles.emoji}>⌛</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  emoji: {
    marginTop: vh(87),
    fontSize: vh(80),
  },
});

export default Emoji;
