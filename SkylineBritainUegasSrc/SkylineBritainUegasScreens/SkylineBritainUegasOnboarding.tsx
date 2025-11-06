import { useNavigation as skyNavigationUsage } from '@react-navigation/native';
import lineSkyOnboardingSl from '../SkylineDataBritianUegas/lineSkyOnboardingSl'
import { kingdoUegasFonsBrit } from '../kingdoUegasFonsBrit';
import React, { useState as useBtitiStackUegas } from 'react';
import {
    useWindowDimensions as useBritiaWindowDimension,
    TouchableOpacity as OpacTouchSkybritia,
    Image as SkyImglineUegline,
    View as LineBoxSkyBritiian,
    Text as UegasLineTxtBtitian,
    SafeAreaView as BritSafeAreaianUegas,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SkylineBritainUegasOnboarding: React.FC = () => {
    const [uniqueBritianStepSkyIndexLine, setUniqueBritianStepSkyIndexLine] = useBtitiStackUegas(0);
    const { width: uegBritiWidth, height: uegBritiHeight } = useBritiaWindowDimension();
    const uniqueNavigator = skyNavigationUsage();

    const handleUniqueStepAdvance = async () => {
        const lastStepIdx = lineSkyOnboardingSl.length - 1;
        if (uniqueBritianStepSkyIndexLine < lastStepIdx) {
            setUniqueBritianStepSkyIndexLine(prev => prev + 1);
        } else {
            await AsyncStorage.setItem('line_uegas_btiri_first_startingApp', 'true');
            uniqueNavigator.replace?.('LondonRegistrationForRemains');
        }
    };

    return (
        <LineBoxSkyBritiian
            style={{
                alignItems: 'center',
                flex: 1,
                width: uegBritiWidth,
                height: uegBritiHeight,
            }}

        >
            <BritSafeAreaianUegas />

            <SkyImglineUegline
                resizeMode="cover"
                style={{
                    height: uegBritiHeight,
                    position: 'absolute',
                    width: uegBritiWidth,
                }}
                source={lineSkyOnboardingSl[uniqueBritianStepSkyIndexLine].imaLineUegasSkyline}
            />

            <LineBoxSkyBritiian
                style={{
                    borderTopLeftRadius: uegBritiWidth * 0.08,
                    justifyContent: 'flex-start',
                    position: 'absolute',
                    paddingVertical: uegBritiHeight * 0.03,
                    alignItems: 'flex-start',
                    bottom: 0,
                    width: '100%',
                    height: uegBritiHeight * 0.4,
                    paddingHorizontal: uegBritiWidth * 0.07,
                    borderTopRightRadius: uegBritiWidth * 0.08,
                    backgroundColor: '#0C0C0C',
                }}
            >
                <UegasLineTxtBtitian
                    style={{
                        textAlign: 'left',
                        color: '#fff',
                        fontFamily: kingdoUegasFonsBrit.skyOnestLineSemiBold,
                        fontSize: uegBritiWidth * 0.05,
                    }}
                    numberOfLines={1}
                >
                    {lineSkyOnboardingSl[uniqueBritianStepSkyIndexLine].onestSkyLineTitle}
                </UegasLineTxtBtitian>

                <UegasLineTxtBtitian
                    style={{
                        color: '#838383',
                        fontSize: uegBritiWidth * 0.04,
                        marginVertical: uegBritiHeight * 0.019,
                        textAlign: 'left',
                        fontFamily: kingdoUegasFonsBrit.skyOnestLineLight,
                    }}
                >
                    {lineSkyOnboardingSl[uniqueBritianStepSkyIndexLine].britiOnestLineDescr}
                </UegasLineTxtBtitian>

                <OpacTouchSkybritia
                    onPress={handleUniqueStepAdvance}
                    style={{
                        width: uegBritiWidth * 0.35,
                        height: uegBritiHeight * 0.08,
                        borderRadius: uegBritiWidth * 0.0611,
                        position: 'absolute',
                        backgroundColor: '#900B0B',
                        left: uegBritiWidth * 0.07,
                        alignSelf: 'flex-start',
                        alignItems: 'center',
                        marginTop: uegBritiHeight * 0.01,
                        bottom: uegBritiHeight * 0.07,
                        justifyContent: 'center',
                    }}
                    activeOpacity={0.8}
                >
                    <UegasLineTxtBtitian
                        style={{
                            letterSpacing: 0.5,
                            color: '#fff',
                            fontSize: uegBritiWidth * 0.04,
                            fontFamily: kingdoUegasFonsBrit.skyOnestLineSemiBold,
                        }}
                    >
                        {lineSkyOnboardingSl[uniqueBritianStepSkyIndexLine].uegasSkyBritianTxt}
                    </UegasLineTxtBtitian>
                </OpacTouchSkybritia>
            </LineBoxSkyBritiian>
        </LineBoxSkyBritiian>
    );
};

export default SkylineBritainUegasOnboarding;