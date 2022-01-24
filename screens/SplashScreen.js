import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {LogoApp} from '../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <LogoApp />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
