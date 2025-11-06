import { kingdoUegasFonsBrit } from '../kingdoUegasFonsBrit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { useNavigation as useLineUegasBtiriNav } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';
import {
    TouchableWithoutFeedback,
    Dimensions,
    Image,
    Share,
    Text as LineTxtOfUegasBriti,
    Keyboard,
    View,
    Alert,
    TextInput,
    TouchableOpacity as TouchMe,
} from 'react-native';

// Dimensions
const { width: uegBritiWidth, height: uegBritiHeight } = Dimensions.get('window');

export default function LondBritProfileSetts() {
    const [profileName, setProfileName] = React.useState('');
    const [profilePhoto, setProfilePhoto] = React.useState<string | null>(null);
    const [regDate, setRegDate] = React.useState('');
    const [placesSaved, setPlacesSaved] = React.useState(0);
    const [editMode, setEditMode] = React.useState(false);
    const [editName, setEditName] = React.useState('');
    const lineNavigation = useLineUegasBtiriNav();

    React.useEffect(() => {
        const loadProfile = async () => {
            const name = await AsyncStorage.getItem('user_name');
            const photo = await AsyncStorage.getItem('user_photo');
            const date = await AsyncStorage.getItem('user_registration_date');
            const savedPlaces = await AsyncStorage.getItem('uegasLineBritianSavedSky');
            setProfileName(name || '');
            setProfilePhoto(photo || null);
            setRegDate(date || '');
            let count = 0;
            if (savedPlaces) {
                try {
                    const arr = JSON.parse(savedPlaces);
                    if (Array.isArray(arr)) count = arr.length;
                } catch {
                    count = 0;
                }
            }
            setPlacesSaved(count);
        };
        loadProfile();
    }, []);

    const handleDeleteProfile = async () => {
        Alert.alert(
            'Delete profile',
            'Are you sure you want to delete your profile?',
            [
                { text: 'Cancel', style: 'cancel' },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: async () => {
                        await AsyncStorage.multiRemove([
                            'user_name',
                            'user_photo',
                            'user_registration_date',
                            'saved_places',
                        ]);
                        setProfileName('');
                        setProfilePhoto(null);
                        setRegDate('');
                        setPlacesSaved(0);
                        lineNavigation.replace('LondonRegistrationForRemains');
                    },
                },
            ]
        );
    };

    const handleShareInfo = () => {
        const info = `Profile: ${profileName}\nRegistration date: ${regDate}\nPlaces saved: ${placesSaved}\n\nYou can create your own Skyline Britain Uegas profile using the Skyline Britain Uegas app!`;
        Share.share({ message: info });
    };

    const handleEditPress = () => {
        setEditName(profileName);
        setEditMode(true);
    };

    const handleEditBlur = async () => {
        setEditMode(false);
        setProfileName(editName);
        await AsyncStorage.setItem('user_name', editName);
        Keyboard.dismiss();
    };

    const handlePhotoPress = async () => {
        const result = await launchImageLibrary({
            mediaType: 'photo',
            quality: 0.8,
            includeBase64: false,
            selectionLimit: 1,
        });
        if (result.didCancel || result.errorCode) return;
        if (result.assets && result.assets.length > 0) {
            const uri = result.assets[0].uri || null;
            setProfilePhoto(uri);
            await AsyncStorage.setItem('user_photo', uri || '');
        }
    };

    return (
        <TouchableWithoutFeedback onPress={() => { if (editMode) handleEditBlur(); }}>
            <View style={{
                alignItems: 'center',
                paddingTop: uegBritiHeight * 0.04,
                marginTop: uegBritiHeight * 0.08,
                flex: 1,
                borderRadius: uegBritiWidth * 0.08,
                backgroundColor: 'rgba(12, 12, 12, 1)',
            }}>
                {/* Profile row */}
                <View style={{
                    marginBottom: uegBritiHeight * 0.04,
                    width: uegBritiWidth * 0.92,
                    flexDirection: 'row',
                    alignSelf: 'center',
                    alignItems: 'flex-start',
                }}>
                    <TouchMe
                        style={{
                            height: uegBritiWidth * 0.28,
                            backgroundColor: '#222',
                            borderRadius: uegBritiWidth * 0.06,
                            width: uegBritiWidth * 0.28,
                        }}
                        activeOpacity={0.8}
                        onPress={handlePhotoPress}
                    >
                        <Image
                            source={profilePhoto ? { uri: profilePhoto } : require('../SkylineBritainUegasAssets/SkylineBritainUegasImages/addPhotoOfUegasUser.png')}
                            style={{
                                width: uegBritiWidth * 0.28,
                                height: uegBritiWidth * 0.28,
                                borderRadius: uegBritiWidth * 0.04,
                            }}
                            resizeMode="cover"
                        />
                    </TouchMe>
                    <View style={{
                        backgroundColor: '#111',
                        borderColor: 'rgba(92, 92, 92, 1)',
                        flexDirection: 'row',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderRadius: uegBritiWidth * 0.039,
                        paddingHorizontal: uegBritiWidth * 0.04,
                        marginLeft: uegBritiWidth * 0.04,
                        height: uegBritiWidth * 0.14,
                        flex: 1,
                    }}>
                        {editMode ? (
                            <TextInput
                                style={{
                                    color: '#fff',
                                    fontSize: uegBritiWidth * 0.04,
                                    fontFamily: kingdoUegasFonsBrit.skyOnestLineRegular,
                                    flex: 1,
                                }}
                                placeholder="Your name"
                                value={editName}
                                autoFocus
                                maxLength={21}
                                onChangeText={setEditName}
                                placeholderTextColor="#888"
                                onBlur={handleEditBlur}
                            />
                        ) : (
                            <LineTxtOfUegasBriti
                                style={{
                                    color: '#fff',
                                    fontSize: uegBritiWidth * 0.04,
                                    fontFamily: kingdoUegasFonsBrit.skyOnestLineRegular,
                                    flex: 1,
                                    maxWidth: '80%',
                                }}
                                numberOfLines={1}
                                adjustsFontSizeToFit={true}
                            >
                                {profileName}
                            </LineTxtOfUegasBriti>
                        )}
                        <TouchMe
                            style={{
                                justifyContent: 'center',
                                width: uegBritiWidth * 0.07,
                                marginLeft: uegBritiWidth * 0.03,
                                alignItems: 'center',
                                height: uegBritiWidth * 0.07,
                            }}
                            activeOpacity={0.8}
                            onPress={handleEditPress}
                        >
                            <Image
                                source={require('../SkylineBritainUegasAssets/SkylineBritainUegasImages/editProfile.png')}
                                style={{
                                    width: uegBritiWidth * 0.068,
                                    height: uegBritiWidth * 0.068,
                                    resizeMode: 'contain',
                                }}
                            />
                        </TouchMe>
                    </View>
                </View>

                {/* Information */}
                <LineTxtOfUegasBriti
                    style={{
                        fontSize: uegBritiWidth * 0.05,
                        fontFamily: kingdoUegasFonsBrit.skyOnestLineSemiBold,
                        alignSelf: 'flex-start',
                        marginBottom: uegBritiHeight * 0.02,
                        marginLeft: uegBritiWidth * 0.04,
                        color: '#fff',
                    }}
                >
                    Information:
                </LineTxtOfUegasBriti>
                <View style={{
                    alignSelf: 'center',
                    marginBottom: uegBritiHeight * 0.01,
                    flexDirection: 'row',
                    width: uegBritiWidth * 0.92,
                }}>
                    <View style={{ flex: 1 }}>
                        <LineTxtOfUegasBriti style={{
                            marginBottom: uegBritiHeight * 0.005,
                            fontFamily: kingdoUegasFonsBrit.skyOnestLineRegular,
                            fontSize: uegBritiWidth * 0.035,
                            color: '#888',
                        }}>
                            Registration date:
                        </LineTxtOfUegasBriti>
                        <LineTxtOfUegasBriti style={{
                            color: '#fff',
                            fontSize: uegBritiWidth * 0.055,
                            fontFamily: kingdoUegasFonsBrit.skyOnestLineSemiBold,
                        }}>
                            {regDate}
                        </LineTxtOfUegasBriti>
                    </View>
                    <View style={{ flex: 1 }}>
                        <LineTxtOfUegasBriti style={{
                            marginBottom: uegBritiHeight * 0.005,
                            fontSize: uegBritiWidth * 0.035,
                            color: '#888',
                            fontFamily: kingdoUegasFonsBrit.skyOnestLineRegular,
                        }}>
                            Places saved:
                        </LineTxtOfUegasBriti>
                        <LineTxtOfUegasBriti style={{
                            color: '#fff',
                            fontSize: uegBritiWidth * 0.055,
                            fontFamily: kingdoUegasFonsBrit.skyOnestLineSemiBold,
                        }}>
                            {placesSaved}
                        </LineTxtOfUegasBriti>
                    </View>
                </View>

                {/* Кнопки внизу */}
                <View style={{
                    position: 'absolute',
                    bottom: uegBritiHeight * 0.04,
                    left: 0,
                    right: 0,
                    alignItems: 'center',
                }}>
                    <TouchMe
                        onPress={handleDeleteProfile}
                        style={{
                            height: uegBritiHeight * 0.08,
                            borderRadius: uegBritiWidth * 0.0611,
                            backgroundColor: '#900B0B',
                            marginBottom: uegBritiHeight * 0.02,
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: uegBritiWidth * 0.92,
                        }}
                        activeOpacity={0.8}
                    >
                        <LineTxtOfUegasBriti
                            style={{
                                letterSpacing: 0.5,
                                color: '#fff',
                                fontSize: uegBritiWidth * 0.05,
                                fontFamily: kingdoUegasFonsBrit.skyOnestLineSemiBold,
                            }}
                        >
                            Delete profile
                        </LineTxtOfUegasBriti>
                    </TouchMe>
                    <TouchMe
                        onPress={handleShareInfo}
                        style={{
                            height: uegBritiHeight * 0.08,
                            borderRadius: uegBritiWidth * 0.05,
                            borderWidth: 2,
                            justifyContent: 'center',
                            borderColor: 'rgba(92,92,92,0.5)',
                            backgroundColor: '#111',
                            alignItems: 'center',
                            width: uegBritiWidth * 0.92,
                        }}
                        activeOpacity={0.8}
                    >
                        <LineTxtOfUegasBriti
                            style={{
                                fontFamily: kingdoUegasFonsBrit.skyOnestLineSemiBold,
                                color: '#fff',
                                letterSpacing: 0.5,
                                fontSize: uegBritiWidth * 0.05,
                            }}
                        >
                            Share info
                        </LineTxtOfUegasBriti>
                    </TouchMe>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}