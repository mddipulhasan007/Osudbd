// App.js
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/BottomTabNavigator';
import SplashScreen from './src/screens/SplashScreen';
import AuthStackNavigator from './src/screens/AuthStackNavigator';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for authentication

  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust this timeout as needed
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <NavigationContainer>
      {loading ? (
        <SplashScreen />
      ) : !isLoggedIn ? (
        <AuthStackNavigator onLogin={handleLogin} /> // Pass handleLogin to AuthStackNavigator
      ) : (
        <BottomTabNavigator />
      )}
    </NavigationContainer>
  );
}
