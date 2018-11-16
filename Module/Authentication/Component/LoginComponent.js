import React, { Component } from 'react';
import {
    View,
    Dimensions,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Text,
    ImageBackground,
    TouchableWithoutFeedback,
    Keyboard,
    StatusBar,
    Alert
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import firebase from 'react-native-firebase';
import { EMAIL, PASSWORD } from '../../../Component/regexs'

const { height, width } = Dimensions.get('window')

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailvalidated: true,
            passwordvalidated: true
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            this.props.navigation.navigate(user ? 'Tab' : 'Login')
        })
    };

    validate(type, value) {
        if (type == 'email') {
            this.setState({ email: value })
            if (value == '' || EMAIL.test(value)) {
                this.setState({ emailvalidated: true })
            } else {
                this.setState({ emailvalidated: false })
            }
        }
        else if (type == 'password') {
            this.setState({ password: value })
            if (value == '' || PASSWORD.test(value)) {
                this.setState({ passwordvalidated: true })
            } else {
                this.setState({ passwordvalidated: false })
            }
        }
    }

    // onLogin = () => {
    //     firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    //         .then((user) =>
    //             this.props.navigation.navigate('Tab')
    //         )
    //         .catch((e) => alert(e)
    //         );
    // };

    onLogin = () => {
        if (
            this.state.emailvalidated &&
            this.state.passwordvalidated &&
            this.state.email != '' &&
            this.state.password != '') {
            firebase
                .auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => {
                    this.props.navigation.navigate('Tab')
                })
                .catch(function (error) {
                    Alert.alert(
                        'Login fail',
                        'email or password invalid',
                        [
                            {
                                text: 'OK', onPress: () => console.log('OK Pressed')
                            },
                        ],
                        { cancelable: false }
                    )
                });
        } else {
            if (this.state.email == '' && this.state.password == '') {
                Alert.alert(
                    'Login',
                    'Please enter email and password',
                    [
                        {
                            text: 'OK', onPress: () => console.log('OK Pressed')
                        },
                    ],
                    { cancelable: false }
                )
            }
        }
    }

    onSignup = () => {
        this.props.navigation.navigate('Signup')
    }

    onForgot = () => {
        this.props.navigation.navigate('Forgotpass')
    }

    render() {

        return (

            <ImageBackground style={styles.container}
                source={(require('../../../HinhAnh/BackGound/login3.jpg'))}>
                <StatusBar hidden={true} />

                <View style={styles.Logo}>
                    <Text style={{
                        fontSize: 100,
                        color: '#000000',
                        fontStyle: "italic",
                    }}> Food</Text>
                </View>

                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <View style={styles.Content}>

                        <TextInput style={[styles.textinput, !this.state.emailvalidated]}
                            keyboardType='email-address'
                            returnKeyLabel='next'
                            placeholder='Email'
                            placeholderTextColor='#000000'
                            autoCorrect={false}
                            autoCapitalize='none'
                            underlineColorAndroid='#000000'
                            value={this.state.email}
                            // onChangeText={
                            //     (email) => { this.setState({ email }) }
                            // } 
                            onChangeText={
                                (email) => { this.validate('email', email) }
                            }
                        />


                        {/* <TextInput style={styles.textinput}
                            returnKeyLabel='next'
                            placeholder='User name'
                            placeholderTextColor='#000000'
                            autoCorrect={false}
                            autoCapitalize='none'
                            underlineColorAndroid='#000000'
                            value={this.state.name}
                            onChangeText={
                                (name) => { this.setState({ name }) }
                            } /> */}

                        <TextInput style={[styles.textinput, !this.state.passwordvalidated]}
                            returnKeyLabel='go'
                            placeholder='Password'
                            secureTextEntry={true}
                            placeholderTextColor='#000000'
                            underlineColorAndroid='#000000'
                            autoCorrect={false}
                            autoCapitalize='none'
                            value={this.state.password}
                            // onChangeText={
                            //     (password) => { this.setState({ password }) }
                            // } 
                            onChangeText={
                                (password) => { this.validate('password', password) }
                            }
                        />

                        <Text onPress={this.onForgot}
                            style={{
                                color: '#000000',
                                fontSize: 18,
                                marginLeft: -190,
                                marginTop: 15,
                            }}> forgot your password
                        </Text>

                        <TouchableOpacity style={styles.Button} onPress={this.onLogin}>
                            <Text style={styles.ButtonText}>LOGIN</Text>
                        </TouchableOpacity>

                        <Text onPress={this.onSignup}
                            style={{
                                color: '#000000',
                                marginTop: 30,
                                fontSize: 20,
                            }}> Sign up
                        </Text>

                    </View>

                </TouchableWithoutFeedback>

                <View style={styles.iconbutton}>
                    <View style={styles.styelIcon}>
                        <Icon name="facebook" size={30} color="#000000" />
                    </View>

                    <View style={styles.styelIcon}>
                        <Icon name="google-plus" size={30} color="#000000" />
                    </View>

                    <View style={styles.styelIcon}>
                        <Icon name="twitter" size={30} color="#000000" />
                    </View>
                </View>

            </ImageBackground >

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    Logo: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 3,
    },

    Content: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },

    iconbutton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 60,
        justifyContent: 'space-around',
        flex: 2,
    },

    textinput: {
        width: width - 40,
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 5
    },

    Button: {
        width: 160,
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

    styelIcon: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        borderColor: '#000000',
        borderWidth: 2,
    }
})

export default LoginComponent;