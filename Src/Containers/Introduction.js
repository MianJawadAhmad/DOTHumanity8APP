import React, { useEffect, useState } from 'react'
import { Text, View, Image, ActivityIndicator,TouchableOpacity } from 'react-native'
//Native base is a liabrary use for components
import { Container, Content, Button } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Pagination } from 'react-native-snap-carousel';


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

const Introduction = (props) => {
    //this line use for navigation
    const { navigation } = props;
    const [loading, setLoading] = useState(SLIDER_1_FIRST_ITEM);

    return (
        <Container style={{ flex: 1, backgroundColor: '#F6F6F6' }}>
            <View style={{ flex: 1.5, backgroundColor: '#F6F6F6', alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ width: wp('70%'), height: hp('40%') }} source={require('../Images/intro1.png')} />
                <View style={{ flexDirection: 'row' }}>
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