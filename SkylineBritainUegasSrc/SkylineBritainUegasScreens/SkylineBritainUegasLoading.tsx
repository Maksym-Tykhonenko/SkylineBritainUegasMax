import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation as useLineUegasBtiriNav } from '@react-navigation/native';
const LINE_UEGAS_BTIRI_LAUNCH_KEY = 'line_uegas_btiri_first_startingApp';
import React, { useEffect as useSkyBritiEffect } from 'react';
const SLYLINE_BRITIAN_UEGAS_USER_KEY = 'slyline_britian_uegas_user_profile-mood-tracking';
import {
    Dimensions as SlylineBritianUegasDims,

    View as BritiLineRootBox,

    Image as UegasSkylineBgImg,

} from 'react-native';

import BtitiUegLoading from './BtitiUegLoading';


const SkylineBritainUegasLoading: React.FC = () => {
    const lineUegasBtiriNav = useLineUegasBtiriNav();

    const { width: slylineBritianW, height: slylineBritianH } = SlylineBritianUegasDims.get('window');

    useSkyBritiEffect(() => {
        const slylineBritianUegasInit = async () => {
            // AsyncStorage.clear(); // Видаляємо всі дані AsyncStorage перед перевіркою
            try {
                const [lineUegasBtiriLaunch, slylineBritianUegasUser, userName, userPhoto] = await Promise.all([
                    AsyncStorage.getItem(LINE_UEGAS_BTIRI_LAUNCH_KEY),
                    AsyncStorage.getItem(SLYLINE_BRITIAN_UEGAS_USER_KEY),
                    AsyncStorage.getItem('user_name'),
                    AsyncStorage.getItem('user_photo'),
                ]);

                if (lineUegasBtiriLaunch === null) {
                    // Онбординг ще не був пройдений
                    setTimeout(() => {
                        lineUegasBtiriNav.replace('SkylineBritainUegasOnboarding');
                    }, 5950);
                    return;
                }

                if (!userName || !userPhoto) {
                    // Онбординг був, але профіль не заповнений
                    setTimeout(() => {
                        lineUegasBtiriNav.replace('LondonRegistrationForRemains');
                    }, 5950);
                    return;
                }

                // Все є, йдемо в основний екран
                setTimeout(() => {
                    lineUegasBtiriNav.replace('KingdomBritianWrapperToAppLineSkyUegasUK');
                }, 5950);

            } catch (errSlylineBritian) {
                if (__DEV__) console.warn('SkylineBritainUegasLoading:init', errSlylineBritian);
                setTimeout(() => {
                    lineUegasBtiriNav.replace('SkylineBritainUegasOnboarding');
                }, 5950);
            }
        };

        slylineBritianUegasInit();
    }, [lineUegasBtiriNav, slylineBritianW]);

    return (
        <BritiLineRootBox
        style={{
                justifyContent: 'center',
                width: slylineBritianW,
                flex: 1,
                height: slylineBritianH,
                alignItems: 'center',
            }}
        >
            <UegasSkylineBgImg
                source={require('../SkylineBritainUegasAssets/SkylineBritainUegasImages/britianBgImage.png')}
                style={{
                    height: slylineBritianH,
                    position: 'absolute',
                    resizeMode: 'cover',
                    width: slylineBritianW,
                }}
            />
            <BtitiUegLoading />
        </BritiLineRootBox>
    );
};
export default SkylineBritainUegasLoading;