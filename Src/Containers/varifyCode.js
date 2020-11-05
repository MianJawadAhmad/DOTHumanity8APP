import React, { useEffect } from 'react'
import { Text, View, Image, ActivityIndicator, TouchableOpacity,ImageBackground } from 'react-native'
import { Container, Content, Button, Item, Input, Header, Left, Body, Right,Label } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';

const varifyCode = (props) => {
    const { navigation } = props
    return (
        <Container style={{ backgroundColor: '#F6F6F6' }}>
            <Header style={{ borderBottomColor: '#F6F6F6', backgroundColor: '#F6F6F6' }}>
                <Left>
                    <TouchableOpacity style={{ width: 14, height: 14, marginLeft: 20 }}>
                        <Image style={{ width: 12.97, height: 12.97 }} source={require('../Images/backIcon.png')} />
                    </TouchableOpacity>
                </Left>
                <Body />
                <Right />
            </Header>
            <Content>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <ImageBackground style={{ width: 232.66, height: 233.33, marginTop: 10,alignItems:'center',justifyContent:'center' }} source={require('../Images/loding.png')}>
                        <Text style={{fontSize:60,fontWeight:'bold',color:'#FFFFFF'}}>
                            2:59
                        </Text>
                    </ImageBackground>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 51 }}>
                    <Text style={{ fontSize: 20, color: '#000000' }}>Your privacy is important to us. </Text>
                    <Text style={{ fontSize: 16, margin: 25 }}>We have sent a verification code to your email address. Enter the verification code below. </Text>
                </View>
                <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10,alignItems:'center' }}>
                    <Item  stackedLabel style={{height:52,borderTopWidth:2,borderLeftWidth:2,borderRightWidth:2,borderBottomWidth:2,borderColor:'#3B86FF',borderRadius:5,width:281,backgroundColor:'#FFFFFF'}}>
                        <Label style={{color:'#1585D8',marginLeft:5}}>Verification Code</Label>
                        <Input />
                    </Item>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 25 }}>
                        <Text style={{ fontSize: 18, color: '#1585D8' }}>
                            Send Code Again
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 184, height: 41, backgroundColor: '#8D7EE2', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 25, borderRadius: 5 }}>
                        <LinearGradient colors={['#7C6CD3', '#513FAC', '#4A37A5']} style={{ flex: 1, height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>
                                Verify
                        </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Content>
        </Container>

    )
}

export default varifyCode;