import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Body, Title, Left, Right, Item, Input } from 'native-base'

class navbar extends Component {

    render() {
        return (
            <Header style={{ backgroundColor: '#7F0000' }}
                //backgroundColor={{ backgroundColor: '#7F0000' }}
                //androidStatusBarColor={{ backgroundColor: '#7F0000' }}
                noShadow={true}
            >
                {this.props.left ? this.props.left : <Left style={{ flex: 1 }} />}
                {/* <Body style={styles.body}>
                    <Title style={styles.title}>{this.props.title}</Title>
                    <Item>
                        <Input placeholder="Seach" />
                    </Item>
                    <Input placeholder="Seach" />
                </Body> */}
                {this.props.body ? this.props.body : <Body />}
                {this.props.right ? this.props.right : <Right style={{ flex: 1 }} />}
            </Header>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        backgroundColor: 'white'
    },

    title: {
        fontFamily: 'Roboto',
        fontWeight: '100',
    }

})

export default navbar;