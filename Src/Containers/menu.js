import React, { useEffect, useState } from 'react'
import {  Image, ActivityIndicator, TouchableOpacity, StyleSheet,Modal } from 'react-native'
import { Container, Header,View, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
const Menu = (props) => {
    const { navigation } = props
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Container style={{ backgroundColor: '#F6F6F6' }}>
            <Content style={{ marginLeft: 41.59 }} style={{backgroundColor: '#F1EFFC' }}>
            <ListItem noBorder style={{flexDirection:'column',alignItems:'flex-start'}}>
                <Image style={{ width: 50.77, height: 50.15, marginTop: 32 }} source={require('../Images/avatar.png')} />
                <Text style={{ fontSize: 24, marginTop: 22,alignSelf:'flex-start' }}>John Citizen</Text>
                </ListItem>
                <ListItem icon noBorder style={{ marginTop: 32 }}>
                    <Left>
                        <Button transparent >
                            <Image style={{ width: 20.18, height: 22.42 }} source={require('../Images/homeicon.png')} />
                        </Button>
                    </Left>
                    <Body>
                        <Text>Home</Text>
                    </Body>
                    <Right>
                        {/* <Switch value={false} /> */}
                    </Right>
                </ListItem>
                <ListItem icon noBorder style={{marginTop:20}} onPress={()=>navigation.navigate('editProfile')}>
                    <Left>
                        <Button transparent>
                            <Image style={{ width: 20.18, height: 22.7 }} source={require('../Images/epro.png')} />
                        </Button>
                    </Left>
                    <Body>
                        <Text>Edit profile</Text>
                    </Body>
                    <Right>
                        {/* <Text>GeekyAnts</Text>
              <Icon active name="arrow-forward" /> */}
                    </Right>
                </ListItem>

                <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>

          <View style={styles.modalView}>
          <TouchableOpacity        style={{alignSelf:'flex-end',borderBottomColor:'#1548BE',borderBottomWidth:0.3}}           onPress={() => {
                            setModalVisible(!modalVisible);
                          }}>
                <Text style={{fontSize:14,color:'#1548BE'}}>
                    Close
                </Text>
            </TouchableOpacity>

                <Image  style={{width:183.09,height:136.44,margin:5}} source={require('../Images/conf.png')}/>
<View>
                <Text style={{fontSize:30,fontWeight:'bold',marginTop:10}}>Confirm? </Text>
                <Text style={{fontSize:16,marginTop:10}}>Are you sure you want to log out? </Text>
                </View>
            <TouchableOpacity style={{width:184,height:41,backgroundColor:'#8D7EE2',justifyContent:'center',alignItems:'center',alignSelf:'center',marginTop:25,borderRadius:5}} 
                         onPress={() => {
                            setModalVisible(!modalVisible);
                            navigation.navigate('signIn')
                          }}>
                    <LinearGradient colors={['#7C6CD3', '#513FAC', '#4A37A5']} style={{flex: 1,height:'100%',width:'100%', alignItems:'center',justifyContent:'center',borderRadius:5}}>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'#FFFFFF'}}>
                            Yes
                        </Text>
                        </LinearGradient>
                    </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>


                <ListItem icon noBorder style={{marginTop:20}} onPress={()=>navigation.navigate('support')}>
                    <Left>
                        <Button transparent>
                            <Image style={{ width: 24.48, height: 22.21 }} source={require('../Images/support.png')} />
                        </Button>
                    </Left>
                    <Body>
                        <Text>Support</Text>
                    </Body>
                    <Right>
                        {/* <Text>On</Text>
              <Icon active name="arrow-forward" /> */}
                    </Right>
                </ListItem>
                <ListItem icon noBorder  style={{marginTop:20}} >
                    <Left>
                        <Button transparent >
                            <Image style={{ width: 22.46, height: 22.46 }} source={require('../Images/setting.png')} />
                        </Button>
                    </Left>
                    <Body>
                        <Text>Settings</Text>
                    </Body>
                    <Right>
                        {/* <Text>On</Text>
              <Icon active name="arrow-forward" /> */}
                    </Right>
                </ListItem>

                    <TouchableOpacity>
                        <Text style={{alignSelf:'flex-start',marginTop:30,marginLeft:20}}>About Us</Text>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => {setModalVisible(true);}}>
                        <Text style={{alignSelf:'flex-start',marginTop:50,marginLeft:40, color:'#1677CB'}}>Log Out</Text>
                        </TouchableOpacity>
            </Content>
        </Container>

    )
}


var styles = StyleSheet.create({
centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
          width:358.28,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
});



export default Menu;