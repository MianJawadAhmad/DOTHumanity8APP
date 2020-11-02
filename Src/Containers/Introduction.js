import React, { useEffect } from 'react'
import { Text, View, Image, ActivityIndicator } from 'react-native'
import { Container, Content, Button } from 'native-base'

const Introduction = (props) => {
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
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Button>
                        <Text>
                            Skip
                        </Text>
                    </Button>
                    <Button>
                        <Text>
                            Next
                        </Text>
                    </Button>
                </View>
            </View>
        </Container>

    )
}

export default Introduction;