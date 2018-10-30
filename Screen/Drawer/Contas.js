import React, { Component } from 'react';
import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import { Container, Left, Body, Title } from 'native-base';

import Navbar from '../../Component/Navbar'
import IconMenu from '../../Component/IconMenu'

const { width, height } = Dimensions.get('window')

let Lefts = props => (
    <Left style={{ flex: 1, }}>
        <IconMenu drawerNavigation={props.drawerNavigation} />
    </Left>
);

let body = (
    <Body style={{ alignItems: 'center' }}>
        <Title style={{ fontSize: 30 }}>Contas</Title>
    </Body>
)

class Contas extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: <Navbar
            left={<Lefts drawerNavigation={navigation} />}
            body={body}
        />,
    })

    render() {


        return (
            <Container>
                <StatusBar hidden={true} />
            </Container>
        );
    }
}

const styles = StyleSheet.create({

})

export default Contas;