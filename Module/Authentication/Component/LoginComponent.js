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
    StatusBar
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
// import firebase from 'react-native-firebase';

const { height, width } = Dimensions.get('window')

class LoginComponent extends Component {

    // constructor(props) {
    //     super(props),
    //         this.state = {
    //             email: '',
    //             password: '',
    //         }
    // }

    onLogin = () => {
        // firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        //     .then(() => this.props.navigation.navigate('Tab'))
    }

    // componentDidMount() {
    //     this.props.restore()
    // }

    state = { email: '', password: '' };

    handlemail = email => this.setState({ email })
    handlepassword = password => this.setState({ password })

    // onLogin = () => {
    //     const { email, password } = this.state;
    //     this.props.login(email, password);
    // };

    componentDidUpdate(prevProps) {
        const { error, logged } = this.props;

        if (!prevProps.error && error) Alert.alert('error', error);

        if (logged) Actions.reset('Tab');
    }

    // componentDidUpdate(prevProps) {
    //     const { error, logged } = this.props;

    //     if (!prevProps.error && error) Alert.alert('error', error);

    //     if (logged) Actions.reset('Tab');
    // }

    onSignup = () => {
        this.props.navigation.navigate('Signup')
    }

    onForgot = () => {
        this.props.navigation.navigate('Forgotpass')
    }

    render() {
        const { email, password } = this.state;
        return (

            <ImageBackground style={styles.container}
                source={(require('../../../HinhAnh/BackGound/login3.jpg'))}>
                <StatusBar hidden={true} />

                <TouchableWithoutFeedback style={styles.container}
                    onPress={Keyboard.dismiss}>

                    <View style={styles.container}>
                        <Text style={{
                            fontSize: 100,
                            color: '#000000',
                            fontStyle: "italic",
                            top: -40,
                        }}> Food</Text>

                        <View style={styles.Form}>

                            <TextInput style={styles.textinput}
                                keyboardType='email-address'
                                returnKeyLabel='next'
                                placeholder='Email'
                                placeholderTextColor='#000000'
                                autoCorrect={false}
                                autoCapitalize='none'
                                underlineColorAndroid='#000000'
                                value={email}
                                // onChangeText={
                                //     (email) => { this.setState({ email }) }
                                // } 
                                onChangeText={this.handlemail}
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

                        </View>

                        <View style={styles.Form}>
                            <TextInput style={styles.textinput}
                                returnKeyLabel='go'
                                placeholder='Password'
                                secureTextEntry={true}
                                placeholderTextColor='#000000'
                                underlineColorAndroid='#000000'
                                autoCorrect={false}
                                autoCapitalize='none'
                                value={password}
                                // onChangeText={
                                //     (password) => { this.setState({ password }) }
                                // }
                                onChangeText={this.handlepassword}
                            >
                            </TextInput>

                        </View>

                        <Text onPress={this.onForgot}
                            style={{
                                color: '#000000',
                                left: -100,
                                fontSize: 18,
                                paddingTop: 3
                            }}> forgot your password</Text>

                        <TouchableOpacity style={styles.Button} onPress={this.onLogin}>
                            <Text style={styles.ButtonText}>LOGIN</Text>
                        </TouchableOpacity>

                        <Text onPress={this.onSignup}
                            style={{
                                color: '#000000',
                                marginTop: 30,
                                fontSize: 20,
                            }}> Sign up</Text>

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

    iconbutton: {
        flexDirection: 'row',
        marginTop: 80,
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 60,
        justifyContent: 'space-around'
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