import React, { Component } from 'react';
import { createDrawerNavigator, createStackNavigator, DrawerItems } from 'react-navigation'
import { View, SafeAreaView, Image, Text, ImageBackground } from 'react-native';
import { Icon, Button } from 'native-base'

import TabNavigation from '../Screen/TabNavigation'
import Profile from '../Screen/Drawer/Profile'
import Order from '../Screen/Drawer/Order'
import Contas from '../Screen/Drawer/Contas'
//import firebase from 'react-native-firebase';
//import LoginContainer from '../Module/Authentication/Component/LoginContainer';

const routeConfigs = {

    Tab: {
        screen: TabNavigation,
        navigationOptions: {
            title: 'Home',
            drawerIcon: <Icon name='ios-home' style={{ color: '#000000' }} />
        }
    },

    Profile: {
        screen: createStackNavigator({ screen: Profile }),
        navigationOptions: {
            title: 'Profile',
            drawerIcon: <Icon name='ios-person' style={{ color: '#000000' }} />
        }
    },

    Order: {
        screen: createStackNavigator({ screen: Order }),
        navigationOptions: {
            title: 'Order History',
            drawerIcon: <Icon name='ios-folder' style={{ color: '#000000' }} />
        }
    },

    Contas: {
        screen: createStackNavigator({ screen: Contas }),
        navigationOptions: {
            title: 'Contas',
            drawerIcon: <Icon name='ios-call' style={{ color: '#000000' }} />
        }
    },
}

const CustomDrawerContentComponent = (props) => (

    <SafeAreaView style={{
        flex: 1,
        //backgroundColor: '#ffffff'
    }}
        forceInset={{ top: 'always', horizontal: 'never' }}>
        <ImageBackground source={require('../HinhAnh/BackGound/login5.jpg')}
            style={{ flex: 1 }}
        >

            <View style={{
                height: 400,
                alignItems: 'center',
                justifyContent: 'center',
                //backgroundColor: 'green'
            }}>
                <Text style={{
                    fontSize: 100,
                    color: '#000000',
                    fontStyle: "italic",
                    bottom: 20,
                }}> Food
                </Text>

                <View style={{
                    width: 190,
                    height: 190,
                    borderRadius: 160,
                }}>
                    <Image style={{
                        width: 190,
                        height: 190,
                        borderRadius: 160,
                    }} source={require('../HinhAnh/Loading/5.jpg')} />
                </View>
            </View>

            <DrawerItems {...props} />

            <Button onPress={() => this.props.navigation.navigate('login')}
                style={{
                    backgroundColor: '#ffffff',
                    borderRadius: 18,
                    height: 45,
                    width: 100,
                    justifyContent: 'center',
                    bottom: -90,
                    left: 90
                }}>

                <Text style={{
                    fontSize: 20,
                    color: '#7F0000'
                }}>Logout</Text>
            </Button>

        </ImageBackground>

    </SafeAreaView >

);

const drawerNavigatorConfig = {
    drawerPosition: 'lelf',
    contentComponent: CustomDrawerContentComponent,

};

export default createDrawerNavigator(routeConfigs, drawerNavigatorConfig);
