import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import RegistrationScreen from './RegistrationScreen';
import ForgotPassword from './ForgotPassword';
import CreateNewPassScreen from './CreateNewPassScreen';

const AuthStack = createStackNavigator();

const AuthStackNavigator = ({ onLogin }) => {
    return (
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="LoginScreen">
          {props => <LoginScreen {...props} onLogin={onLogin} />}
        </AuthStack.Screen>
        <AuthStack.Screen name="RegistrationScreen" component={RegistrationScreen} />
        <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
        <AuthStack.Screen name="CreateNewPassScreen" component={CreateNewPassScreen} />
      </AuthStack.Navigator>
    );
};

export default AuthStackNavigator;
