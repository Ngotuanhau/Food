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
    TouchableOpacity
} from 'react-native';
//import firebase from 'react-native-firebase';

const { width, height } = Dimensions.get('window')

class SignupComponent extends Component {

    constructor(props) {
        super(props),
            this.state = {
                //name: '',
                email: '',
                // number: '',
                password: '',
            }

    }

    onLogin = () => {
        // firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        //     .then(() => this.props.navigation.navigate('Login'))
    }

    render() {
        return (

            <ImageBackground style={styles.container}
                source={(require('../../../HinhAnh/BackGound/login3.jpg'))}>

                <TouchableWithoutFeedback style={styles.container}
                    onPress={Keyboard.dismiss}>

                    <View style={styles.container}>
                        <Text style={{
                            fontSize: 100,
                            color: '#000000',
                            fontStyle: "italic",
                            top: -50
                        }}> Food</Text>

                        {/* <View style={styles.Form}>

                            <TextInput style={styles.textinput}
                                returnKeyLabel='next'
                                placeholder='User name'
                                placeholderTextColor='#000000'
                                autoCorrect={false}
                                autoCapitalize='none'
                                underlineColorAndroid='#000000'
                                value={this.state.name}
                                onChangeText={
                                    (name) => { this.setState({ name }) }
                                } />

                        </View> */}

                        <View style={styles.Form}>
                            <TextInput style={styles.textinput}
                                keyboardType='email-address'
                                returnKeyLabel='next'
                                placeholder='Email'
                                placeholderTextColor='#000000'
                                underlineColorAndroid='#000000'
                                autoCorrect={false}
                                autoCapitalize='none'
                                value={this.state.email}
                                onChangeText={
                                    (email) => { this.setState({ email }) }
                                } />
                        </View>

                        {/* <View style={styles.Form}>

                            <TextInput style={styles.textinput}
                                returnKeyLabel='next'
                                placeholder='Phone number'
                                keyboardType='phone-pad'
                                underlineColorAndroid='#000000'
                                placeholderTextColor='#000000'
                                value={this.state.number}
                                onChangeText={
                                    (number) => { this.setState({ number }) }
                                }>
                            </TextInput>

                        </View> */}

                        <View style={styles.Form}>

                            <TextInput style={styles.textinput}
                                returnKeyLabel='go'
                                placeholder='Password'
                                secureTextEntry={true}
                                placeholderTextColor='#000000'
                                underlineColorAndroid='#000000'
                                autoCorrect={false}
                                autoCapitalize='none'
                                value={this.state.password}
                                onChangeText={
                                    (password) => { this.setState({ password }) }
                                }>
                            </TextInput>

                        </View>

                        <TouchableOpacity style={styles.Button} onPress={this.onLogin}>
                            <Text style={styles.ButtonText}>SIGN UP</Text>
                        </TouchableOpacity>

                    </View>
                </TouchableWithoutFeedback>

            </ImageBackground >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
    },

    Form: {
        width: width - 40,
        height: 80,
        justifyContent: 'center'
    },

    textinput: {
        width: width - 40,
        fontSize: 20,
        textAlign: 'center'
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

})
export default SignupComponent;