/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text,View,ScrollView,TouchableOpacity,Image} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {DrawerActions} from '@react-navigation/native';

import TestScreen from './src/TestScreen';
import QuestScreen from './src/QuestScreen';
import LoginScreen from './src/LoginScreen';
import RegisterScreen from './src/RegisterScreen';
import RankScreen from './src/RankScreen';
import MainScreen from './src/MainScreen';

import 'react-native-gesture-handler';
import 'react-native-reanimated';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 60, height: 50 }}
      source={require('./img/Logo.png')}
    />
  );
}

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerTitle: () => <LogoTitle />,
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: '#BEADFA',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            drawerStyle: {
              backgroundColor: '#fff',
              width: 340,
            },
            drawerPosition: 'left',
            drawerItemStyle: {

            },
            drawerStatusBarAnimation: "slide"
          }}
          
          >
          <Drawer.Screen name="Main" component={MainScreen}/>
          <Drawer.Screen name="Rank" component={RankScreen} />
          <Drawer.Screen name="Register" component={RegisterScreen} />
          <Drawer.Screen name="Login" component={LoginScreen} />
          <Drawer.Screen name="Quest" component={QuestScreen} />
          <Drawer.Screen name="Test" component={TestScreen} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
