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
    Alert, StatusBar
} from 'react-native';

const { width, height } = Dimensions.get('window')

class Chagnepass extends Component {

    constructor(props) {
        super(props),
            this.state = {
                name: '',
                number: '',
                password: '',
            }
    }

    onChagnepass = () => {
        Alert.alert(
            'Message',
            'Your pass is change success!!!',
            [
                { text: 'OK', onPress: () => { this.props.navigation.navigate('Login') } }
            ]
        )
    }

    render() {
        return (

            <ImageBackground style={styles.container}
                source={(require('../../HinhAnh/BackGound/login3.jpg'))}>
                <StatusBar hidden={true} />

                <TouchableWithoutFeedback style={styles.container}
                    onPress={Keyboard.dismiss}>

                    <View style={styles.container}>
                        <Text style={{
                            fontSize: 100,
                            color: '#000000',
                            fontStyle: "italic",
                            top: -50
                        }}> Food</Text>

                        <View style={styles.Form}>

                            <TextInput style={styles.textinput}
                                returnKeyLabel='next'
                                placeholder='New password'
                                placeholderTextColor='#000000'
                                underlineColorAndroid='#000000'
                                autoCorrect={false}
                                autoCapitalize='none'
                                value={this.state.name}
                                onChangeText={
                                    (name) => { this.setState({ name }) }
                                } />

                        </View>

                        <View style={styles.Form}>

                            <TextInput style={styles.textinput}
                                returnKeyLabel='go'
                                placeholder='Confirm password'
                                keyboardType='phone-pad'
                                underlineColorAndroid='#000000'
                                placeholderTextColor='#000000'
                                value={this.state.number}
                                onChangeText={
                                    (number) => { this.setState({ number }) }
                                }>
                            </TextInput>

                        </View>

                        <TouchableOpacity style={styles.Button} onPress={this.onChagnepass}>
                            <Text style={styles.ButtonText}>CHAGNE PASS</Text>
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
        fontSize: 20,
        color: '#E4D9D9',
    },

})
export default Chagnepass;