import React, { Component } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions, StatusBar, TouchableOpacity } from 'react-native';

import Swiper from 'react-native-swiper';
import { Icon, Left, Body, Title, } from 'native-base';
import Navbar from '../../../Component/Navbar';

const data = [
    {
        id: 0,
        title: 'Burger Chickend',
        image: require('../../../HinhAnh/Sanpham/burgerga.jpg'),
        backgroundColor: '#B71C1C'
    },

    {
        id: 1,
        title: 'Burger Cow',
        image: require('../../../HinhAnh/Sanpham/burgerbo.jpg'),
        backgroundColor: '#C62828'
    },

    {
        id: 2,
        title: 'Burger Fish',
        image: require('../../../HinhAnh/Sanpham/burgerca.jpg'),
        backgroundColor: '#D32F2F'
    },

    {
        id: 3,
        title: 'Burger King',
        image: require('../../../HinhAnh/Sanpham/burgerking.jpg'),
        backgroundColor: '#E53935'
    },

    {
        id: 4,
        title: 'Burger King',
        image: require('../../../HinhAnh/Sanpham/burgerking.jpg'),
        backgroundColor: '#F44336'
    },
]

const { height, width } = Dimensions.get('window');
const heightimage = 200 / 2;
const widthimage = heightimage;

class Burger extends Component {



    abc = ({ item, index }) => {
        return (
            <View backgroundColor={item.backgroundColor}
                style={styles.Tabs}>
                <View style={styles.form}>
                    <Image source={item.image}
                        style={{ width: widthimage, height: 200 / 2, borderRadius: 22 }} />
                </View>
                <Text style={styles.texts}>
                    {item.title}
                </Text>
                <TouchableOpacity style={{
                    backgroundColor: '#ffffff',
                    height: 35,
                    width: 110,
                    position: 'absolute',
                    left: 250,
                    top: 85,
                    borderRadius: 20,
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}
                    onPress={() => { this.props.addToCart(item, 1) }}
                >
                    {/* <TouchableOpacity>
                        <Icon name={'ios-add-circle-outline'} size={20} color='#000000' />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20 }}> 1</Text>
                    <TouchableOpacity>
                        <Icon name={'ios-remove-circle-outline'} size={20} color='#000000' />
                    </TouchableOpacity> */}
                    <Text style={{ fontSize: 20 }}>Buy</Text>
                </TouchableOpacity>
            </View>
        )
    }

    onMenu = () => {
        this.props.navigation.goBack()
    }
    render() {
        let left = (
            <Left style={{ flex: 1, }}>
                <Icon name={'ios-arrow-round-back'}
                    style={{
                        color: '#ffffff',
                        fontSize: 50,
                        left: 20,
                    }}
                    onPress={this.onMenu}
                />
            </Left>
        )
        let body = (
            <Body style={{ flex: 2 }}>
                <Title style={{
                    color: '#ffffff',
                    width: 200,
                    fontSize: 40
                }}>Burger</Title>
            </Body>
        )

        return (
            <View style={{ flex: 1 }}>
                <Navbar left={left} body={body} />

                <View style={{ width: width, height: 250 }}>
                    <StatusBar hidden={true} />
                    <Swiper style={styles.banner}

                        dot={<View style={{
                            backgroundColor: '#FFFFFF',
                            width: 15,
                            height: 13,
                            borderRadius: 7,
                            marginLeft: 7,
                            marginRight: 7,
                        }} />}
                        activeDot={<View style={{
                            backgroundColor: '#A1230B',
                            width: 16,
                            height: 17,
                            borderRadius: 7,
                            marginLeft: 7,
                            marginRight: 7
                        }} />} >

                        <View style={styles.slide}>
                            <Image source={require('../../../HinhAnh/Sanpham/burger1.jpg')}
                                style={styles.imageStyle} />
                        </View>
                        <View style={styles.slide}>
                            <Image source={require('../../../HinhAnh/Sanpham/burger2.jpg')}
                                style={styles.imageStyle} />
                        </View>
                        <View style={styles.slide}>
                            <Image source={require('../../../HinhAnh/Sanpham/burger3.jpg')}
                                style={styles.imageStyle} />
                        </View>

                    </Swiper>
                </View>

                <FlatList
                    data={data}
                    renderItem={this.abc}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageStyle: {
        width: width,
        height: 250
    },

    Tabs: {
        width: width,
        height: 180,
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
        fontSize: 25,
        color: '#ffffff',
        position: 'absolute',
        left: 200,
        top: 40
    },

})
export default Burger;
