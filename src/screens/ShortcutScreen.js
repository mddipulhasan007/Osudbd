import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, useWindowDimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import ListViewScreen from './ListViewScreen';
import { ListView, ListViewNew, ListViewFlash } from './CommonScreen';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const FirstRoute = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ListView" component={ListView} />
  </Stack.Navigator>
);

const SecondRoute = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ListViewNew" component={ListViewNew} />
  </Stack.Navigator>
);

const ThirdRoute = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ListViewFlash" component={ListViewFlash} />
  </Stack.Navigator>
);

const FourRoute = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="ListViewFlash" component={ListViewFlash} />
  </Stack.Navigator>
);

const ShortcutScreen = ({ route }) => {
  const initialTab = route.params?.initialTab || 'TRENDING'; // Using optional chaining and fallback value

  const layout = useWindowDimensions();

  const getInitialRoute = () => {
    switch (initialTab) {
      case 'TRENDING':
        return 'TRENDING';
      case 'NEW':
        return 'NEW';
      case 'FLASH':
        return 'FLASH';
      case 'RECENT':
        return 'RECENT';
      default:
        return 'TRENDING';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Tab.Navigator
        initialRouteName={getInitialRoute()}
        screenOptions={({ route }) => ({
          tabBarLabelStyle: { fontSize: 12, fontWeight: '600', color: '#8a8a8a',},
          tabBarActiveTintColor: '#198754',
          tabBarStyle: { backgroundColor: 'white', margin: 0, padding:0, height:70, },
          tabBarIcon: ({ color }) => {
            let iconName;
            if (route.name === 'TRENDING') {
              iconName = 'trending-up';
            } else if (route.name === 'NEW') {
              iconName = 'open-in-new';
            } else if (route.name === 'FLASH') {
              iconName = 'flash-on';
            } else if (route.name === 'RECENT') {
              iconName = 'access-time';
            }
            return <MaterialIcons name={iconName} size={20} color={color} />;
          },
        })}
      >
        <Tab.Screen name="TRENDING" component={FirstRoute} />
        <Tab.Screen name="NEW" component={SecondRoute} />
        <Tab.Screen name="FLASH" component={ThirdRoute} />
        <Tab.Screen name="RECENT" component={FourRoute} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fffc',
    paddingHorizontal: 0,
  },
});

export default ShortcutScreen;
