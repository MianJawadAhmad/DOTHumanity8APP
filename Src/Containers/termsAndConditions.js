import React, { useEffect,useState } from 'react'
import { Text, View, Image, ActivityIndicator, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native'
import { Container, Content, Button, Item, Input, Header, Left, Body, Right, Label } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import SearchableDropdown from 'react-native-searchable-dropdown';


//this is data for dropdown search component
var items = [
    {
      id: 1,
      name: 'Select 1 ',
    },
    {
      id: 2,
      name: 'Select 2 ',
    },
    {
      id: 3,
      name: 'Select 3 ',
    },
    {
      id: 4,
      name: 'Select 4 ',
    },
    {
      id: 5,
      name: 'Select 5 ',
    }
  ];




const termsAndConditions = (props) => {
    //this is state value for dropdown search show and hide
    const [loading, setLoading] = useState('b');
    const { navigation } = props

//this function use for dropdown search show and hide
    const searchTure = () =>{
        if(loading == 'b'){
            setLoading('a')
        }else{
            setLoading('b')
        }
        
    }

//this is dropdowm search function
    const searchScroll = () =>{
        if(loading === 'a'){
          return(
              <SearchableDropdown
              multi={true}
              selectedItems={{
                  id: 7,
                  name: 'Go',
                },
                {
                  id: 8,
                  name: 'Swift',
                }}
              // onItemSelect={(item) => {
              //   const items = this.state.selectedItems;
              //   items.push(item)
              //   this.setState({ selectedItems: items });
              // }}
              containerStyle={{ padding: 5, marginLeft:34,
                marginRight:34, }}
              // onRemoveItem={(item, index) => {
              //   const items = this.state.selectedItems.filter((sitem) => sitem.id !== item.id);
              //   this.setState({ selectedItems: items });
              // }}
              itemStyle={{
                padding: 10,
                marginTop: 2,
                backgroundColor: '#ddd',
                borderColor: '#bbb',
                borderWidth: 1,
                borderRadius: 5,
              }}
              itemTextStyle={{ color: '#222' }}
              itemsContainerStyle={{ maxHeight: 140 }}
              items={items}
              defaultIndex={2}
              chip={true}
              resetValue={false}
              textInputProps={
                {
                  placeholder: "Search",
                  underlineColorAndroid: "transparent",
                  style: {
                      padding: 12,
                      borderWidth: 1,
                      borderColor: '#ccc',
                      borderRadius: 5,
                  },
                  onTextChange: text => alert(text)
                }
              }
              listProps={
                {
                  nestedScrollEnabled: true,
                }
              }
            />
            )
        }else{
            return(
                <View>
                </View>
            )
  
        }
        
    }



    return (
        <Container style={{ backgroundColor: '#F6F6F6' }}>
            <Header style={{ borderBottomColor: '#F6F6F6', backgroundColor: '#F6F6F6' }}>
                <Left>
                    <TouchableOpacity style={{ width: 14, height: 14, marginLeft: 20 }}>
                        <Image style={{ width: 12.97, height: 12.97 }} source={require('../Images/backIcon.png')} />
                    </TouchableOpacity>
                </Left>
                <Body />
                <Right>
                    <TouchableOpacity style={{ width: 14, height: 14, marginRight: 20 }} onPress={()=>searchTure()}>
                        <Image style={{ width: 19.34, height: 20.34 }} source={require('../Images/search.png')} />
                    </TouchableOpacity>
                </Right>
            </Header>
            <Content>
                <View style={{}}>
                    {searchScroll()}
                    <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 65.86 }}>Terms </Text>
                    <Text style={{ fontSize: 10, marginTop: 10, marginLeft: 65.86, fontStyle: 'italic' }}>Please read our terms and conditions</Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 40, marginTop: 30 }}>Who May Use the Services? </Text>
                    <Text style={{ fontSize: 14, marginTop: 10, marginLeft: 40, marginRight: 35 }}>When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us. </Text>
                    <View style={styles.column}>
                        <View style={styles.row}>
                            <View style={styles.bullet}>
                                <Text>{'\u2022' + " "}</Text>
                            </View>
                            <View style={styles.bulletText}>
                                <Text>
                                    <Text style={styles.boldText}>{"Step 1" + ": "}</Text>
                                    <Text style={styles.normalText}>You may use the Services only if you agree to form a binding contract with us and are not a person barred from receiving services under the laws of the applicable jurisdiction.</Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.column}>
                        <View style={styles.row}>
                            <View style={styles.bullet}>
                                <Text>{'\u2022' + " "}</Text>
                            </View>
                            <View style={styles.bulletText}>
                                <Text>
                                    <Text style={styles.boldText}>{"Step 2" + ": "}</Text>
                                    <Text style={styles.normalText}>Our Privacy Policy describes how we handle the information you provide to us when you use our Services.</Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 40, marginTop: 40 }}>Privacy</Text>
                    <Text style={{ fontSize: 14, marginTop: 20, marginLeft: 40, marginRight: 35 }}>When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us. When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us. </Text>

                    <TouchableOpacity style={{width:184,height:41,backgroundColor:'#8D7EE2',justifyContent:'center',alignItems:'center',alignSelf:'center',marginTop:40,borderRadius:5}}  onPress={()=>navigation.navigate('successFul')}>
                    <LinearGradient colors={['#7C6CD3', '#513FAC', '#4A37A5']} style={{flex: 1,height:'100%',width:'100%', alignItems:'center',justifyContent:'center',borderRadius:5}}>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'#FFFFFF'}}>
                        I agree
                        </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 14, marginTop: 40, marginLeft: 40, marginRight: 35 }}>By clicking I Agree, you indicate that you have read and understand our Privacy Policy and Terms of Use and represent that you are at least 18 years of age</Text>
                </View>
            </Content>
        </Container>

    )
}

var styles = StyleSheet.create({
    column: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 62,
        marginRight: 62,
        marginTop: 20
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        flex: 1
    },
    bullet: {
        width: 10
    },
    bulletText: {
        flex: 1
    },
    boldText: {
        fontWeight: 'bold'
    },
    normalText: {
        fontSize:14
    }
});

export default termsAndConditions;