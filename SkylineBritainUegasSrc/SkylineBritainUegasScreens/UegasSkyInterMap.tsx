import britianSkylinePlacesUegas from '../SkylineDataBritianUegas/britianSkylinePlacesUegas';
import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import MapView, { Marker, Region } from 'react-native-maps';
import BritianUegasLocasDetail from '../SkylineBritainUegasComponents/BritianUegasLocasDetail';
import { View as BoxWraplineUegassky, Dimensions, TouchableOpacity, Image } from 'react-native';
import BritianUegasLocasCard from '../SkylineBritainUegasComponents/BritianUegasLocasCard';

// Dimensions
const { width, height } = Dimensions.get('window');
const LINE_CARD_WIDTH = width * 0.96;
const CARD_TOP = 0;
const BRITIAN_CLOSE_SIZE = width * 0.09;
const KINGDOM_CLOSE_ICON_SIZE = width * 0.057;

interface UegasSkyInterMapProps {
    isSkyUegasAdditionalInternalOpened: boolean;
    setSkyUegasAdditionalInternalOpened: React.Dispatch<React.SetStateAction<boolean>>;
    showWhichList: 'all' | 'saved';
}

export default function UegasSkyInterMap({ isSkyUegasAdditionalInternalOpened, setSkyUegasAdditionalInternalOpened, showWhichList }: UegasSkyInterMapProps) {
    const [selected, setSelected] = useState<number | null>(null);

    // Центр карти — приблизно центр UK
    const initialRegion: Region = {
        longitudeDelta: 0.01,
        longitude: britianSkylinePlacesUegas[0].uegasCoordinatesBriti.lng,
        latitudeDelta: 0.01,
        latitude: britianSkylinePlacesUegas[0].uegasCoordinatesBriti.lat,
    };

    // Якщо isSkyUegasAdditionalInternalOpened true — показати детальну картку
    if (isSkyUegasAdditionalInternalOpened && selected !== null) {
        return (
            <ScrollView
                style={{
                    alignSelf: 'center',
                    flex: 1,
                    paddingTop: height * 0.019,
                }}
                contentContainerStyle={{
                    alignItems: 'center',
                    paddingBottom: height * 0.142395,
                }}
                showsVerticalScrollIndicator={false}
            >
                <BritianUegasLocasDetail
                    place={britianSkylinePlacesUegas[selected]}
                    onBack={() => setSkyUegasAdditionalInternalOpened(false)}
                    notShowCheckOn={true}
                />
            </ScrollView>
        );
    }

    return (
        <BoxWraplineUegassky
            style={{
                height: height * 0.71,
                backgroundColor: '#0C0C0C',
                alignSelf: 'center',
                marginTop: height * 0.025,
                width: width * 0.95,
            }}
        >
            <BoxWraplineUegassky
                style={{
                    flex: 1,
                    borderRadius: width * 0.045,
                    overflow: 'hidden',
                }}
            >
                <MapView
                    style={{ flex: 1 }}
                    zoomControlEnabled={false}
                    rotateEnabled={false}
                    toolbarEnabled={false}
                    showsUserLocation={false}
                    showsMyLocationButton={false}
                    pitchEnabled={false}
                    initialRegion={initialRegion}
                >
                    {britianSkylinePlacesUegas.map((place: any, idx: number) => (
                        <Marker
                            key={idx}
                            coordinate={{
                                latitude: place.uegasCoordinatesBriti.lat,
                                longitude: place.uegasCoordinatesBriti.lng,
                            }}
                            onPress={() => setSelected(idx)}
                            tracksViewChanges={false}
                        />
                    ))}
                </MapView>
                {selected !== null && (
                    <BoxWraplineUegassky
                        style={{
                            transform: [{ scale: 0.88 }],
                            position: 'absolute',
                            alignSelf: 'center',
                            backgroundColor: 'transparent',
                            width: LINE_CARD_WIDTH,
                            zIndex: 10,
                            top: CARD_TOP,
                        }}
                    >
                        <BoxWraplineUegassky style={{
                            flexDirection: 'row',
                            width: '100%',
                            alignItems: 'flex-start',
                        }}>
                            <BoxWraplineUegassky style={{ flex: 1, }}>
                                <BritianUegasLocasCard
                                    place={britianSkylinePlacesUegas[selected]}
                                    onOpen={() => setSkyUegasAdditionalInternalOpened(true)}
                                    isBorder={true}
                                />
                            </BoxWraplineUegassky>
                            <TouchableOpacity
                                onPress={() => setSelected(null)}
                                activeOpacity={0.8}
                                style={{
                                    width: BRITIAN_CLOSE_SIZE,
                                    right: width * 0.059,
                                    justifyContent: 'center',
                                    height: BRITIAN_CLOSE_SIZE,
                                    bottom: width * 0.12,
                                    alignItems: 'center',
                                    position: 'absolute',
                                }}
                            >
                                <Image
                                    source={require('../SkylineBritainUegasAssets/SkylineBritainUegasImages/uegbriskyCloseIcoen.png')}
                                    style={{
                                        tintColor: '#fff',
                                        resizeMode: 'contain',
                                        height: KINGDOM_CLOSE_ICON_SIZE,
                                        width: KINGDOM_CLOSE_ICON_SIZE,
                                    }}
                                />
                            </TouchableOpacity>
                        </BoxWraplineUegassky>
                    </BoxWraplineUegassky>
                )}
            </BoxWraplineUegassky>
        </BoxWraplineUegassky>
    );
}
