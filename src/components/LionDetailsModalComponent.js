import React, { useState } from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Dimensions,
    SafeAreaView,
    Text,
    StyleSheet,
} from 'react-native';

const molahFontPoppinsRegular = 'Poppins-Regular';


const LionDetailsModalComponent = ({ selectedAnimal }) => {
    const [dimensions, setDimensions] = useState(Dimensions.get('window'));
    const styles = createPrideQuestHomeStyles(dimensions);

    return (

        <SafeAreaView style={{
            flex: 1,
        }}>
            <Text
                style={{
                    textAlign: 'left',
                    color: 'white',
                    fontSize: dimensions.width * 0.08,
                    fontFamily: molahFontPoppinsRegular,
                    fontWeight: 600,
                    marginLeft: dimensions.width * 0.03,
                    marginTop: dimensions.height * 0.02,

                }}>
                {selectedAnimal?.title}
            </Text>

            <Image
                source={selectedAnimal?.image}
                style={{
                    width: dimensions.width,
                    height: dimensions.height * 0.27,
                    marginTop: dimensions.height * 0.01,
                }}
                resizeMode='stretch'
            />

            <Text style={styles.modalPrideTitleText}>
                🌍 Habitat
            </Text>

            <Text style={[styles.prideText, {
                marginTop: dimensions.height * 0.01,
            }]}>
                {selectedAnimal?.title}
            </Text>

            <Text style={styles.modalPrideTitleText}>
                🐾 Behavior
            </Text>

            {selectedAnimal?.behaviors.map((behavior, index) => (
                <Text key={index} style={[styles.prideText, {
                }]}>
                    {behavior?.behavior}
                </Text>
            ))}


            <Text style={styles.modalPrideTitleText}>
                👑 Pride Structure
            </Text>

            {selectedAnimal?.prideStracture.map((pride, index) => (
                <Text key={index} style={[styles.prideText, {
                }]}>
                    {pride.pride}
                </Text>
            ))}

            <Text style={styles.modalPrideTitleText}>
                ⚠️ Status
            </Text>

            <Text style={[styles.prideText, {
                marginTop: dimensions.height * 0.01,
            }]}>
                {selectedAnimal?.status}
            </Text>

            <View style={{ position: 'relative' }}>
                <Image
                    source={require('../assets/images/modalLionImage.png')}
                    style={{
                        width: dimensions.width,
                        height: dimensions.height * 0.25,
                        marginTop: dimensions.height * 0.05,
                        alignSelf: 'center',
                        position: 'relative',
                    }}
                    resizeMode='contain'
                />

                <Image
                    source={selectedAnimal?.messageImage}
                    style={{
                        width: dimensions.width * 0.55,
                        height: dimensions.height * 0.2,
                        position: 'absolute',
                        top: dimensions.height * 0.02,
                        left: dimensions.width * 0.4,
                        zIndex: 1,
                    }}
                    resizeMode='contain'
                />
            </View>

            <TouchableOpacity style={{
                width: dimensions.width * 0.93,
                height: dimensions.height * 0.07,
                backgroundColor: '#FFC81F',
                borderRadius: dimensions.width * 0.041,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: dimensions.height * 0.041,
                alignSelf: 'center',
            }}>
                <Text
                    style={{
                        textAlign: 'left',
                        color: 'white',
                        fontSize: dimensions.width * 0.05,
                        fontFamily: molahFontPoppinsRegular,
                        fontWeight: 700,
                    }}>
                    ✅ Mark as learned
                </Text>
            </TouchableOpacity>
        </SafeAreaView>

    );
};

const createPrideQuestHomeStyles = (dimensions) => StyleSheet.create({
    modalPrideTitleText: {
        textAlign: 'left',
        color: 'white',
        fontSize: dimensions.width * 0.04,
        fontFamily: molahFontPoppinsRegular,
        fontWeight: 300,
        marginLeft: dimensions.width * 0.03,
        marginTop: dimensions.height * 0.02,
    },
    prideText: {
        textAlign: 'left',
        color: 'white',
        fontSize: dimensions.width * 0.046,
        fontFamily: molahFontPoppinsRegular,
        fontWeight: 600,
        marginLeft: dimensions.width * 0.03,
        marginTop: dimensions.height * 0.005,
    }
});

export default LionDetailsModalComponent;
