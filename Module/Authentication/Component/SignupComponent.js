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
    StatusBar
} from 'react-native';
//import firebase from 'react-native-firebase';

const { width, height } = Dimensions.get('window')

class SignupComponent extends Component {

    constructor(props) {
        super(props),
            this.state = {
                email: '',
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

                        <TextInput style={styles.textinput}
                            keyboardType='email-address'
                            returnKeyLabel='next'
                            placeholder='Email'
                            placeholderTextColor='#000000'
                            autoCorrect={false}
                            autoCapitalize='none'
                            underlineColorAndroid='#000000'
                            value={this.state.email}
                            onChangeText={
                                (email) => { this.setState({ email }) }
                            }
                        />

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
                            }
                        >
                        </TextInput>

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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    Logo: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
        //backgroundColor: 'green'
    },

    Content: {
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'yellow'
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