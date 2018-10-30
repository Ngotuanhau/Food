import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';
// import firebase from 'react-native-firebase'


export class Loading extends Component {

    componentDidMount() {
        // firebase.auth().onAuthStateChanged(user => {
        //     this.props.navigation.navigate(user ? 'Tab' : 'SignupContainer')
        // })
    }

    render() {

        return (
            <View style={styles.container}>
                <Text>Loading</Text>
                <ActivityIndicator size="large" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})