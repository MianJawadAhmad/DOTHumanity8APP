import 'react-native-gesture-handler';
import * as React from 'react';
import { Image } from 'react-native'
/*navigation*/
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
import Mainactivity10 from '../Mainactivity10'
import notification from '../notification'
import messages from '../messages'
import settings from '../settings'
import Menu from '../Menu'
import popularTips from '../popularTips'
import popularTipsDetails from '../popularTipsDetails'
import editProfile from '../editProfile'
import support from '../support'
import aboutUs from '../aboutUs'
import RequestNewService from '../RequestNewService'
import Myrequests from '../Myrequests'


const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function tabApp() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let img;
          if (route.name === 'messages') {
            img = focused
              ? <Image style={{ width: 30.8, height: 30.8 }} source={require('../../Images/Messages.png')} />
              : <Image style={{ width: 30.8, height: 30.8 }} source={require('../../Images/Messages1.png')} />;
          } else if (route.name === 'Mainactivity8') {
            img = focused
              ? <Image style={{ width: 88.3, height: 88.3 }} source={require('../../Images/home.png')} />
              : <Image style={{ width: 88.3, height: 88.3 }} source={require('../../Images/home1.png')} />;
          } else if (route.name === 'notification') {
            img = focused
              ? <Image style={{ width: 18.49, height: 24.81 }} source={require('../../Images/noti1.png')} />
              : <Image style={{ width: 18.49, height: 24.81 }} source={require('../../Images/noti.png')} />;
          } else if (route.name === 'settings') {
            img = focused
              ? <Image style={{ width: 24.49, height: 24.81 }} source={require('../../Images/settings1.png')} />
              : <Image style={{ width: 24.49, height: 24.81 }} source={require('../../Images/settings.png')} />;
          } else if (route.name === 'Menu') {
            img = focused
              ? <Image style={{ width: 25.27, height: 18.96 }} source={require('../../Images/menu1.png')} />
              : <Image style={{ width: 25.27, height: 18.96 }} source={require('../../Images/menu.png')} />;

          }

          // You can return any component that you like here!
          // return <Ionicons name={iconName} size={size} color={color} />;
          return img;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#7030A9',
        inactiveTintColor: '#D9E4ED',
      }}
    >
      <Stack.Screen name="messages" component={messages} options={{ title: 'messages' }} />
      <Stack.Screen name="notification" component={notification} options={{ title: 'notification' }} />
      <Stack.Screen name="Mainactivity8" component={Mainactivity8} options={{ title: '' }} />
      <Stack.Screen name="settings" component={settings} options={{ title: 'Settings' }} />
      <Stack.Screen name="Menu" component={Menu} options={{ title: 'Menu' }} />
    </Tab.Navigator>
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='splashScreen'
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="splashScreen" component={splashScreen} options={{ title: 'splash Screen' }} />
        <Stack.Screen name="Introduction" component={Introduction} options={{ title: 'Introduction Screen' }} />
        <Stack.Screen name="signUp" component={signUp} options={{ title: 'signUp Screen' }} />
        <Stack.Screen name="signIn" component={signIn} options={{ title: 'signIn Screen' }} />
        <Stack.Screen name="varifyCode" component={varifyCode} options={{ title: 'varifyCode Screen' }} />
        <Stack.Screen name="termsAndConditions" component={termsAndConditions} options={{ title: 'termsAndConditions Screen' }} />
        <Stack.Screen name="successFul" component={successFul} options={{ title: 'successFul Screen' }} />
        <Stack.Screen name="forgotPassword" component={forgotPassword} options={{ title: 'forgotPassword Screen' }} />
        <Stack.Screen name="ForgotpasswordNewPassword" component={ForgotpasswordNewPassword} options={{ title: 'ForgotpasswordNewPassword Screen' }} />
        <Stack.Screen name="tabApp" component={tabApp} />
        <Stack.Screen name="Mainactivity10" component={Mainactivity10} options={{ title: 'Mainactivity10' }} />
        <Stack.Screen name="popularTips" component={popularTips} options={{ title: 'popularTips Screen' }} />
        <Stack.Screen name="popularTipsDetails" component={popularTipsDetails} options={{ title: 'popularTipsDetails Screen' }} />
        <Stack.Screen name="editProfile" component={editProfile} options={{ title: 'editProfile' }} />
        <Stack.Screen name="support" component={support} options={{ title: 'support' }} />
        <Stack.Screen name="aboutUs" component={aboutUs} options={{ title: 'aboutUs' }} />
        <Stack.Screen name="RequestNewService" component={RequestNewService} options={{ title: 'RequestNewService' }} />
        <Stack.Screen name="Myrequests" component={Myrequests} options={{ title: 'Myrequests' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};