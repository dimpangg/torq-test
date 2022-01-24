import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {color, font} from '../assets';

const ItemCard = ({image, model, version, country, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={styles.container}>
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.model}>{model}</Text>
          <Text style={styles.title}>{version}</Text>
          <Text style={styles.model}>{country}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: color.white,
    alignItems: 'center',
    marginHorizontal: 8,
    marginTop: 12,
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 20,
  },
  image: {
    width: 170,
    height: 100,
  },
  textContainer: {
    flexDirection: 'column',
    marginLeft: 8,
  },
  model: {
    fontFamily: font.light,
    color: color.dark,
  },
  title: {
    fontFamily: font.medium,
    color: color.dark,
  },
});
