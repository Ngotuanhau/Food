import React, { Component } from 'react';
import { View, } from 'react-native';
import { Icon, Header, Left, Body } from 'native-base'

class header extends Component {

    render() {
        return (
            <Header style={{ backgroundColor: '#7F0000' }} >
                {this.props.left ? this.props.left : <Left style={{ flex: 1 }} />}
                {this.props.body ? this.props.body : <Body />}
            </Header>
        );
    }
}

export default header;
