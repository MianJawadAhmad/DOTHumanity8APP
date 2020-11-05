import React, { useEffect } from 'react'
import { Text, View, Image, ActivityIndicator, TouchableOpacity,ImageBackground } from 'react-native'
import { Container, Content, Button, Item, Input, Header, Left, Body, Right,Label } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';

const successFul = (props) => {
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
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{flexDirection:'row'}}>
                    <Image style={{ width: 39.83, height: 39.83 }} source={require('../Images/check.png')} />
                    <Text style={{ fontSize: 30, color: '#000000',alignSelf:'center',marginLeft:10 }}>Successful!  </Text>
                    </View>

                    <Text style={{ fontSize: 18, margin: 25 }}>Thanks for being part of our family. </Text>
                </View>
                <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10,alignItems:'center' }}>
                    <TouchableOpacity style={{ width: 184, height: 41, backgroundColor: '#8D7EE2', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 25, borderRadius: 5 }}>
                        <LinearGradient colors={['#7C6CD3', '#513FAC', '#4A37A5']} style={{ flex: 1, height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}>
                            Continue 
                        </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Content>
        </Container>

    )
}

export default successFul;