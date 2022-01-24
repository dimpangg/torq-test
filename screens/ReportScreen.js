import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {LineChart} from 'react-native-chart-kit';
import {color, font} from '../assets';

const ReportScreen = () => {
  const data = {
    labels: ['TOYOTA', 'ISUZU', 'NISSAN', 'MAZDA', 'SUBARU'],
    datasets: [
      {
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
        ],
      },
    ],
  };

  return (
    <View
      style={{
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 16,
        margin: 8,
        borderRadius: 10,
      }}>
      <Text style={{color: color.dark, fontFamily: font.medium}}>
        Statistic
      </Text>
      <LineChart
        data={data}
        width={350} // from react-native
        height={220}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: color.primary,
          backgroundGradientFrom: `rgba(${color.primaryRgb}, 0.6)`,
          backgroundGradientTo: `rgba(${color.primaryRgb}, 0.2)`,
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: `rgba(${color.primaryRgb}, 0.8)`,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default ReportScreen;

const styles = StyleSheet.create({});
