import React, { useEffect } from 'react'
import { View, Text, ImageBackground, StyleSheet, Dimensions, FlatList, Image, TouchableOpacity } from 'react-native';
import ButtonComponent from '../button/buttonMain';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Navbar from '../Navbar/bottomNavbar';

// Import Gambar
import comeli from '../../assets/comeli.jpg';
import comeli1 from '../../assets/comeli1.jpg';
import comeli2 from '../../assets/comeli2.jpg';
import comeli3 from '../../assets/comeli3.jpg';
import comeli4 from '../../assets/comeli4.jpg';
import comeli5 from '../../assets/comeli5.jpg';
import comeli6 from '../../assets/comeli6.jpg';

const { height } = Dimensions.get('window'); 

const imageData = [
    { id: '1', uri: comeli1 },
    { id: '2', uri: comeli2 },
    { id: '3', uri: comeli3 },
    { id: '4', uri: comeli4 },
    { id: '5', uri: comeli5 },
    { id: '6', uri: comeli6 },
];

function MainPage({ navigation }) {
    const [loaded, error] = useFonts({
        'Metropolis-SemiBold': require('../../assets/font/Metropolis-SemiBold.otf'),
        'Metropolis-Bold': require('../../assets/font/Metropolis-Bold.otf'),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={comeli} 
            style={[styles.image, { height: height * 0.7 }]}>
                <View style={styles.overlay}>
                    <View style={styles.bottomLeft}>
                        <Text style={styles.Fashion}>Fashion Muslim</Text>
                        <Text style={styles.Sale}>Sale</Text>
                        <ButtonComponent title="Check" onPress={() => navigation.navigate('NextPage')} color="#FF0000" borderRadius={2} />
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.newSection}>
                <View style={styles.headerRow}>
                    <Text style={styles.newTitle}>New</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('ViewAllPage')}>
                        <Text style={styles.viewAll}>View all</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.newSubtitle}>You've never seen it before!</Text>
                <FlatList
                    data={imageData}
                    horizontal
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('ViewAllPage')}>
                            <View style={styles.imageContainer}>
                                <Image source={item.uri} style={styles.sliderImage} resizeMode="cover" />
                                <View style={styles.overlayText}>
                                    <Text style={styles.itemTitle}>New</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={styles.navbarContainer}>
                <Navbar style={styles.navbar} />
            </View>
        </View>
    )
}

export default MainPage;

const styles = StyleSheet.create({
    image: {
        justifyContent: "center",
        width: '100%'
    },
    overlay: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-start",
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    bottomLeft: {
        alignItems: "flex-start"
    },
    Fashion: {
        fontSize: 46,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Metropolis-SemiBold'
    },
    Sale: {
        fontSize: 46,
        fontWeight: 'bold',
        color: 'white',
        marginTop: -10,
        fontFamily: 'Metropolis-SemiBold',
        marginBottom: 10
    },
    newSection: {
        paddingVertical: 20,
        backgroundColor: 'white',
        width: '100%'
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginBottom: 10
    },
    newTitle: {
        fontSize: 34,
        fontWeight: 'bold',
        fontFamily: 'Metropolis-SemiBold'
    },
    viewAll: {
        fontSize: 16,
        color: 'black',
        fontFamily: 'Metropolis-SemiBold'
    },
    newSubtitle: {
        fontSize: 16,
        color: 'gray',
        marginHorizontal: 15,
        marginBottom: 15
    },
    imageContainer: {
        width: 150,
        height: 200,
        margin: 20,
        borderRadius: 10,
        overflow: 'hidden',
        position: 'relative'
    },
    sliderImage: {
       width: '100%',
       height: '100%'
    },
    overlayText: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 5,
        borderRadius: 5
    },
    itemTitle: {
        color: 'white',
        fontFamily: 'Metropolis-SemiBold',
        fontSize: 14
    },
    navbarContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    }
});
