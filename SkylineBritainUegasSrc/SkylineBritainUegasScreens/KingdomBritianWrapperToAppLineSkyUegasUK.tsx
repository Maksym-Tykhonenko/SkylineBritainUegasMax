import BritiSkyMood from './BritiSkyMood';
import BritianUegasLocas from './BritianUegasLocas';
import UegasSkyInterMap from './UegasSkyInterMap';
type UKNamesOfScreensAre =
    | 'Uegas Transition Brit'
    | 'Skyline Mood Britian Uegas'
    | 'Uegas Interactive Map Skyli'
    | 'Britian Saved Skyli Places Uegas'
    | 'Britian Places All Uegas'
    | 'London Profile Settings Uegas'
    | 'Uegas Info Britian Skyline';
import SkyUegasBritianInformation from './SkyUegasBritianInformation';
import React, { useState as useUegasStatementUK, useEffect, } from 'react';
import { kingdoUegasFonsBrit } from '../kingdoUegasFonsBrit';
import {
    Image as ImagsageuNiatirbyks,
    Keyboard,
    Text as BritianWithTxtKingdom,
    Platform as PlatInfo,
    TouchableOpacity as ActionTouchForUnited,
    Dimensions as DeviceMetrics,
    View as PortLineBritishView,
    TouchableWithoutFeedback,
    SafeAreaView as SafeBoxBritianLine,
} from 'react-native';
import UegBritianVisitConnecSky from './UegBritianVisitConnecSky';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LondBritProfileSetts from './LondBritProfileSetts';
const { width: britiUegaWidthSkyline, height: lineBritishSkyHeight } = DeviceMetrics.get('window');

const KingdomBritianWrapperToAppLineSkyUegasUK: React.FC = () => {
    const [britianUegasScreenOn, setBritianUegasScreenOn] = useUegasStatementUK<UKNamesOfScreensAre>('Uegas Transition Brit');
    const isUegasAndroSystem = PlatInfo.OS === 'android';

    const [isSkyUegasAdditionalInternalOpened, setSkyUegasAdditionalInternalOpened] = useUegasStatementUK(false);  
    const [showWhichList, setShowWhichList] = useUegasStatementUK<'all' | 'saved'>('all');
    const [profileName, setProfileName] = useUegasStatementUK<string>('');
    const [profilePhoto, setProfilePhoto] = useUegasStatementUK<string | null>(null);

    const displayMoodScene = () => {
        switch (britianUegasScreenOn) {
            case 'Uegas Transition Brit':
                return <UegBritianVisitConnecSky setBritianUegasScreenOn={setBritianUegasScreenOn} />;
            case 'Britian Places All Uegas':
            case 'Britian Saved Skyli Places Uegas':
                return <BritianUegasLocas isSkyUegasAdditionalInternalOpened={isSkyUegasAdditionalInternalOpened} setSkyUegasAdditionalInternalOpened={setSkyUegasAdditionalInternalOpened} showWhichList={showWhichList} />;
            case 'Skyline Mood Britian Uegas':
                return <BritiSkyMood isSkyUegasAdditionalInternalOpened={isSkyUegasAdditionalInternalOpened} setSkyUegasAdditionalInternalOpened={setSkyUegasAdditionalInternalOpened}/>;
            case 'Uegas Interactive Map Skyli': 
                return <UegasSkyInterMap isSkyUegasAdditionalInternalOpened={isSkyUegasAdditionalInternalOpened} setSkyUegasAdditionalInternalOpened={setSkyUegasAdditionalInternalOpened}/>;
            case 'Uegas Info Britian Skyline':
                return <SkyUegasBritianInformation />;
            case 'London Profile Settings Uegas':
                return <LondBritProfileSetts />
            default:
                return (
                    <PortLineBritishView>
                        <BritianWithTxtKingdom style={{ color: 'white' }}>Coming soon</BritianWithTxtKingdom>
                    </PortLineBritishView>
                );
        }
    };

    useEffect(() => {
        switch (britianUegasScreenOn) {
            case 'Britian Places All Uegas':
                setShowWhichList('all');
                break;
            case 'Britian Saved Skyli Places Uegas':
                setShowWhichList('saved');
                break;
            default:
                break;
        }
    }, [britianUegasScreenOn]);

    const getBritishTitleForScreen = (screen: UKNamesOfScreensAre) => {
        switch (screen) {
            case 'Uegas Transition Brit':
                return 'Uegas Transition Brit';
            case 'Britian Places All Uegas':
                return 'ALL PLACES';
            case 'Britian Saved Skyli Places Uegas':
                return 'SAVED PLACES';
            case 'Skyline Mood Britian Uegas':
                return 'SKYLINE MOOD';
            case 'Uegas Interactive Map Skyli':
                return 'INTERACTIVE MAP';
            case 'Uegas Info Britian Skyline':
                return 'INFORMATION';
            case 'London Profile Settings Uegas':
                return 'PROFILE';
            default:
                return '';
        }
    }

    const headerLabel = getBritishTitleForScreen(britianUegasScreenOn);


    React.useEffect(() => {
        const loadProfile = async () => {
            const name = await AsyncStorage.getItem('user_name');
            const photo = await AsyncStorage.getItem('user_photo');
            setProfileName(name || '');
            setProfilePhoto(photo || null);
        };
        loadProfile();
    }, []);

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <PortLineBritishView
                style={{
                    backgroundColor: '#0c0c0c',
                    width: britiUegaWidthSkyline,
                    flex: 1,
                    height: lineBritishSkyHeight,
                }}
            >
                <ImagsageuNiatirbyks
                    source={require('../SkylineBritainUegasAssets/SkylineBritainUegasImages/britianBgImage.png')}
                    style={{
                        resizeMode: 'cover',
                        height: lineBritishSkyHeight,
                        width: britiUegaWidthSkyline,
                        position: 'absolute',
                    }}
                />
                <SafeBoxBritianLine />

                {britianUegasScreenOn !== 'Uegas Transition Brit' && (
                    <PortLineBritishView style={{
                        marginTop: isUegasAndroSystem ? lineBritishSkyHeight * 0.03905435 : 0,
                        alignItems: 'center',
                        flexDirection: 'row',
                        width: britiUegaWidthSkyline * 0.910523,
                        borderRadius: britiUegaWidthSkyline * 0.0310345,
                        height: lineBritishSkyHeight * 0.107453,
                        justifyContent: 'flex-start',
                        gap: britiUegaWidthSkyline * 0.03757139,
                        alignSelf: 'center',
                        backgroundColor: '#0C0C0C',
                        padding: britiUegaWidthSkyline * 0.0250543,
                    }}>
                        <ActionTouchForUnited style={{
                            alignItems: 'center',
                            width: lineBritishSkyHeight * 0.064,
                            justifyContent: 'center',
                            borderRadius: britiUegaWidthSkyline * 0.04,
                            backgroundColor: '#900B0B',
                            height: lineBritishSkyHeight * 0.064,
                        }}
                            onPress={() => {
                                if (isSkyUegasAdditionalInternalOpened) {
                                    setSkyUegasAdditionalInternalOpened(false);
                                    return
                                } else setBritianUegasScreenOn('Uegas Transition Brit');
                            }}
                        >
                            <ImagsageuNiatirbyks
                                source={require('../SkylineBritainUegasAssets/SkylineBritainUegasImages/britianarrowSkyLeft.png')}
                                style={{
                                    resizeMode: 'contain',
                                    height: britiUegaWidthSkyline * 0.05390534,
                                    width: britiUegaWidthSkyline * 0.05390534,
                                }}
                            />

                        </ActionTouchForUnited>
                        <BritianWithTxtKingdom style={{
                            textTransform: 'uppercase',
                            maxWidth: britiUegaWidthSkyline * 0.6117542,
                            fontFamily: kingdoUegasFonsBrit.skyOnestLineSemiBold,
                            color: 'white',
                            fontSize: britiUegaWidthSkyline * 0.073852379,
                        }} numberOfLines={1} adjustsFontSizeToFit>
                            {headerLabel}
                        </BritianWithTxtKingdom>
                    </PortLineBritishView>
                )}

                <SafeBoxBritianLine />
                {displayMoodScene()}
            </PortLineBritishView>
        </TouchableWithoutFeedback>
    );
};

export default KingdomBritianWrapperToAppLineSkyUegasUK;