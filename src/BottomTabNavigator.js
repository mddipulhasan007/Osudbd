// BottomTabNavigator.js
import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { useNavigation, getFocusedRouteNameFromRoute } from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import ListViewScreen from './screens/ListViewScreen';
import MediDetailsScreen from './screens/MediDetailsScreen';
import ShortcutScreen from './screens/ShortcutScreen';
import CartScreen from './screens/CartScreen';
import OrderScreen from './screens/OrderScreen';
import OrderDetailsScreen from './screens/OrderDetailsScreen';
import MoreMenuScreen from './screens/MoreMenuScreen';
import UserAccountScreen from './screens/UserAccountScreen';
import UserAccDetailsScreen from './screens/UserAccDetailsScreen';
import UserChangePasswordScreen from './screens/UserChangePasswordScreen';
import UserAccSettingScreen from './screens/UserAccSettingScreen';
import UserWishlistScreen from './screens/UserWishlistScreen';
import NotificationScreen from './screens/NotificationScreen';
import NotificationDetailsScreen from './screens/NotificationDetailsScreen';
import SearchScreen from './screens/SearchScreen';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import ForgotPassword from './screens/ForgotPassword';
import CreateNewPassScreen from './screens/CreateNewPassScreen';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="SearchScreen" component={SearchScreen} />
      <HomeStack.Screen name="MediDetailsScreen" component={MediDetailsScreen} />
      <HomeStack.Screen name="ListViewScreen" component={ListViewScreen} />
      {/* <HomeStack.Screen name="ShortcutScreen" component={ShortcutScreen} /> */}
    </HomeStack.Navigator>
  );
}

const ShortStack = createNativeStackNavigator();

function ShortStackScreen() {
  return (
    <ShortStack.Navigator screenOptions={{ headerShown: false }}>
      <ShortStack.Screen name="ShortcutScreen" component={ShortcutScreen} />
      <ShortStack.Screen name="MediDetailsScreen" component={MediDetailsScreen} />
    </ShortStack.Navigator>
  );
}

const OrderStack = createNativeStackNavigator();

function OrderStackScreen() {
  return (
    <OrderStack.Navigator screenOptions={{ headerShown: false }}>
      <OrderStack.Screen name="OrderScreen" component={OrderScreen} />
      <OrderStack.Screen name="OrderDetailsScreen" component={OrderDetailsScreen} />
    </OrderStack.Navigator>
  );
}

const MoreStack = createNativeStackNavigator();

function MoreMenuStackScreen({ navigation, route, onLogin }) {
  React.useEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'LoginScreen' || routeName === 'RegistrationScreen' || routeName === 'ForgotPassword' || routeName === 'CreateNewPassScreen' ) {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: 'flex' } });
    }
  }, [navigation, route]);

  return (
    <MoreStack.Navigator screenOptions={{ headerShown: false }}>
      <MoreStack.Screen name="MoreMenuScreen" component={MoreMenuScreen} />
      <MoreStack.Screen name="UserAccountScreen" component={UserAccountScreen} />
      <MoreStack.Screen name="UserAccDetailsScreen" component={UserAccDetailsScreen} />
      <MoreStack.Screen name="UserChangePasswordScreen" component={UserChangePasswordScreen} />
      <MoreStack.Screen name="UserAccSettingScreen" component={UserAccSettingScreen} />
      <MoreStack.Screen name="UserWishlistScreen" component={UserWishlistScreen} />
      <MoreStack.Screen name="NotificationScreen" component={NotificationScreen} />
      <MoreStack.Screen name="NotificationDetailsScreen" component={NotificationDetailsScreen} />
      <MoreStack.Screen name="RegistrationScreen" component={RegistrationScreen} />
      <MoreStack.Screen name="ForgotPassword" component={ForgotPassword} />
      <MoreStack.Screen name="CreateNewPassScreen" component={CreateNewPassScreen} />
      <MoreStack.Screen name="LoginScreen">
        {props => <LoginScreen {...props} onLogin={onLogin} />}
      </MoreStack.Screen>
    </MoreStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Shortcuts') {
            iconName = focused ? 'export' : 'export';
          }

          else if (route.name === 'Cart') {
            iconName = focused ? 'shoppingcart' : 'shoppingcart';
          }

          else if (route.name === 'Orders') {
            iconName = focused ? 'filetext1' : 'filetext1';
          }

          else if (route.name === 'More') {
            iconName = focused ? 'ellipsis1' : 'ellipsis1';
          }

          // Return the icon component
          return <AntDesign name={iconName} size={24} color={color} />;
        },
        tabBarLabel: ({ focused, color }) => {
          let labelStyle = { fontSize: 12, lineHeight:12, paddingBottom:5, fontWeight:500, color: color };

          // Return the label component
          return <Text style={labelStyle}>{route.name}</Text>;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          
        },
      })}
    >
      
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Shortcuts" component={ShortStackScreen} />
      <Tab.Screen 
        name="Cart" 
        component={CartScreen} 
        options={{
          tabBarBadge: 1,
        }}
      />
      <Tab.Screen name="Orders" component={OrderStackScreen} />
      <Tab.Screen
        name="More"
        component={MoreMenuStackScreen}
        options={{
          tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
