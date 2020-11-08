import React, { useEffect } from 'react'
import { Text, View, Image, ActivityIndicator,TouchableOpacity } from 'react-native'
import { Container, Content, Button, Item, Input,Header,Left,Right,Body } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
 
const forgotPassword = (props) => {
    const { navigation } = props
    return (
        <Container style={{ backgroundColor: '#F6F6F6' }}>
                        <Header style={{ borderBottomColor: '#F6F6F6', backgroundColor: '#F6F6F6' }}>
                <Left>
                    <TouchableOpacity style={{ width: 14, height: 14, marginLeft: 20 }} onPress={()=>navigation.navigate('signIn')}>
                        <Image style={{ width: 12.97, height: 12.97 }} source={require('../Images/backIcon.png')} />
                    </TouchableOpacity>
                </Left>
                <Body />
                <Right />
            </Header>
            <Content>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: 238.02, height: 271.22 }} source={require('../Images/img3.png')} />
                    <Text style={{ fontSize: 20, marginTop: 40,color:'#454F63' }}>Enter your email address. </Text>
                </View>
                <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10,alignItems:'center' }}>
                    <Item regular style={{ marginTop: 30, height: 41.03, borderRadius: 5, backgroundColor: '#FFFFFF',width:327.75 }}>
                        <View style={{ width: 40.03, height: 41.03, borderWidth: 1, borderColor: '#DFE3E9', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F2F4F7' }}>
                            <Image style={{ width: 20.89, height: 16.17 }} source={require('../Images/email.png')} />
                        </View>
                        <Input placeholder='Email address' />
                    </Item>
                    <TouchableOpacity style={{width:184,height:41,backgroundColor:'#8D7EE2',justifyContent:'center',alignItems:'center',alignSelf:'center',marginTop:35,borderRadius:5}} onPress={()=>navigation.navigate('ForgotpasswordNewPassword')}>
                    <LinearGradient colors={['#7C6CD3', '#513FAC', '#4A37A5']} style={{flex: 1,height:'100%',width:'100%', alignItems:'center',justifyContent:'center',borderRadius:5}}>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'#FFFFFF'}}>
                        Continue 
                        </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Content>
        </Container>

    )
}

export default forgotPassword;