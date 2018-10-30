import React, { Component } from 'react';
import { Icon, Button } from 'native-base'

export default class IconMenu extends Component {
    render() {
        return (

            <Button style={{ backgroundColor: '#7F0000' }}
                onPress={() => {
                    const { toggleDrawer } = this.props.drawerNavigation;
                    toggleDrawer();
                }} >
                <Icon name="ios-menu" size={26} />
            </Button>

        );
    }
}

