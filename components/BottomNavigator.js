import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  color,
  font,
  IcHome,
  IcHomeFocus,
  IcPlus,
  IcPlusFocus,
  IcReport,
  IcReportFocus,
} from '../assets';

const Icon = ({label, focus}) => {
  switch (label) {
    case 'Report':
      return focus ? <IcReportFocus /> : <IcReport />;
    case 'Home':
      return focus ? <IcHomeFocus /> : <IcHome />;
    case 'Add':
      return focus ? <IcPlusFocus /> : <IcPlus />;
    default:
      return <IcHome />;
  }
};

const BottomNavigator = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.button}>
            <Icon label={label} focus={isFocused} />
            <Text
              style={{
                color: isFocused ? color.primary : '#9EA3AC',
                fontFamily: font.medium,
              }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 4,
    paddingHorizontal: 70,
  },
  button: {
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
