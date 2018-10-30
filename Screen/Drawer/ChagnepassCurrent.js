import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    Dimensions,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
    Text,
    Alert
} from 'react-native';
import { Container, Body, Left, Title, Icon } from 'native-base';

import Navbar from '../../Component/Navbar'

const { width, height } = Dimensions.get('window')

class ChagnepassCurrent extends Component {
    // static navigationOptions = ({ navigation }) => ({
    //     header: <Navbar
    //         left={<Lefts drawerNavigation={navigation} />}
    //         body={body}
    //     />,

    // })

    constructor(props) {
        super(props),
            this.state = {
                currentpass: '',
                newpassword: ''
            }
    }

    onLogin = () => {

        Alert.alert(
            'Message',
            'Your pass is chagne success!!!',
            [
                { text: 'OK', onPress: () => this.props.navigation.navigate('Login') },
            ],
            { cancelable: false }
        )
    }

    render() {

        let left = (
            <Left style={{ flex: 1, }}>
                <Icon name={'ios-arrow-round-back'} />
            </Left>
        );

        let body = (
            <Body style={{ alignItems: 'center' }}>
                <Title style={{ fontSize: 30 }}>Chagne pass</Title>
            </Body>
        )
        return (
            <Container>
                <ImageBackground style={{
                    width: width,
                    height: height,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                    source={require('../../HinhAnh/BackGound/login3.jpg')}
                >
                    <Navbar left={left} body={body} />

                    <View style={{
                        width: 190,
                        height: 190,
                        borderRadius: 160,
                        top: -90,
                    }}>
                        <Image style={{
                            width: 190,
                            height: 190,
                            borderRadius: 160,
                        }} source={require('../../HinhAnh/Loading/5.jpg')} />
                    </View>

                    <View style={styles.Form}>

                        <TextInput style={styles.textinput}
                            returnKeyLabel='next'
                            placeholder='Current password'
                            secureTextEntry={true}
                            placeholderTextColor='#000000'
                            underlineColorAndroid='#000000'
                            autoCorrect={false}
                            autoCapitalize='none'
                            value={this.state.currentpass}
                            onChangeText={
                                (currentpass) => { this.setState({ currentpass }) }
                            }>
                        </TextInput>

                        <TextInput style={styles.textinput}
                            returnKeyLabel='go'
                            placeholder='New password'
                            secureTextEntry={true}
                            placeholderTextColor='#000000'
                            underlineColorAndroid='#000000'
                            autoCorrect={false}
                            autoCapitalize='none'
                            value={this.state.newpassword}
                            onChangeText={
                                (newpassword) => { this.setState({ newpassword }) }
                            }>
                        </TextInput>

                    </View>

                    <TouchableOpacity style={styles.Button} onPress={this.onLogin}>
                        <Text style={styles.ButtonText}>CHAGNE PASS</Text>
                    </TouchableOpacity>


                </ImageBackground>
            </Container >
        );
    }
}

const styles = StyleSheet.create({

    Form: {
        justifyContent: 'space-around',
        alignItems: 'center',
        width: width - 40,
        height: 120
    },

    textinput: {
        width: width - 40,
        fontSize: 25,
        textAlign: 'center'
    },

    Button: {
        width: 180,
        height: 50,
        backgroundColor: 'red',
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
    },

    ButtonText: {
        fontSize: 23,
        color: '#E4D9D9',
    },

})

export default ChagnepassCurrent;