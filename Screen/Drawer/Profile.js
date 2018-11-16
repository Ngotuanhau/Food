import React, { Component } from 'react';
import { StyleSheet, StatusBar, ImageBackground, Dimensions, View, Image, Text, TouchableOpacity } from 'react-native';
import { Container, Left, Title, Body, } from 'native-base';

import firebase from 'react-native-firebase'

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
        <Title style={{ fontSize: 30 }}>Profile</Title>
    </Body>
)

class Profile extends Component {

    state = { currentUser: null }

    componentDidMount() {
        const { currentUser } = firebase.auth()
        this.setState({ currentUser })
    }

    static navigationOptions = ({ navigation }) => ({
        header: <Navbar
            left={<Lefts drawerNavigation={navigation} />}
            body={body}
        />,
    })

    onCurrentpass = () => {
        this.props.navigation.navigate('ChagnepassCurrent')
    }

    render() {
        const { currentUser } = this.state
        return (
            <Container >
                <StatusBar hidden={true} />
                <ImageBackground style={{
                    width: width,
                    height: height,
                    justifyContent: 'space-around',
                    alignItems: 'center'
                }}
                    source={require('../../HinhAnh/BackGound/login3.jpg')}
                >

                    <View style={{
                        width: 190,
                        height: 190,
                        borderRadius: 160,

                    }}>
                        <Image style={{
                            width: 190,
                            height: 190,
                            borderRadius: 160,
                        }} source={require('../../HinhAnh/Loading/5.jpg')} />
                    </View>

                    <View style={styles.form}>
                        <Text style={styles.text}>Name</Text>
                        <Text style={styles.text}>Phone Number</Text>
                        <Text style={styles.text}>Address</Text>
                        <Text>
                            Hi {currentUser && currentUser.email}!
                        </Text>
                    </View>

                    <TouchableOpacity onPress={this.onCurrentpass}>
                        <Text style={styles.text}>Change password</Text>
                    </TouchableOpacity>

                </ImageBackground>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    form: {
        alignItems: 'center',
        height: 120,
        width: width - 40,
        justifyContent: 'space-around',

    },

    text: {
        fontSize: 25,
        color: '#000000'
    }
})

export default Profile;