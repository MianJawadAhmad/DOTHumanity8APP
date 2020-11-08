import React, { useEffect, useState } from 'react'
import { Text, View, Image, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native'
import { Container, Content, Button, Item, Input, Header, Card, CardItem, Thumbnail, Left, Body, Right,Form,Picker } from 'native-base'

const popularTipsDetails = (props) => {
    const { navigation } = props


    return (
        <Container style={{ backgroundColor: '#F6F6F6' }}>
            <Header style={{  backgroundColor: '#F6F6F6' }}>
                <Left>
                <TouchableOpacity style={{ width: 14, height: 14, marginLeft: 20 }}>
                        <Image style={{ width: 12.97, height: 12.97 }} source={require('../Images/backIcon.png')} />
                    </TouchableOpacity>
                </Left>
                <Body style={{alignItems:'center'}}>
                    <Text style={{ fontSize: 22 }}>Tips </Text>
                </Body>
                <Right/>
            </Header>
            <Content contentContainerStyle={{ flex:1, alignItems: 'center' }} >

            {/* <Form style={{borderWidthTop:2, borderTopColor:'black'}}>
            <Item picker style={{borderWidthTop:2, borderTopColor:'black'}}>
              <Picker
              style={{borderWidthTop:2, borderTopColor:'black'}}
                mode="dropdown"
                // iosIcon={<Icon name="arrow-down" />}
                style={{ width: 180 }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                // selectedValue={this.state.selected2}
                // onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Wallet" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>
            </Item>
          </Form> */}


            <Card style={{ width: 369, backgroundColor: '#F2F4F7' ,marginTop:20}}>
                        <CardItem style={{ backgroundColor: '#F2F4F7' }}>
                            <Image source={require('../Images/vid.png')} style={{ height: 250, width: 369,flex:1}} />
                        </CardItem>
                        <CardItem style={{ backgroundColor: '#F2F4F7' }}>
                            <Left style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
    
                                <Text style={{ fontSize: 18 }}>AppAppAppAppApp </Text>
                                <Text style={{ fontSize: 14 }}>Published on Jun 16, 2018 </Text>
                            </Left>
                            <Right>
                                <Text style={{ fontSize: 14 }}>2 min </Text>
                                <Text style={{ fontSize: 14 }}>2,401 views </Text>
                            </Right>
                        </CardItem>
                    </Card>
                    <View style={{margin:28.49}}>
                    <Text style={{fontSize:17}}>Transcription </Text>
                    <Text style={{fontSize:17,color:'#1585D8'}}>____________</Text>
                    <Text style={{fontSize:16,marginTop:20}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor sed do eiusmod tempor incididunt ut ero labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor sed do eiusmod tempor incididunt ut ero labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor   </Text>
                    </View>

            </Content>
        </Container>

    )
}



export default popularTipsDetails;