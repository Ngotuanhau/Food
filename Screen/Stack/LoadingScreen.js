import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper'

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
                    <View style={{ top: 55, }}>
                        <Text style={{ color: '#000000', fontSize: 15, left: 20 }}>
                            A good laugh and a long sleep are the best cures
                        </Text>
                        <Text style={{ color: '#000000', fontSize: 15, left: 260 }}>
                            in the doctor’s book.
                        </Text>

                        <Text style={{ color: '#000000', fontSize: 15, left: 240, top: 10 }}>
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
                    <View style={{ top: 60, }}>
                        <Text style={{ color: '#ffffff', fontSize: 15, left: 20 }}>
                            The groundwork for all happiness is good health.
                        </Text>
                        <Text style={{ color: '#ffffff', fontSize: 15, left: 240, top: 10 }}>
                            – Leigh Hunt
                        </Text>
                    </View>


                    <Text style={styles.butonSkip}
                        onPress={this.onStart}
                    >SKIP</Text>
                </ImageBackground>

                <ImageBackground
                    style={styles.image}
                    source={require('../../HinhAnh/Loading/3.jpg')}
                    resizeMode='cover'
                >

                    <View style={{ top: 60, }}>
                        <Text style={{ color: '#ffffff', fontSize: 15, left: 10 }}>
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
        alignItems: 'center',
        justifyContent: 'center'
    },

    slide: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    },

    image: {
        flex: 1,
        width: width,
        height: height,

    },

    button: {
        width: 134,
        height: 39,
        backgroundColor: '#000000',
        left: 30,
        bottom: -630,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },

    butonSkip: {
        color: '#B81616',
        fontWeight: 'bold',
        fontSize: 20,
        left: 30,
        bottom: -625,
        width: 50,
    }

})

export default LoadingScreen;