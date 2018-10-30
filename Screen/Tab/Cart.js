import React, { Component } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Container, View, Title, Body } from 'native-base';

import Navbar from '../../Component/Navbar'
import IconMenu from '../../Component/IconMenu'

class Cart extends Component {

    render() {
        let body = (
            <Body style={{ flex: 2 }}>
                <Title style={{
                    color: '#ffffff',
                    width: 200,
                    fontSize: 40
                }}>Cart</Title>
            </Body>
        )

        return (
            <Container>
                <View style={{ flex: 1, }}>
                    <Navbar body={body} />
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({

})

export default Cart;