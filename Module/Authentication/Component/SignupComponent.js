import React, { Component } from 'react';
import {
    View,
    ImageBackground,
    StyleSheet,
    Dimensions,
    TouchableWithoutFeedback,
    Keyboard,
    Text,
    TextInput,
    TouchableOpacity,
    StatusBar,
    Alert,
} from 'react-native';

import { EMAIL, PASSWORD } from '../../../Component/regexs';
import firebase from 'react-native-firebase';

const { width, height } = Dimensions.get('window')

class SignupComponent extends Component {

    constructor(props) {
        super(props),
            this.state = {
                email: '',
                password: '',
                emailvalidated: true,
                passwordvalidated: true,
            }
    }

    validate(type, value) {
        if (type == 'email') {
            this.setState({ email: value })
            if (value == '' || EMAIL.test(value)) {
                this.setState({ emailvalidated: true })
            } else {
                this.setState({ emailvalidated: false })
            }
        } else if (type == 'password') {
            this.setState({ password: value })
            if (value == '' || PASSWORD.test(value)) {
                this.setState({ passwordvalidated: true })
            } else {
                this.setState({ passwordvalidated: false })
            }
        }
    }

    // onSignup = () => {
    //     firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    //         .then(() => {
    //             alert('Đăng kí thành công!!!')
    //         },
    //             (error) => {
    //                 Alert.alert(error.message)
    //             }
    //         )

    // }

    onSignup = () => {
        if (
            this.state.emailvalidated &&
            this.state.passwordvalidated &&
            this.state.email != '' &&
            this.state.password != '') {
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => {
                    alert('Register success!!!')
                })
                .catch((e) => alert(e))

        } else {
            if (this.state.email == '' && this.state.password == '') {
                Alert.alert(
                    'Register account',
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

    moveLogin = () => {
        this.props.navigation.navigate('Login')
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
                            // <TextInput style={styles.textinput}
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

                        <TextInput style={[styles.textinput, !this.state.passwordvalidated]}
                            //  <TextInput style={styles.textinput} 
                            returnKeyLabel='go'
                            placeholder='Password'
                            secureTextEntry={true}
                            placeholderTextColor='#000000'
                            underlineColorAndroid='#000000'
                            autoCorrect={false}
                            autoCapitalize='none'
                            value={this.state.password}
                            onChangeText={
                                (password) => { this.validate('password', password) }
                            } />
                        {/* onChangeText={
                                (password) => { this.setState({ password }) }
                            } /> */}

                        <TouchableOpacity style={styles.Button} onPress={this.onSignup}>
                            <Text style={styles.ButtonText}>SIGN UP</Text>
                        </TouchableOpacity>

                        <Text style={styles.login}
                            onPress={this.moveLogin}
                        >Already have an account? Login</Text>

                    </View>
                </TouchableWithoutFeedback>

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
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textinput: {
        width: width - 40,
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 5,
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

    login: {
        color: '#000000',
        position: 'absolute',
        bottom: 30,
        fontSize: 15,
    }

})
export default SignupComponent;