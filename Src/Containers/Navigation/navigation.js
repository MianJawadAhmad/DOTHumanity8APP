import 'react-native-gesture-handler';
import * as React from 'react';
/*navigation*/
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import splashScreen from '../splashScreen'



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='splashScreen'
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="splashScreen" component={splashScreen} options={{ title: 'splash Screen' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};