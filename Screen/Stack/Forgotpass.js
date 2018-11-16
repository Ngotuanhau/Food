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

class Forgotpass extends Component {

    constructor(props) {
        super(props),
            this.state = {
                number: '',
            }
    }

    onSendcode = () => {

        Alert.alert(
            'Message',
            'Code has send to your phone number!!!',
            [
                { text: 'OK', onPress: () => this.props.navigation.navigate('Confirmcode') },
            ],
            { cancelable: false }
        )

    }

    render() {
        return (

            <ImageBackground style={styles.container}
                source={(require('../../HinhAnh//BackGound/login3.jpg'))}>
                <StatusBar hidden={true} />

                <TouchableWithoutFeedback style={styles.container}
                    onPress={Keyboard.dismiss}>

                    <View style={styles.container}>
                        <Text style={{
                            fontSize: 100,
                            color: '#000000',
                            fontStyle: "italic",
                            top: - 100
                        }}> Food
                        </Text>

                        <View style={styles.Form}>

                            <TextInput style={styles.textinput}
                                returnKeyLabel='next'
                                placeholder='Phone number'
                                keyboardType='phone-pad'
                                placeholderTextColor='#000000'
                                underlineColorAndroid='#000000'
                                value={this.state.number}
                                onChangeText={
                                    (number) => { this.setState({ number }) }
                                } />

                        </View>

                        <TouchableOpacity style={styles.Button} onPress={this.onSendcode}>
                            <Text style={styles.ButtonText}>SEND CODE</Text>
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
export default Forgotpass;