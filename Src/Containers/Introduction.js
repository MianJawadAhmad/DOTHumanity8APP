import React, { useEffect } from 'react'
import { Text, View, Image, ActivityIndicator,TouchableOpacity } from 'react-native'
//Native base is a liabrary use for components
import { Container, Content, Button } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
const Introduction = (props) => {
    //this line use for navigation
    const { navigation } = props
    return (
        <Container style={{ flex: 1, backgroundColor: '#F6F6F6' }}>
            <View style={{ flex: 1.5, backgroundColor: '#F6F6F6', alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ width: 299, height: 365.3 }} source={require('../Images/intro1.png')} />
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 60, color: '#1585D8' }}>.</Text>
                    <Text style={{ fontSize: 60, color: '#79B6E3' }}>.</Text>
                    <Text style={{ fontSize: 60, color: '#79B6E3' }}>.</Text>
                    <Text style={{ fontSize: 60, color: '#79B6E3' }}>.</Text>
                    <Text style={{ fontSize: 60, color: '#79B6E3' }}>.</Text>
                    <Text style={{ fontSize: 60, color: '#79B6E3' }}>.</Text>
                </View>

            </View>
            <View style={{ flex: 1, backgroundColor: '#FFFFFF', borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', marginLeft: 20, marginRight: 20 }}>
                    <Text style={{ fontSize: 26, fontWeight: 'bold' }}>
                        Looking Looking Looking
                        Looking Looking Looking
                        Looking Looking  Looking
                        Looking
                </Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row',margin:20 }}>
                    <Button transparent style={{ justifyContent: 'center', alignItems: 'center'}} onPress={()=>navigation.navigate('signUp')}>
                        <Text style={{fontSize:24}}>
                            Skip
                        </Text>
                    </Button>
                    <TouchableOpacity style={{ width: 116.05, height: 34.31, backgroundColor: '#8D7EE2', justifyContent: 'center', alignItems: 'center',borderRadius: 5, left:210}}>
                            <LinearGradient colors={['#FEFFFF', '#D7F1FA', '#B5E5F5']} style={{ flex: 1, height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                                <Text style={{ fontSize: 18, color: '#000000' }}>
                                Next
                        </Text>
                            </LinearGradient>
                </TouchableOpacity>
                </View>
            </View>
        </Container>

    )
}

export default Introduction;