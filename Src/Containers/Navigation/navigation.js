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
import successFul from '../successFul'
import forgotPassword from '../forgotPassword'
import ForgotpasswordNewPassword from '../ForgotpasswordNewPassword'
import Mainactivity8 from '../Mainactivity8'
// import Mainactivity10 from '../Mainactivity10'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Mainactivity8'
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="splashScreen" component={splashScreen} options={{ title: 'splash Screen' }}/>
        <Stack.Screen name="Introduction" component={Introduction} options={{ title: 'Introduction Screen' }}/>
        <Stack.Screen name="signUp" component={signUp} options={{ title: 'signUp Screen' }}/>
        <Stack.Screen name="signIn" component={signIn} options={{ title: 'signIn Screen' }}/>
        <Stack.Screen name="varifyCode" component={varifyCode} options={{ title: 'varifyCode Screen' }}/>
        <Stack.Screen name="termsAndConditions" component={termsAndConditions} options={{ title: 'termsAndConditions Screen' }}/>
        <Stack.Screen name="successFul" component={successFul} options={{ title: 'successFul Screen' }}/>
        <Stack.Screen name="forgotPassword" component={forgotPassword} options={{ title: 'forgotPassword Screen' }}/>
        <Stack.Screen name="ForgotpasswordNewPassword" component={ForgotpasswordNewPassword} options={{ title: 'ForgotpasswordNewPassword Screen' }}/>
        <Stack.Screen name="Mainactivity8" component={Mainactivity8} options={{ title: 'Mainactivity8 Screen' }}/>
        {/* <Stack.Screen mame="Mainactivity10" component={Mainactivity10} options={{title: 'Mainactivity10 Screen'}}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};