import React, { useEffect } from 'react'
import { Text, View, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import { Container, Content, Button, Item, Input, Header, Left, Right, Body } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';

const ForgotpasswordNewPassword = (props) => {
    const { navigation } = props
    return (
        <Container style={{ backgroundColor: '#F6F6F6' }}>
            <Content>
                <View style={{ justifyContent: 'center', alignItems: 'center',marginTop:40 }}>
                    <Image style={{ width: 315.08, height: 235.35 }} source={require('../Images/img4.png')} />
                    <Text style={{ fontSize: 20, marginTop: 40, color: '#454F63' }}>Enter your new password.</Text>
                </View>
                <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10, alignItems: 'center' }}>
                <Item regular style={{ marginTop: 30, height: 41.03, borderRadius: 5, backgroundColor: '#FFFFFF',width:332.15  }}>
                        <View style={{ width: 40.03, height: 41.03, borderWidth: 1, borderColor: '#DFE3E9', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F2F4F7' }}>
                            <Image style={{ width: 14.63, height: 19.94 }} source={require('../Images/lock1.png')} />
                        </View>
                        <Input placeholder='Password' />
                    </Item>
                    <Item regular style={{ marginTop: 30, height: 41.03, borderRadius: 5, backgroundColor: '#FFFFFF',width:332.15 }}>
                        <View style={{ width: 40.03, height: 41.03, borderWidth: 1, borderColor: '#DFE3E9', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F2F4F7' }}>
                            <Image style={{ width: 14.63, height: 20.58 }} source={require('../Images/lock.png')} />
                        </View>
                        <Input placeholder='Confirm Password' />
                    </Item>
                    <TouchableOpacity style={{ width: 184, height: 41, backgroundColor: '#8D7EE2', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 40, borderRadius: 5 }}>
                        <LinearGradient colors={['#7C6CD3', '#513FAC', '#4A37A5']} style={{ flex: 1, height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>
                            Submit
                        </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Content>
        </Container>

    )
}

export default ForgotpasswordNewPassword;