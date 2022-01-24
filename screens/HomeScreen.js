import React, {useEffect} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {color, IcPlus} from '../assets';
import {ItemCard} from '../components';
import {getCar} from '../redux/action';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {data} = useSelector(state => state.dataReducer);

  useEffect(() => {
    dispatch(getCar());
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
      {data.map(item => {
        return (
          <ItemCard
            onPress={() => navigation.navigate('Detail', {item: item})}
            key={item.carId}
            version={item.version}
            model={item.model.name}
            image={item.urlImage}
            country={item.country.name}
          />
        );
      })}
      <View style={{height: 30}}></View>
    </ScrollView>
  );
};

export default HomeScreen;
