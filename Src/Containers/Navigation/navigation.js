import 'react-native-gesture-handler';
import * as React from 'react';
/*navigation*/
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import splashScreen from '../splashScreen'
import Introduction from '../Introduction'
import signUp from '../signUp'
import signIn from '../signIn'
import varifyCode from '../varifyCode'
import termsAndConditions from '../termsAndConditions'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='termsAndConditions'
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="splashScreen" component={splashScreen} options={{ title: 'splash Screen' }}/>
        <Stack.Screen name="Introduction" component={Introduction} options={{ title: 'Introduction Screen' }}/>
        <Stack.Screen name="signUp" component={signUp} options={{ title: 'signUp Screen' }}/>
        <Stack.Screen name="signIn" component={signIn} options={{ title: 'signIn Screen' }}/>
        <Stack.Screen name="varifyCode" component={varifyCode} options={{ title: 'varifyCode Screen' }}/>
        <Stack.Screen name="termsAndConditions" component={termsAndConditions} options={{ title: 'termsAndConditions Screen' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};