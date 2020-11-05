import React, { useEffect } from 'react'
import { Text, View, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import { Container, Content, Button, Item, Input, Header, Left, Right, Body } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';

const Mainactivity8 = (props) => {
    const { navigation } = props
    return (
        <Container style={{ backgroundColor: '#F6F6F6' }}>
            <Header style={{ borderBottomColor: '#F6F6F6', backgroundColor: '#F6F6F6' }}>
                <Left>
                    <TouchableOpacity style={{ marginLeft: 20 }}>
                        <Image style={{ width: 45.21, height: 43.21 }} source={require('../Images/img5.png')} />
                    </TouchableOpacity>

                </Left>
                <Body>
                    <Text style={{ fontSize: 22 }}>My services </Text>
                </Body>
                <Right>
                    <TouchableOpacity style={{ marginLeft: 20 }}>
                        <Image style={{ width: 85, height: 32 }} source={require('../Images/img7.png')} />
                    </TouchableOpacity>
                </Right>
            </Header>
            <Content contentContainerStyle={{alignItems:'center'}} >
                <Content style={{width: 377,backgroundColor:'red',borderTopRightRadius:20}} >
                 <Text style={{fontSize:22}}>My services </Text>
                </Content>
            </Content>
        </Container>

    )
}

export default Mainactivity8;