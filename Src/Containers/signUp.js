import React, { useEffect } from 'react'
import { Text, View, Image, ActivityIndicator,TouchableOpacity } from 'react-native'
import { Container, Content, Button, Item, Input } from 'native-base'
//this is libabry use for gradient colors
import LinearGradient from 'react-native-linear-gradient';
 
const signUp = (props) => {
    const { navigation } = props
    return (
        <Container style={{ backgroundColor: '#F6F6F6' }}>
            <Content>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 51 }}>
                    <Text style={{ fontSize: 26, fontWeight: 'bold' }}>We like </Text>
                    <Text style={{ fontSize: 16, marginTop: 20 }}>to have you as a new member of our family </Text>
                    <Image style={{ width: 325.68, height: 164.35, marginTop: 10 }} source={require('../Images/singupimg.png')} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ margin: 10 }}>
                        <Image source={require('../Images/signupbtn.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: 10 }} onPress={()=>navigation.navigate('signIn')}>
                        <Image source={require('../Images/signinbtn1.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                    <Item regular style={{ height: 41.03, borderRadius: 5, backgroundColor: '#FFFFFF' }}>
                        <View style={{ width: 40.03, height: 41.03, borderWidth: 1, borderColor: '#DFE3E9', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F2F4F7' }}>
                            <Image style={{ width: 18.19, height: 18.19 }} source={require('../Images/UserIcon.png')} />
                        </View>
                        <Input placeholder='First name' />
                    </Item>
                    <Item regular style={{ marginTop: 30, height: 41.03, borderRadius: 5, backgroundColor: '#FFFFFF' }}>
                        <View style={{ width: 40.03, height: 41.03, borderWidth: 1, borderColor: '#DFE3E9', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F2F4F7' }}>
                            <Image style={{ width: 18.19, height: 18.19 }} source={require('../Images/UserIcon.png')} />
                        </View>
                        <Input placeholder='Last name' />
                    </Item>
                    <Item regular style={{ marginTop: 30, height: 41.03, borderRadius: 5, backgroundColor: '#FFFFFF' }}>
                        <View style={{ width: 40.03, height: 41.03, borderWidth: 1, borderColor: '#DFE3E9', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F2F4F7' }}>
                            <Image style={{ width: 20.89, height: 16.17 }} source={require('../Images/email.png')} />
                        </View>
                        <Input placeholder='Email address' />
                    </Item>
                    <Item regular style={{ marginTop: 30, height: 41.03, borderRadius: 5, backgroundColor: '#FFFFFF' }}>
                        <View style={{ width: 40.03, height: 41.03, borderWidth: 1, borderColor: '#DFE3E9', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F2F4F7' }}>
                            <Image style={{ width: 14.63, height: 19.94 }} source={require('../Images/lock1.png')} />
                        </View>
                        <Input placeholder='Password' />
                    </Item>
                    <Item regular style={{ marginTop: 30, height: 41.03, borderRadius: 5, backgroundColor: '#FFFFFF' }}>
                        <View style={{ width: 40.03, height: 41.03, borderWidth: 1, borderColor: '#DFE3E9', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F2F4F7' }}>
                            <Image style={{ width: 14.63, height: 20.58 }} source={require('../Images/lock.png')} />
                        </View>
                        <Input placeholder='Confirm Password' />
                    </Item>
                    <TouchableOpacity style={{width:184,height:41,backgroundColor:'#8D7EE2',justifyContent:'center',alignItems:'center',alignSelf:'center',marginTop:25,borderRadius:5}}>
                    <LinearGradient colors={['#7C6CD3', '#513FAC', '#4A37A5']} style={{flex: 1,height:'100%',width:'100%', alignItems:'center',justifyContent:'center',borderRadius:5}}>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'#FFFFFF'}}>
                            Next
                        </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Content>
        </Container>

    )
}

export default signUp;