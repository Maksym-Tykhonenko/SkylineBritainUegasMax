import React from 'react';
import { Dimensions, View as BoxWrapSkylegasbrit, Text, TouchableOpacity as UnitedTouchaKingdom, Image,  } from 'react-native';
import { kingdoUegasFonsBrit } from '../kingdoUegasFonsBrit';

const { width, height } = Dimensions.get('window');
const PLACE_CARD_OF_BRITAN_RADIUS = width * 0.045;
const CARD_PADDING = width * 0.045;
const SIZE_OF_LINESKY_IMAGE = width * 0.35;
const BTN_HIGH = height * 0.07;
const BUTTON_RADIUS = width * 0.09;
const BUTTON_FONT = width * 0.035;

type Place = {
    britianName: string;
    skyDescr: string;
    uegasCoordinatesBriti: { lat: number; lng: number };
    imgOfUegas: any;
    rating: number;
};

export default function BritianUegasLocasCard({
    place,
    onOpen,
    isBorder = false,
    dontShowOpen = false,
}: {
    place: Place;
    onOpen: () => void;
    isBorder?: boolean | undefined;
    dontShowOpen?: boolean | undefined;
}) {
    return (
        <BoxWrapSkylegasbrit
            style={{
                borderColor: isBorder ? 'rgba(255, 255, 255, 0.4)' : 'transparent',
                width: width * 0.96,
                borderRadius: PLACE_CARD_OF_BRITAN_RADIUS,
                backgroundColor: '#0C0C0C',
                padding: CARD_PADDING,
                shadowOpacity: 0.15,
                shadowRadius: 7,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 3 },
                marginBottom: height * 0.03,
                elevation: 6,
                borderWidth: isBorder ? width * 0.0028 : 0,
                flexDirection: 'column',
            }}
        >
            <BoxWrapSkylegasbrit style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                <BoxWrapSkylegasbrit style={{ flex: 1 }}>
                    <Text
                        style={{
                            color: '#fff',
                            marginBottom: height * 0.008,
                            fontSize: width * 0.05,
                            fontFamily: kingdoUegasFonsBrit.skyOnestLineSemiBold,
                        }}
                        numberOfLines={1}
                    >
                        {place.britianName}
                    </Text>
                    <BoxWrapSkylegasbrit style={{ flexDirection: 'row', alignItems: 'center', marginBottom: height * 0.008 }}>
                        <Text
                            style={{
                                fontFamily: kingdoUegasFonsBrit.skyOnestLineSemiBold,
                                fontSize: width * 0.04,
                                color: '#fff',
                                marginTop: 2,
                            }}
                        >
                            ⭐ {place.rating}
                        </Text>
                    </BoxWrapSkylegasbrit>
                    <Text
                        style={{
                            fontSize: width * 0.035,
                            color: '#838383',
                            fontFamily: kingdoUegasFonsBrit.skyOnestLineRegular,
                            lineHeight: width * 0.052,
                            width: width * 0.5,
                        }}
                        numberOfLines={2}
                        ellipsizeMode="tail"
                    >
                        {place.skyDescr}
                    </Text>
                </BoxWrapSkylegasbrit>
                <Image
                    source={place.imgOfUegas}
                    style={{
                        width: SIZE_OF_LINESKY_IMAGE,
                        resizeMode: 'cover',
                        borderRadius: width * 0.025,
                        marginLeft: width * 0.03,
                        height: SIZE_OF_LINESKY_IMAGE * 0.68,
                        backgroundColor: '#222',
                    }}
                />
            </BoxWrapSkylegasbrit>
            {!dontShowOpen && (
                <UnitedTouchaKingdom
                    style={{
                        alignItems: 'center',
                        width: '50%',
                        marginTop: height * 0.018,
                        backgroundColor: '#900B0B',
                        justifyContent: 'center',
                        height: BTN_HIGH,
                        alignSelf: 'flex-start',
                        borderRadius: BUTTON_RADIUS,
                    }}
                    activeOpacity={0.85}
                    onPress={onOpen}
                >
                    <Text
                        style={{
                            letterSpacing: 0.4,
                            color: '#fff',
                            fontFamily: kingdoUegasFonsBrit.skyOnestLineSemiBold,
                            fontSize: BUTTON_FONT,
                        }}
                    >
                        Open
                    </Text>
                </UnitedTouchaKingdom>
            )}
        </BoxWrapSkylegasbrit>
    );
}
