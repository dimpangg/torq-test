import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color, font} from '../assets';

const Tables = ({
  title,
  content,
  textColor = color.white,
  flexStart = 0.25,
  flexEnd = 0.65,
}) => {
  return (
    <View style={styles.tableWrap}>
      <View style={styles.tableStart(flexStart)}>
        <Text style={styles.textContent(textColor)}>{title}</Text>
      </View>
      <View style={styles.tableCenter}>
        <Text style={styles.textContent(textColor)}>:</Text>
      </View>
      <View style={styles.tableEnd(flexEnd)}>
        <Text style={styles.textContent(textColor)}>{content}</Text>
      </View>
    </View>
  );
};

export default Tables;

const styles = StyleSheet.create({
  textContent: textColor => ({
    color: textColor,
    fontFamily: font.regular,
  }),
  tableWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tableStart: flexStart => ({
    flex: flexStart,
    justifyContent: 'center',
  }),
  tableCenter: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableEnd: flexEnd => ({
    flex: flexEnd,
    justifyContent: 'center',
  }),
});
