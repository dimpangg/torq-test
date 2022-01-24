import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';
import React from 'react';
import {color, font} from '../assets';

const TextInput = ({title, value, onChangeText}) => {
  return (
    <View style={{marginBottom: 8}}>
      <Text style={styles.title}>{title}</Text>
      <TextInputRN
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  title: {
    fontFamily: font.regular,
    color: color.dark,
    marginBottom: 2,
  },
  input: {
    borderColor: `rgba(${color.darkRgb},0.5)`,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
});
