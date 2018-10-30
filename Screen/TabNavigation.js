import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';

import { Icon } from 'native-base'

import Notification from './Tab/Notification';
import Cart from './Tab/Cart';
import HomeStack from './Tab/HomeStack';

const routeConfigs = {

    Home: {
        screen: HomeStack,
        navigationOptions: {
            tabBarIcon:
                <Icon name={'ios-home'} size={28} style={{ color: '#ffffff' }} />
        }
    },

    Notification: {
        screen: Notification,
        navigationOptions: {
            tabBarIcon:
                <Icon name={'ios-notifications'} size={28} style={{ color: '#ffffff' }} />
        }
    },

    Cart: {
        screen: Cart,
        navigationOptions: {
            tabBarIcon:
                <Icon name={'ios-cart'} size={28} style={{ color: '#ffffff' }} />
        }
    },

}

const bottomTabNavigatorConfig = {

    tabBarOptions: {
        activeBackgroundColor: '#7F0000',
        inactiveBackgroundColor: '#7F0000',
        showLabel: false
    }
}

export default class Tab extends React.Component {
    Tab = createBottomTabNavigator(routeConfigs, bottomTabNavigatorConfig);
    render = () => <this.Tab screenProps={{ drawerNavigation: this.props.navigation }} />
};

