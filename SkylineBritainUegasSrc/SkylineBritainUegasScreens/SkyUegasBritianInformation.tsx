import React from 'react';
import { TouchableOpacity as TouchMe, Dimensions, Image, Share, Text as LineTxtOfUegasBriti, Platform, } from 'react-native';
import { kingdoUegasFonsBrit } from '../kingdoUegasFonsBrit';

// Dimensions
const { width: uegBritiWidth, height: uegBritiHeight } = Dimensions.get('window');

const britishTextAboutApp = `${Platform.OS === 'android' ? 'Leoline Britain Vegas' : 'Skyline Britain Uegas'} is your guide to the world of British panoramas.
We have collected the most interesting places so that you can see Britain from a new height - through light, color and mood.
Choose an emotion, discover locations and create your own selection of moments.

Your journey begins with one click -
together with your guide Eliza.`

export default function SkyUegasBritianInformation() {
    return (
        <>
            <Image
                source={Platform.OS === 'android'
                    ? require('../SkylineBritainUegasAssets/SkylineBritainUegasImages/leoLineIcoImage.png')
                    : require('../SkylineBritainUegasAssets/SkylineBritainUegasImages/brititanSmallIcon.png')}
                style={{
                    alignSelf: 'center',
                    height: uegBritiWidth * 0.53,
                    marginTop: uegBritiHeight * 0.05,
                    marginBottom: uegBritiWidth * 0.05,
                    borderRadius: uegBritiWidth * 0.12,
                    width: uegBritiWidth * 0.53,
                }}
                resizeMode='stretch'
            />
            <LineTxtOfUegasBriti
                style={{
                    marginTop: uegBritiHeight * 0.018,
                    fontFamily: kingdoUegasFonsBrit.skyOnestLineRegular,
                    color: 'white',
                    letterSpacing: 0.1,
                    marginHorizontal: uegBritiWidth * 0.04,
                    fontSize: uegBritiWidth * 0.044,
                }}
            >
                {britishTextAboutApp}
            </LineTxtOfUegasBriti>

            <TouchMe
                onPress={() => {
                    Share.share({
                        message: britishTextAboutApp,
                    })
                }}
                style={{
                    width: uegBritiWidth * 0.35,
                    marginTop: uegBritiHeight * 0.04,
                    borderRadius: uegBritiWidth * 0.0611,
                    backgroundColor: '#900B0B',
                    alignItems: 'center',
                    height: uegBritiHeight * 0.08,
                    alignSelf: 'center',
                    justifyContent: 'center',
                }}
                activeOpacity={0.8}
            >
                <LineTxtOfUegasBriti
                    style={{
                        letterSpacing: 0.5,
                        color: '#fff',
                        fontSize: uegBritiWidth * 0.04,
                        fontFamily: kingdoUegasFonsBrit.skyOnestLineSemiBold,
                    }}
                >
                    Share app
                </LineTxtOfUegasBriti>
            </TouchMe>
        </>
    );
}
