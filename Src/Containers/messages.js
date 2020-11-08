import React, { useEffect, useState } from 'react'
import { Text, View, Image, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native'
import { Container, Content, Button, Item, Input, Header, Card, CardItem, Thumbnail, Left, Body, Right } from 'native-base'

const messages = (props) => {
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
                <Right/>
            </Header>
            <Content contentContainerStyle={{ flex:1, alignItems: 'center',justifyContent:'center' }} >
                <Text style={{fontSize:30}}>
                     Google 
                </Text>
            </Content>
        </Container>

    )
}



export default messages;