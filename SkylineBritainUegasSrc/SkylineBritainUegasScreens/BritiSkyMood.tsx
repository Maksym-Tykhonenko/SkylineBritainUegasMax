import BtitiUegLoading from './BtitiUegLoading'; // додано
import { kingdoUegasFonsBrit } from '../kingdoUegasFonsBrit';
import { Share, View as LineWrapperSkyuegas, TouchableOpacity, Image, Text as UnitedKingdomUegasTxtline, Dimensions } from 'react-native';
import britianSkylinePlacesUegas from '../SkylineDataBritianUegas/britianSkylinePlacesUegas';
import BritianUegasLocasCard from '../SkylineBritainUegasComponents/BritianUegasLocasCard';
import React, { useState } from 'react';

// Dimensions
const { width, height } = Dimensions.get('window');

const britianMoodsUegas = [
    {
        key: 'sad',
        img: require('../SkylineBritainUegasAssets/SkylineBritainUegasImages/moodSad.png'), // ваше зображення
    },
    {
        key: 'neutral',
        img: require('../SkylineBritainUegasAssets/SkylineBritainUegasImages/moodNeutral.png'), // ваше зображення
    },
    {
        key: 'happy',
        img: require('../SkylineBritainUegasAssets/SkylineBritainUegasImages/moodHappy.png'), // ваше зображення
    },
];
const checkImg = require('../SkylineBritainUegasAssets/SkylineBritainUegasImages/skyCheckMood.png'); // ваше зображення чекбоксу

interface PropOfSkyMoodBriti {
    isSkyUegasAdditionalInternalOpened: boolean;
    setSkyUegasAdditionalInternalOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BritiSkyMood({ isSkyUegasAdditionalInternalOpened, setSkyUegasAdditionalInternalOpened }: PropOfSkyMoodBriti) {
    const [selected, setSelected] = useState<number | null>(null);
    const [britishRandUegasPlace, setBritishRandUegasPlace] = useState<any>(null);
    const [loadingStateKingd, setLoadingStateKingd] = useState(false);

    const handleStart = () => {
        setLoadingStateKingd(true);
        setTimeout(() => {
            const idx = Math.floor(Math.random() * britianSkylinePlacesUegas.length);
            setBritishRandUegasPlace(britianSkylinePlacesUegas[idx]);
            setSkyUegasAdditionalInternalOpened(true);
            // setStep('result');
            setLoadingStateKingd(false);
        }, 4444);
    };

    if (loadingStateKingd) {
        return (
            <LineWrapperSkyuegas style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <BtitiUegLoading />
            </LineWrapperSkyuegas>
        );
    }

    return (
        <LineWrapperSkyuegas style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            {!isSkyUegasAdditionalInternalOpened && (
                <LineWrapperSkyuegas style={{
                    shadowOffset: { width: 0, height: 4 },
                    elevation: 8,
                    borderRadius: width * 0.045,
                    alignItems: 'center',
                    width: width * 0.95,
                    paddingVertical: height * 0.045,
                    shadowColor: '#000',
                    shadowOpacity: 0.18,
                    backgroundColor: '#0C0C0C',
                    shadowRadius: 8,
                }}>
                    <UnitedKingdomUegasTxtline style={{
                        letterSpacing: 0.5,
                        marginBottom: height * 0.04,
                        fontSize: width * 0.06,
                        color: '#fff',
                        fontFamily: kingdoUegasFonsBrit.skyOnestLineSemiBold,
                    }}>
                        CHOOSE A MOOD:
                    </UnitedKingdomUegasTxtline>
                    {/* Емоції: два зверху, один знизу */}
                    <LineWrapperSkyuegas style={{
                        marginBottom: height * 0.03,
                        alignItems: 'center',
                        width: '100%',
                    }}>
                        {/* Верхній ряд: sad (0), happy (2) */}
                        <LineWrapperSkyuegas style={{
                            paddingHorizontal: width * 0.09,
                            marginBottom: height * 0.025,
                            width: '100%',
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                        }}>
                            {[0, 2].map(idx => (
                                <TouchableOpacity
                                    key={britianMoodsUegas[idx].key}
                                    activeOpacity={0.8}
                                    onPress={() => setSelected(idx)}
                                    style={{
                                        alignItems: 'center',
                                    }}
                                >
                                    <LineWrapperSkyuegas>
                                        <Image
                                            source={britianMoodsUegas[idx].img}
                                            style={{
                                                width: width * 0.23,
                                                height: width * 0.23,
                                                borderRadius: width * 0.115,
                                            }}
                                        />
                                        {selected === idx && (
                                            <Image
                                                source={checkImg}
                                                style={{
                                                    width: width * 0.12,
                                                    height: width * 0.12,
                                                    bottom: -width * 0.025,
                                                    right: -width * 0.019,
                                                    position: 'absolute',
                                                }}
                                            />
                                        )}
                                    </LineWrapperSkyuegas>
                                </TouchableOpacity>
                            ))}
                        </LineWrapperSkyuegas>
                        {/* Нижній ряд: neutral (1) */}
                        <LineWrapperSkyuegas style={{
                            alignItems: 'center',
                            width: '100%',
                        }}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => setSelected(1)}
                                style={{
                                    alignItems: 'center',
                                }}
                            >
                                <LineWrapperSkyuegas>
                                    <Image
                                        source={britianMoodsUegas[1].img}
                                        style={{
                                            borderRadius: width * 0.115,
                                            height: width * 0.23,
                                            width: width * 0.23,
                                        }}
                                    />
                                    {selected === 1 && (
                                        <Image
                                            source={checkImg}
                                            style={{
                                                height: width * 0.09,
                                                bottom: width * 0.01,
                                                position: 'absolute',
                                                width: width * 0.09,
                                                right: width * 0.01,
                                            }}
                                        />
                                    )}
                                </LineWrapperSkyuegas>
                            </TouchableOpacity>
                        </LineWrapperSkyuegas>
                    </LineWrapperSkyuegas>
                    <TouchableOpacity
                        disabled={selected === null}
                        activeOpacity={selected === null ? 1 : 0.85}
                        onPress={handleStart}
                        style={{
                            opacity: selected === null ? 0.5 : 1,
                            height: height * 0.085,
                            backgroundColor: '#900B0B',
                            marginTop: height * 0.03,
                            borderRadius: width * 0.09,
                            width: width * 0.7,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <UnitedKingdomUegasTxtline style={{
                            fontFamily: kingdoUegasFonsBrit.skyOnestLineSemiBold,
                            fontSize: width * 0.055,
                            letterSpacing: 0.5,
                            color: '#fff',
                        }}>
                            Start
                        </UnitedKingdomUegasTxtline>
                    </TouchableOpacity>
                </LineWrapperSkyuegas>
            )}
            {isSkyUegasAdditionalInternalOpened && (
                <>
                    <LineWrapperSkyuegas style={{
                        elevation: 8,
                        paddingVertical: height * 0.04,
                        backgroundColor: '#0C0C0C',
                        borderRadius: width * 0.045,
                        alignItems: 'center',
                        shadowOffset: { width: 0, height: 4 },
                        width: width * 0.95,
                        shadowOpacity: 0.18,
                        shadowRadius: 8,
                        marginTop: -height * 0.08,
                        paddingBottom: 0,
                        shadowColor: '#000',
                    }}>
                        <UnitedKingdomUegasTxtline style={{
                            marginBottom: height * 0.025,
                            fontFamily: kingdoUegasFonsBrit.skyOnestLineSemiBold,
                            color: '#fff',
                            fontSize: width * 0.055,
                            letterSpacing: 0.5,
                        }}>
                            YOUR MOOD:
                        </UnitedKingdomUegasTxtline>
                        <Image
                            source={selected !== null ? britianMoodsUegas[selected].img : britianMoodsUegas[1].img}
                            style={{
                                marginBottom: height * 0.04,
                                width: width * 0.26,
                                borderRadius: width * 0.13,
                                height: width * 0.26,
                            }}
                        />
                        <UnitedKingdomUegasTxtline style={{
                            fontFamily: kingdoUegasFonsBrit.skyOnestLineSemiBold,
                            fontSize: width * 0.05,
                            color: '#fff',
                            letterSpacing: 0.5,
                        }}>
                            RECOMENDED PLACE:
                        </UnitedKingdomUegasTxtline>
                        <LineWrapperSkyuegas style={{
                            width: '100%',
                            alignItems: 'center',
                        }}>
                            <LineWrapperSkyuegas style={{
                                alignItems: 'center',
                                width: '100%',
                                transform: [{ scale: 0.8 }],
                            }}>
                                {britishRandUegasPlace && (
                                    <BritianUegasLocasCard
                                        place={britishRandUegasPlace}
                                        onOpen={() => { }}
                                        isBorder={true}
                                        dontShowOpen={true}
                                    />
                                )}
                            </LineWrapperSkyuegas>

                        </LineWrapperSkyuegas>
                    </LineWrapperSkyuegas>
                    <TouchableOpacity
                        style={{
                            marginTop: height * 0.01,
                            height: height * 0.085,
                            backgroundColor: '#900B0B',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: width * 0.0611,
                            width: width * 0.7,
                        }}
                        activeOpacity={0.85}
                        onPress={() => {
                            Share.share({
                                message: `My mood is ${britianMoodsUegas[selected!].key.toUpperCase()}! I got a recommended place: ${britishRandUegasPlace.britianName}.`
                            })
                        }}
                    >
                        <UnitedKingdomUegasTxtline style={{
                            letterSpacing: 0.5,
                            color: '#fff',
                            fontSize: width * 0.055,
                            fontFamily: kingdoUegasFonsBrit.skyOnestLineSemiBold,
                        }}>
                            Share result
                        </UnitedKingdomUegasTxtline>
                    </TouchableOpacity>
                </>
            )}
        </LineWrapperSkyuegas>
    );
}
