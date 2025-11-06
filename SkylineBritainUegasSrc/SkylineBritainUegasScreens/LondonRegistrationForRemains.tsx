import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation as useLineUegasBtiriNav } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { kingdoUegasFonsBrit } from '../kingdoUegasFonsBrit';
import {
    Alert,
    Dimensions as SlylineBritianUegasDims,
    TouchableWithoutFeedback,
    View as BritiLineRootBox,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Image as UegasSkylineBgImg,
    Keyboard,
    Platform,
} from 'react-native';

const LondonRegistrationForRemains: React.FC = () => {
    const lineUegasBtiriNav = useLineUegasBtiriNav();
    const { width: slylineBritianW, height: slylineBritianH } = SlylineBritianUegasDims.get('window');

    const [photoUri, setPhotoUri] = useState<string | null>(null);
    const [name, setName] = useState<string>('');

    // Стилі через Dimensions
    const styles = StyleSheet.create({
        container: {
            width: slylineBritianW,
            height: slylineBritianH,
            flex: 1,
            backgroundColor: '#111',
            alignItems: 'center',
        },
        logo: {
            marginTop: slylineBritianH * 0.05,
            marginBottom: slylineBritianH * 0.025,
        },
        title: {
            textAlign: 'center',
            fontFamily: kingdoUegasFonsBrit.skyOnestLineSemiBold,
            color: '#fff',
            marginBottom: slylineBritianH * 0.01,
            marginTop: slylineBritianH * 0.02,
            fontSize: slylineBritianW * 0.07,
        },
        subtitle: {
            marginBottom: slylineBritianH * 0.04,
            fontSize: slylineBritianW * 0.035,
            fontFamily: kingdoUegasFonsBrit.skyOnestLineLight,
            textAlign: 'center',
            color: 'rgba(92, 92, 92, 1)',
        },
        photoBox: {
            overflow: 'hidden',
            height: slylineBritianW * 0.32,
            borderRadius: slylineBritianW * 0.04,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: slylineBritianH * 0.03,
            borderColor: '#444',
            borderWidth: 1,
            width: slylineBritianW * 0.32,
        },
        addPhotoIcon: {
            fontSize: slylineBritianW * 0.1,
            color: '#fff',
        },
        inputBox: {
            height: slylineBritianH * 0.06,
            borderRadius: slylineBritianW * 0.03,
            borderColor: '#444',
            fontFamily: kingdoUegasFonsBrit.skyOnestLineRegular,
            borderWidth: 1,
            width: slylineBritianW * 0.55,
            fontSize: slylineBritianW * 0.04,
            paddingHorizontal: slylineBritianW * 0.04,
            marginBottom: slylineBritianH * 0.04,
            color: '#fff',
        },
        continueBtn: {
            marginTop: slylineBritianH * 0.02,
            height: slylineBritianH * 0.06,
            justifyContent: 'center',
            borderRadius: slylineBritianW * 0.03,
            backgroundColor: '#b00',
            alignItems: 'center',
            width: slylineBritianW * 0.55,
        },
        continueBtnDisabled: {
            backgroundColor: '#444',
        },
        continueText: {
            color: '#fff',
            fontSize: slylineBritianW * 0.05,
            fontWeight: 'bold',
        },
        photoImg: {
            width: '100%',
            height: '100%',
            borderRadius: slylineBritianW * 0.04,
        },
    });

    const pickPhoto = async () => {
        const result = await launchImageLibrary({
            mediaType: 'photo',
            quality: 0.8,
            includeBase64: false,
            selectionLimit: 1,
        });
        if (result.didCancel) {
            return;
        }
        if (result.errorCode) {
            Alert.alert('Error', result.errorMessage || 'Unknown error');
            return;
        }
        if (result.assets && result.assets.length > 0) {
            setPhotoUri(result.assets[0].uri || null);
        }
    };

    const handleContinue = async () => {
        if (name && photoUri) {
            await AsyncStorage.setItem('user_name', name);
            await AsyncStorage.setItem('user_photo', photoUri);
            // Зберігаємо дату реєстрації у форматі DD.MM.YYYY
            const now = new Date();
            const regDate = `${String(now.getDate()).padStart(2, '0')}.${String(now.getMonth() + 1).padStart(2, '0')}.${now.getFullYear()}`;
            await AsyncStorage.setItem('user_registration_date', regDate);
            // Навігація на наступний екран
            lineUegasBtiriNav.navigate('KingdomBritianWrapperToAppLineSkyUegasUK'); // замініть на ваш екран
        }
    };

    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
            <BritiLineRootBox style={styles.container}>
                <SafeAreaView />
                <UegasSkylineBgImg
                    source={require('../SkylineBritainUegasAssets/SkylineBritainUegasImages/britianBgImage.png')}
                    style={{
                        resizeMode: 'cover',
                        width: slylineBritianW,
                        position: 'absolute',
                        height: slylineBritianH,
                    }}
                />
                <UegasSkylineBgImg
                    source={Platform.OS === 'android' 
                        ? require('../SkylineBritainUegasAssets/SkylineBritainUegasImages/leoLineIcoImage.png')
                        : require('../SkylineBritainUegasAssets/SkylineBritainUegasImages/brititanSmallIcon.png')}
                    style={[styles.logo, {
                        height: slylineBritianW * 0.31,
                        width: slylineBritianW * 0.31,
                        borderRadius: slylineBritianW * 0.08,
                    }]}
                />
                <BritiLineRootBox style={{
                    alignItems: 'center',
                    width: slylineBritianW,
                    borderRadius: slylineBritianW * 0.08,
                    paddingHorizontal: slylineBritianW * 0.05,
                    backgroundColor: 'rgba(12, 12, 12, 1)',
                    flex: 1
                }}>
                    <Text style={styles.title}>Registration</Text>
                    <Text style={styles.subtitle}>Your personal information remains on your device</Text>
                    <TouchableOpacity style={styles.photoBox} onPress={pickPhoto}>
                        {photoUri ? (
                            <UegasSkylineBgImg source={{ uri: photoUri }} style={styles.photoImg} />
                        ) : (
                            <>
                                <UegasSkylineBgImg
                                    source={require('../SkylineBritainUegasAssets/SkylineBritainUegasImages/addPhotoOfUegasUser.png')}
                                    style={{
                                        height: slylineBritianW * 0.08,
                                        width: slylineBritianW * 0.08,
                                    }}
                                    resizeMode='contain'
                                />
                                <Text style={{ color: 'rgba(92, 92, 92, 1)', marginTop: slylineBritianH * 0.01 }}>Add photo</Text>
                            </>
                        )}
                    </TouchableOpacity>
                    <TextInput
                        style={styles.inputBox}
                        placeholder="Your name"
                        placeholderTextColor="#888"
                        value={name}
                        onChangeText={setName}
                        maxLength={21}
                    />
                    <TouchableOpacity
                        style={[
                            styles.continueBtn,
                            !(name && photoUri) && styles.continueBtnDisabled,
                            {
                                opacity: !(name && photoUri) ? 0 : 1,
                            }
                        ]}
                        disabled={!(name && photoUri)}
                        onPress={handleContinue}
                    >
                        <Text style={styles.continueText}>Continue</Text>
                    </TouchableOpacity>
                </BritiLineRootBox>
            </BritiLineRootBox>
        </TouchableWithoutFeedback>
    );
};

export default LondonRegistrationForRemains;