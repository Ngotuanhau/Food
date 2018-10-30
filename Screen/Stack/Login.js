import React, { Component } from 'react';
import LoginComponent from '../../Module/Authentication/Component/LoginComponent'

const LoginScreen = ({ navigation }) => {
    return (
        <LoginComponent navigation={navigation} />
    )
}

export default LoginScreen