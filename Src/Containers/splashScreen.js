import React, { useEffect } from 'react'
import { Text, View, Image, ActivityIndicator } from 'react-native'
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

const splashScreen = (props) => {
    const { navigation } = props
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         navigation.navigate('SignInScreen')
    //       },2000)
    // })
    return (

        <View style={{ flex: 1, alignItems: 'center',backgroundColor:'#F6F6F6' }}>
            <View style={{flex:1}}>
            <Image source={require('../Images/splash.png')} style={{ width: 149.27, height: 142.67, marginTop: 120.29 }} />
            </View>
            <View  style={{flex:1,width:91.86,height:91.85,marginTop:119,alignItems:'center'}}>
                <ActivityIndicator size="large" color='blue' />
                <Text  style={{fontSize:20}}>Loading</Text>
                </View>
            <View style={{flex:1,justifyContent:'flex-end'}}>
            <Text style={{fontSize:15,margin:30}}>Copyright @ 2014-2020 DDDDDDDDDDD Pty Ltd.
All right reserved. </Text>
</View>
        </View>

    )
}

export default splashScreen;