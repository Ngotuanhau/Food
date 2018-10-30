import React, { Component } from 'react';
import { StyleSheet, StatusBar, ScrollView, Dimensions, View, Image, } from 'react-native';
import { Container, Left, Button, Body, Input, Text } from 'native-base';

import Navbar from '../../Component/Navbar'
import IconMenu from '../../Component/IconMenu'

const { height, width } = Dimensions.get('window')
const heightimage = 200 / 2
const widthimage = heightimage

class Home extends Component {

    onburger = () => {
        this.props.navigation.navigate('Burger')
    };

    oncoffee = () => {
        this.props.navigation.navigate('Coffee')
    };

    onSweet = () => {
        this.props.navigation.navigate('Sweet')
    };

    onDrink = () => {
        this.props.navigation.navigate('Drink')
    };

    onChip = () => {
        this.props.navigation.navigate('Chips')
    };

    onNoodle = () => {
        this.props.navigation.navigate('Noodle')
    };

    onPizza = () => {
        this.props.navigation.navigate('Pizza')
    };

    render() {

        let { drawerNavigation } = this.props.screenProps;

        let left = (
            <Left style={{ flex: 1, }}>
                <IconMenu drawerNavigation={drawerNavigation} />
            </Left>
        );

        let body = (
            <Body style={{ height: 40, flex: 4 }}>
                <Input placeholder="Seach . . ."
                    style={{
                        backgroundColor: 'white',
                        width: 300,
                        borderRadius: 15
                    }} />
            </Body>
        )
        return (
            <Container>
                <StatusBar hidden={true} />
                <Navbar left={left} body={body} />
                <ScrollView style={styles.content}>

                    <Button style={styles.tabs1}
                        onPress={this.onburger}
                    >
                        <View style={styles.form}>
                            <Image source={require('../../HinhAnh/Sanpham/burger.jpg')}
                                style={{ width: widthimage, height: 200 / 2, borderRadius: 22 }}>
                            </Image>
                        </View>

                        <Text style={styles.texts}
                        >Burger
                        </Text>
                    </Button>

                    <Button style={styles.tabs2}
                        onPress={this.oncoffee}
                    >
                        <View style={styles.form}>
                            <Image source={require('../../HinhAnh/Sanpham/coffee.jpg')}
                                style={{ width: widthimage, height: 200 / 2, borderRadius: 22 }}>
                            </Image>
                        </View>

                        <Text style={styles.texts}
                        >Coffee
                        </Text>
                    </Button>

                    <Button style={styles.tabs3}
                        onPress={this.onSweet}
                    >
                        <View style={styles.form}>
                            <Image source={require('../../HinhAnh/Sanpham/sweet.jpg')}
                                style={{ width: widthimage, height: 200 / 2, borderRadius: 22 }}>
                            </Image>
                        </View>

                        <Text style={styles.texts}
                        >Sweet
                        </Text>
                    </Button>

                    <Button style={styles.tabs4}
                        onPress={this.onDrink}
                    >
                        <View style={styles.form}>
                            <Image source={require('../../HinhAnh/Sanpham/drink.jpeg')}
                                style={{ width: widthimage, height: 200 / 2, borderRadius: 22 }}>
                            </Image>
                        </View>

                        <Text style={styles.texts}
                        >Drink
                        </Text>
                    </Button>

                    <Button style={styles.tabs5}
                        onPress={this.onChip}
                    >
                        <View style={styles.form}>
                            <Image source={require('../../HinhAnh/Sanpham/chip.jpg')}
                                style={{ width: widthimage, height: 200 / 2, borderRadius: 22 }}>
                            </Image>
                        </View>

                        <Text style={styles.texts}
                        >Chips
                        </Text>
                    </Button>

                    <Button style={styles.tabs6}
                        onPress={this.onNoodle}
                    >
                        <View style={styles.form}>
                            <Image source={require('../../HinhAnh/Sanpham/noodle.jpg')}
                                style={{ width: widthimage, height: 200 / 2, borderRadius: 22 }}>
                            </Image>
                        </View>

                        <Text style={styles.texts}
                        >Noodle
                        </Text>
                    </Button>

                    <Button style={styles.tabs7}
                        onPress={this.onPizza}
                    >
                        <View style={styles.form}>
                            <Image source={require('../../HinhAnh/Sanpham/pizza.jpg')}
                                style={{ width: widthimage, height: 200 / 2, borderRadius: 22 }}>
                            </Image>
                        </View>

                        <Text style={styles.texts}
                        >Pizza
                        </Text>
                    </Button>

                </ScrollView>
            </Container >
        );
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
    },

    tabs1: {
        width: width,
        height: 200,
        backgroundColor: '#B71C1C',
        justifyContent: 'center',
    },

    tabs2: {
        width: width,
        height: 200,
        backgroundColor: '#C62828',
        justifyContent: 'center',
    },

    tabs3: {
        width: width,
        height: 200,
        backgroundColor: '#D32F2F',
        justifyContent: 'center',
    },

    tabs4: {
        width: width,
        height: 200,
        backgroundColor: '#E53935',
        justifyContent: 'center',
    },

    tabs5: {
        width: width,
        height: 200,
        backgroundColor: '#F44336',
        justifyContent: 'center',
    },

    tabs6: {
        width: width,
        height: 200,
        backgroundColor: '#EF5350',
        justifyContent: 'center',
    },

    tabs7: {
        width: width,
        height: 200,
        backgroundColor: '#E57373',
        justifyContent: 'center',
    },


    form: {
        height: 200 / 2,
        width: widthimage,
        position: 'absolute',
        left: 50,
        borderRadius: 22,
    },

    texts: {
        fontSize: 30,
        color: '#ffffff',
        position: 'absolute',
        left: 200
    }
})

export default Home;