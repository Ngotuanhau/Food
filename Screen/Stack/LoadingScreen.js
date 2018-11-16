import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    ImageBackground,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import Swiper from 'react-native-swiper'

// import firebase from 'react-native-firebase'

const { width, height } = Dimensions.get('window')

class LoadingScreen extends Component {

    onStart = () => {
        this.props.navigation.navigate('Login')
    }

    render() {
        return (

            <Swiper style={styles.Container}
                dot={<View style={{
                    backgroundColor: '#FFFFFF',
                    width: 16,
                    height: 17,
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
                }} />}
                paginationStyle={{
                    bottom: 70,
                    left: 280
                }}
                loop={false}>

                <ImageBackground
                    style={styles.image}
                    source={require('../../HinhAnh/Loading/4.jpg')}
                    resizeMode='cover'
                >
                    <View style={styles.Text}>
                        <Text style={{
                            color: '#000000',
                            fontSize: 15,
                            paddingHorizontal: 20,
                            textAlign: 'right'
                        }}>
                            A good laugh and a long sleep are the best cures
                                in the doctor’s book.
                        </Text>

                        <Text style={{
                            color: '#000000',
                            fontSize: 15,
                            left: 240,
                            top: 10
                        }}>
                            – Irish Proverb
                        </Text>
                    </View>

                    <Text style={styles.butonSkip}
                        onPress={this.onStart}
                    >SKIP</Text>
                </ImageBackground>

                <ImageBackground
                    style={styles.image}
                    source={require('../../HinhAnh/Loading/2.jpg')}
                    resizeMode='cover'
                >
                    <View style={styles.Text}>
                        <Text style={{
                            color: '#ffffff',
                            fontSize: 15,
                            paddingHorizontal: 20,
                            textAlign: 'right'
                        }}>
                            The groundwork for all happiness is good health.
                        </Text>
                        <Text style={{ color: '#ffffff', fontSize: 15, left: 240, top: 10 }}>
                            – Leigh Hunt
                        </Text>
                    </View>


                    <Text style={styles.butonSkip}
                        onPress={this.onStart}
                    >SKIP
                    </Text>
                </ImageBackground>

                <ImageBackground
                    style={styles.image}
                    source={require('../../HinhAnh/Loading/3.jpg')}
                    resizeMode='cover'
                >

                    <View style={styles.Text}>
                        <Text style={{
                            color: '#ffffff',
                            fontSize: 15,
                            paddingHorizontal: 20,
                            textAlign: 'right'
                        }}>
                            Take care of your body. It's the only place you have to live
                        </Text>
                        <Text style={{ color: '#ffffff', fontSize: 15, left: 290, top: 10 }}>
                            – Jim Rohn
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.button}>
                        <Text style={{
                            color: '#B81616',
                            fontWeight: 'bold',
                            fontSize: 20,
                        }}
                            onPress={this.onStart}
                        > Start now
                        </Text>
                    </TouchableOpacity>
                </ImageBackground>

            </Swiper >

        )
    }
}

const styles = StyleSheet.create({

    Container: {
        flex: 1,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center'
    },

    image: {
        flex: 1,
        position: 'relative',
    },

    Text: {
        position: 'absolute',
        top: 55,
        left: 0,
        right: 0,
        height: 80,
        justifyContent: 'center'
    },

    button: {
        width: 134,
        height: 39,
        backgroundColor: '#000000',
        left: 30,
        bottom: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        position: 'absolute'
    },

    butonSkip: {
        color: '#B81616',
        fontWeight: 'bold',
        fontSize: 20,
        position: 'absolute',
        left: 30,
        bottom: 65,
        width: 50,
    }

})

export default LoadingScreen;