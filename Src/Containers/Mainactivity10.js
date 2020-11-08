import React, { useEffect, useState } from 'react'
import { Text, View, Image, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native'
import { Container, Content, Button, Item, Input, Header, Card, CardItem, Thumbnail, Left, Body, Right } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';


var items = [
    {
        id: 1,
        title: 'Select 1 ',
    },
    {
        id: 2,
        title: 'Select 2 ',
    },
    {
        id: 3,
        title: 'Select 3 ',
    },
    {
        id: 4,
        title: 'Select 4 ',
    },
    {
        id: 5,
        title: 'Select 5 ',
    }
];

const SLIDER_1_FIRST_ITEM = 0;

const Mainactivity10 = (props) => {
    const { navigation } = props
    const [loading, setLoading] = useState(SLIDER_1_FIRST_ITEM);


    {/* My services  */ }
    _renderItem = ({ item, index }) => {
        return (
            <View style={styles.carouselSt}>
                <View style={{ justifyContent: 'center' }}>
                    <Image style={{ width: 130.28, height: 136.35 }} source={require('../Images/OBJECTS.png')} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 21, color: '#032F3E', textAlign: 'center' }}>Specialist Support {"\n"} Coordinator </Text>
                    <TouchableOpacity style={{ width: 201, height: 37, backgroundColor: '#F2F4F7', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 5, borderRadius: 5, borderColor: '#CED0DA', borderWidth: 0.7 }}>
                        <Text style={{ fontSize: 16, color: '#354052' }}>
                            Request New Service
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 201, height: 37, backgroundColor: '#F2F4F7', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 15, borderRadius: 5, borderColor: '#CED0DA', borderWidth: 0.7 }}>
                        <Text style={{ fontSize: 16, color: '#354052' }}>
                            My requests
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    {/* Popular tips   */ }
    _renderItemPopular = ({ item, index }) => {
        return (
            <View style={styles.carouselSttip}>
                <Card style={{ width: 354, backgroundColor: '#F2F4F7' }}>
                    <CardItem style={{ backgroundColor: '#F2F4F7' }}>
                        <Image source={require('../Images/Layer.png')} style={{ height: 146.53, width: 353.89, flex: 1 }} />
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
            </View>
        );
    }


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
            <Content contentContainerStyle={{ alignItems: 'center' }} >
                <View style={{marginTop:10}}/>
                <Content style={{ width: 377, backgroundColor: '#F1EFFC', borderTopRightRadius: 50 }} >
                    {/* My services  */}
                    <Text style={{ fontSize: 22, color: '#032F3E', margin: 10 }}>My services </Text>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={items}
                        renderItem={this._renderItem}
                        sliderWidth={369}
                        itemWidth={359}
                        onSnapToItem={(index) => setLoading(index)}
                    />
                    <Pagination
                        dotsLength={items.length}
                        dotColor={'#6338A1'}
                        inactiveDotColor={'#6338A1'}
                        activeDotIndex={loading}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                        carouselRef={this._slider1Ref}
                        tap
                        pableDots={!!this._slider1Ref}
                    />

                    <Text style={{ fontSize: 22, color: '#032F3E', margin: 10 }}>My requests  </Text>
                    <View style={{alignItems:'center'}}>
                        <Card style={{ width: 340, backgroundColor: '#F2F4F7',alignItems:'center' }}>
                            <CardItem style={{ backgroundColor: '#F2F4F7',alignItems:'center' }}>
                                <Body>
                                    <Text style={{ fontSize: 20}}>
                                    You do not have an active request.
                                </Text>
                                </Body>
                            </CardItem>
                            <CardItem style={{ backgroundColor: '#F2F4F7',alignItems:'center'}}>
                                <TouchableOpacity style={{ width: 197, height: 37, backgroundColor: '#8D7EE2', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderRadius: 5 }}>
                                    <LinearGradient colors={['#7C6CD3', '#513FAC', '#4A37A5']} style={{ flex: 1, height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                                        <Text style={{ fontSize: 16, color: '#FFFFFF' }}>
                                            Request New Service
                                        </Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </CardItem>
                        </Card>
                    </View>

                    <Text style={{ fontSize: 22, color: '#032F3E', margin: 10 }}>My Meeting/Session  </Text>
                    <View style={{alignItems:'center'}}>
                        <Card style={{ width: 340, backgroundColor: '#F2F4F7',alignItems:'center' }}>
                            <CardItem style={{ backgroundColor: '#F2F4F7',alignItems:'center' }}>
                                <Body>
                                    <Text style={{ fontSize: 20}}>
                                    You do not have meeting or session.
                                </Text>
                                </Body>
                            </CardItem>
                            <CardItem style={{ backgroundColor: '#F2F4F7',alignItems:'center'}}>
                                <TouchableOpacity style={{ width: 248, height: 37, backgroundColor: '#8D7EE2', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderRadius: 5 }}>
                                    <LinearGradient colors={['#7C6CD3', '#513FAC', '#4A37A5']} style={{ flex: 1, height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                                        <Text style={{ fontSize: 16, color: '#FFFFFF' }}>
                                        Request New Meeting/Session
                                        </Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </CardItem>
                        </Card>
                    </View>

                    <Text style={{ fontSize: 22, color: '#032F3E', margin: 10 }}>My Questions   </Text>
                    <View style={{alignItems:'center'}}>
                        <Card style={{ width: 340, backgroundColor: '#F2F4F7',alignItems:'center' }}>
                            <CardItem style={{ backgroundColor: '#F2F4F7',alignItems:'center' }}>
                                <Body>
                                    <Text style={{ fontSize: 20}}>
                                    You do not have an active question.
                                </Text>
                                </Body>
                            </CardItem>
                            <CardItem style={{ backgroundColor: '#F2F4F7',alignItems:'center'}}>
                                <TouchableOpacity style={{ width: 172, height: 37, backgroundColor: '#8D7EE2', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', borderRadius: 5 }}>
                                    <LinearGradient colors={['#7C6CD3', '#513FAC', '#4A37A5']} style={{ flex: 1, height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                                        <Text style={{ fontSize: 16, color: '#FFFFFF' }}>
                                        Ask a question
                                        </Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </CardItem>
                        </Card>
                    </View>


                     {/* Popular tips */}
                     <View style={{ flexDirection: 'row' }}>
                        <Left>
                            <Text style={{ fontSize: 22, color: '#032F3E', margin: 10 }}>My services </Text>
                        </Left>
                        <Right>
                            <TouchableOpacity style={{ margin: 10 }}>
                                <Text style={{ fontSize: 18, color: '#1585D8' }}>
                                    See all
                        </Text>
                            </TouchableOpacity>
                        </Right>
                    </View>

                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={items}
                        renderItem={this._renderItemPopular}
                        sliderWidth={369}
                        itemWidth={359}
                        onSnapToItem={(index) => setLoading(index)}
                    />
                    <Pagination
                        dotsLength={items.length}
                        dotColor={'#6338A1'}
                        inactiveDotColor={'#6338A1'}
                        activeDotIndex={loading}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                        carouselRef={this._slider1Ref}
                        tappableDots={!!this._slider1Ref}
                    />



                </Content>
            </Content>
        </Container>

    )
}

var styles = StyleSheet.create({
    carouselSt: {
        width: 340,
        height: 181,
        backgroundColor: '#F2F4F7',
        marginLeft: 10, borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'row'
    },
    carouselStreq: {
        width: 340,
        height: 274,
        backgroundColor: '#F2F4F7',
        marginLeft: 10,
        borderRadius: 20,

        flexDirection: 'row'
    },
    carouselStqus: {
        width: 340,
        height: 214,
        backgroundColor: '#F2F4F7',
        marginLeft: 10,
        borderRadius: 20,

        flexDirection: 'row'
    },
    carouselStmet: {
        width: 340,
        height: 359.63,
        backgroundColor: '#F2F4F7',
        marginLeft: 10,
        borderRadius: 20,

        flexDirection: 'row'
    },
    carouselSttip: {
        width: 354,
        height: 245.36,
        backgroundColor: '#F2F4F7',
        marginLeft: 10,
        borderRadius: 20,

        flexDirection: 'row'
    },
});


export default Mainactivity10;