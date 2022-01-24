import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import BottomNavigator from '../components/BottomNavigator';
import {
  AddCarScreen,
  DetailScreen,
  HomeScreen,
  ReportScreen,
  SplashScreen,
} from '../screens';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        options={{headerShown: false}}
        name="Add"
        component={AddCarScreen}
      />
      <Tab.Screen name="Report" component={ReportScreen} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddCar"
        component={AddCarScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
