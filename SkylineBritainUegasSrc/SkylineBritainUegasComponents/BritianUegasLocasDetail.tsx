import { kingdoUegasFonsBrit } from '../kingdoUegasFonsBrit';
import MapView, { Marker } from 'react-native-maps';
import { View as BwrappoxLineBritian, TouchableOpacity as UnitedKingdomToucha, Dimensions, Text as UeganitedSkygasText, Image, Alert, Share, Platform, Linking } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';

const { width, height } = Dimensions.get('window');
const DETAIL_BRIGAS_IMG_HEIGHT = height * 0.32;
const LINE_DETAIL_SKY_IMG_RADIUS = width * 0.045;
const DETAIL_CARD_RADIUS = width * 0.045;
const DETAIL_WIDTH_OF_BUTTON_SKYLINE = width * 0.35;
const DETAIL_BUTTON_HEIGHT = height * 0.064;
const DETAIL_UEGALINE_BUTTON_RADIUS = width * 0.061;
const DETAIL_TITLE_FONT = width * 0.07;
const DETAIL_SUB_FONT = width * 0.045;
const DETAIL_DESC_FONT = width * 0.038;
const DETAIL_ICON_SIZE = width * 0.07;

const ICONS = {
    bookmark: require('../SkylineBritainUegasAssets/SkylineBritainUegasImages/noUegasSavedSky.png'),
    saved: require('../SkylineBritainUegasAssets/SkylineBritainUegasImages/skySaved.png'),
    back: require('../SkylineBritainUegasAssets/SkylineBritainUegasImages/britianarrowSkyLeft.png'),
};
type Place = {
    britianName: string;
    uegasCoordinatesBriti: { lat: number; lng: number };
    googleMapsUrl?: string; // added optional maps url
    rating: number;
    skyDescr: string;
    imgOfUegas: any;
    id: number;
};

export default function BritianUegasLocasDetail({
    place,
    onBack,
    notShowCheckOn = false,
}: {
    place: Place;
    onBack: () => void;
    notShowCheckOn?: boolean | undefined;
}) {
    const [savedIds, setSavedIds] = useState<number[]>([]);
    const [loading, setLoading] = useState(true);
    const [showMap, setShowMap] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const saved = await AsyncStorage.getItem('uegasLineBritianSavedSky');
                if (saved) {
                    const arr: number[] = JSON.parse(saved);
                    setSavedIds(arr);
                }
            } catch (e) { }
            setLoading(false);
        })();
    }, []);

    const handleBookmark = async () => {
        try {
            const saved = await AsyncStorage.getItem('uegasLineBritianSavedSky');
            let arr: number[] = [];
            if (saved) arr = JSON.parse(saved);
            const exists = arr.includes(place.id);
            let newArr: number[];
            if (exists) {
                newArr = arr.filter((id) => id !== place.id);
            } else {
                newArr = [place.id, ...arr];
            }
            await AsyncStorage.setItem('uegasLineBritianSavedSky', JSON.stringify(newArr));
            setSavedIds(newArr);
        } catch (e) {
            Alert.alert('Error', 'Failed to update saved places');
        }
    };

    const isSaved = savedIds.includes(place.id);

    const handleOpenMap = async () => {
        const url =
            place.googleMapsUrl ??
            `https://www.google.com/maps/search/?api=1&query=${place.uegasCoordinatesBriti.lat},${place.uegasCoordinatesBriti.lng}`;
        try {
            const supported = await Linking.canOpenURL(url);
            if (supported) {
                await Linking.openURL(url);
                return;
            }
        } catch (e) {
            // ignore and fallback to internal map
        }
        setShowMap(true);
    };

    if (showMap) {
        return (
            <BwrappoxLineBritian style={{ width: '100%', alignSelf: 'center', alignItems: 'center', height: height * 0.7 }}>
                <MapView
                    style={{
                        overflow: 'hidden',
                        borderRadius: DETAIL_CARD_RADIUS,
                        height: '100%',
                        width: width * 0.95,
                    }}
                    initialRegion={{
                        latitudeDelta: 0.02,
                        longitude: place.uegasCoordinatesBriti.lng,
                        longitudeDelta: 0.02,
                        latitude: place.uegasCoordinatesBriti.lat,
                    }}
                >
                    <Marker
                        pinColor='#900B0B'
                        coordinate={{
                            latitude: place.uegasCoordinatesBriti.lat,
                            longitude: place.uegasCoordinatesBriti.lng,
                        }}
                        title={place.britianName}
                        description={place.skyDescr}
                    />
                </MapView>
                <BwrappoxLineBritian
                    style={{
                        position: 'absolute',
                        borderRadius: width * 0.03,
                        alignItems: 'center',
                        flexDirection: 'row',
                        top: height * 0.021,
                        backgroundColor: '#0C0C0C',
                        padding: height * 0.00444,
                        alignSelf: 'center',
                    }}
                >
                    <UeganitedSkygasText
                        style={{
                            opacity: 0.92,
                            color: '#fff',
                            fontSize: DETAIL_SUB_FONT * 0.8,
                            fontFamily: kingdoUegasFonsBrit.skyOnestLineLight,
                        }}
                    >
                        📍 {place.uegasCoordinatesBriti.lat.toFixed(4)}, {place.uegasCoordinatesBriti.lng.toFixed(4)}
                    </UeganitedSkygasText>
                </BwrappoxLineBritian>
                <UnitedKingdomToucha
                    style={{
                        width: width * 0.404,
                        position: 'absolute',
                        justifyContent: 'center',
                        height: DETAIL_BUTTON_HEIGHT,
                        backgroundColor: '#900B0B',
                        bottom: height * 0.02,
                        alignItems: 'center',
                        borderRadius: DETAIL_UEGALINE_BUTTON_RADIUS,
                        alignSelf: 'center',
                    }}
                    activeOpacity={0.8}
                    onPress={() => setShowMap(false)}
                >
                    <UeganitedSkygasText
                        style={{
                            letterSpacing: 0.5,
                            color: '#fff',
                            fontFamily: kingdoUegasFonsBrit.skyOnestLineSemiBold,
                            fontSize: width * 0.04,
                        }}
                    >
                        Close map
                    </UeganitedSkygasText>
                </UnitedKingdomToucha>
            </BwrappoxLineBritian>
        );
    }

    return (
        <BwrappoxLineBritian style={{ width: '100%', alignSelf: 'center' }}>
            {/* Detail Card */}
            <BwrappoxLineBritian
                style={{
                    shadowRadius: 8,
                    width: width * 0.95,
                    elevation: 7,
                    paddingBottom: height * 0.03,
                    shadowColor: '#000',
                    shadowOpacity: 0.18,
                    shadowOffset: { width: 0, height: 3 },
                    borderRadius: DETAIL_CARD_RADIUS,
                    backgroundColor: '#0C0C0C',
                }}
            >
                {/* Image with bookmark */}
                <BwrappoxLineBritian
                    style={{
                        backgroundColor: '#222',
                        width: '100%',
                        position: 'relative',
                        borderTopRightRadius: LINE_DETAIL_SKY_IMG_RADIUS,
                        overflow: 'hidden',
                        borderTopLeftRadius: LINE_DETAIL_SKY_IMG_RADIUS,
                        height: DETAIL_BRIGAS_IMG_HEIGHT,
                    }}
                >
                    <Image
                        source={place.imgOfUegas}
                        style={{
                            width: '100%',
                            resizeMode: 'cover',
                            height: '100%',
                        }}
                    />
                    <UnitedKingdomToucha
                        style={{
                            backgroundColor: '#0C0C0C',
                            height: DETAIL_ICON_SIZE * 1.9,
                            right: width * 0.04,
                            width: DETAIL_ICON_SIZE * 1.9,
                            borderRadius: DETAIL_ICON_SIZE * 0.35,
                            borderWidth: 2,
                            borderColor: '#900B0B',
                            position: 'absolute',
                            alignItems: 'center',
                            justifyContent: 'center',
                            top: width * 0.04,
                        }}
                        activeOpacity={0.7}
                        onPress={handleBookmark}
                        disabled={loading}
                    >
                        <Image
                            source={isSaved ? ICONS.saved : ICONS.bookmark}
                            style={{
                                width: DETAIL_ICON_SIZE * 0.91,
                                height: DETAIL_ICON_SIZE * 0.91,
                                resizeMode: 'contain',
                                tintColor: '#fff',
                            }}
                        />
                    </UnitedKingdomToucha>
                </BwrappoxLineBritian>
                {/* Title, rating */}
                <BwrappoxLineBritian
                    style={{
                        marginHorizontal: width * 0.04,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: height * 0.025,
                        flexDirection: 'row',
                    }}
                >
                    <UeganitedSkygasText
                        style={{
                            flex: 1,
                            color: '#fff',
                            fontSize: DETAIL_TITLE_FONT * 0.8,
                            fontFamily: kingdoUegasFonsBrit.skyOnestLineSemiBold,
                        }}
                        numberOfLines={2}
                    >
                        {place.britianName}
                    </UeganitedSkygasText>
                    <UeganitedSkygasText
                        style={{
                            marginTop: 2,
                            fontFamily: kingdoUegasFonsBrit.skyOnestLineSemiBold,
                            color: '#fff',
                            fontSize: DETAIL_SUB_FONT * 0.71,
                        }}
                    >
                        ⭐ {place.rating}
                    </UeganitedSkygasText>
                </BwrappoxLineBritian>
                {/* Coordinates */}
                <BwrappoxLineBritian
                    style={{
                        marginHorizontal: width * 0.04,
                        marginTop: height * 0.012,
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}
                >
                    <UeganitedSkygasText
                        style={{
                            opacity: 0.92,
                            color: '#fff',
                            fontSize: DETAIL_SUB_FONT * 0.8,
                            fontFamily: kingdoUegasFonsBrit.skyOnestLineLight,
                        }}
                    >
                        📍 {place.uegasCoordinatesBriti.lat.toFixed(4)}, {place.uegasCoordinatesBriti.lng.toFixed(4)}
                    </UeganitedSkygasText>
                </BwrappoxLineBritian>
                {/* Description */}
                <UeganitedSkygasText
                    style={{
                        marginHorizontal: width * 0.04,
                        letterSpacing: 0.1,
                        fontSize: DETAIL_DESC_FONT,
                        marginTop: height * 0.018,
                        color: '#838383',
                        lineHeight: DETAIL_DESC_FONT * 1.45,
                        fontFamily: kingdoUegasFonsBrit.skyOnestLineRegular,
                    }}
                >
                    {place.skyDescr}
                </UeganitedSkygasText>
                {/* Buttons */}
                <BwrappoxLineBritian
                    style={{
                        gap: width * 0.045,
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        marginTop: height * 0.03,
                        marginHorizontal: width * 0.04,
                    }}
                >
                    {!notShowCheckOn && (
                        <UnitedKingdomToucha
                            style={{
                                alignItems: 'center',
                                height: DETAIL_BUTTON_HEIGHT,
                                borderRadius: DETAIL_UEGALINE_BUTTON_RADIUS,
                                justifyContent: 'center',
                                backgroundColor: '#900B0B',
                                width: DETAIL_WIDTH_OF_BUTTON_SKYLINE,
                            }}
                            activeOpacity={0.8}
                            onPress={() => {
                                if (Platform.OS === 'android') handleOpenMap()
                                else setShowMap(true)
                            }}
                        >
                            <UeganitedSkygasText
                                style={{
                                    color: '#fff',
                                    letterSpacing: 0.5,
                                    fontSize: width * 0.035,
                                    fontFamily: kingdoUegasFonsBrit.skyOnestLineSemiBold,
                                }}
                            >
                                Check on map
                            </UeganitedSkygasText>
                        </UnitedKingdomToucha>
                    )}
                    <UnitedKingdomToucha
                        onPress={() => {
                            Share.share({
                                message: `What a fantastic place to visit in Britain: ${place.britianName}!\n\nDescription: ${place.skyDescr}\n\nCoordinates: 📍 ${place.uegasCoordinatesBriti.lat}, ${place.uegasCoordinatesBriti.lng}\n\nI've found this amazing spot using the Skyline Britain Uegas app!`,
                            })
                        }}
                        style={{
                            backgroundColor: '#900B0B',
                            height: DETAIL_BUTTON_HEIGHT,
                            justifyContent: 'center',
                            borderRadius: DETAIL_UEGALINE_BUTTON_RADIUS,
                            alignItems: 'center',
                            width: DETAIL_WIDTH_OF_BUTTON_SKYLINE,
                        }}
                        activeOpacity={0.8}
                    >
                        <UeganitedSkygasText
                            style={{
                                letterSpacing: 0.5,
                                color: '#fff',
                                fontSize: width * 0.035,
                                fontFamily: kingdoUegasFonsBrit.skyOnestLineSemiBold,
                            }}
                        >
                            Share place
                        </UeganitedSkygasText>
                    </UnitedKingdomToucha>
                </BwrappoxLineBritian>
            </BwrappoxLineBritian>
        </BwrappoxLineBritian>
    );
}
