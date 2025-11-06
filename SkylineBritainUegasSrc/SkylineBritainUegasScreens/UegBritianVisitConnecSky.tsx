import React from 'react';
import { View, Text as BritiSkylTxtUegasOf, TouchableOpacity as UnitePressNowTachbr, Image, StyleSheet, Dimensions, Share, Platform } from 'react-native';
import { kingdoUegasFonsBrit } from '../kingdoUegasFonsBrit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import britainDayliData from '../SkylineDataBritianUegas/britainDayliData';
import { ScrollView } from 'react-native-gesture-handler';
const { width } = Dimensions.get('window');
import blogBritianData from '../SkylineDataBritianUegas/blogBritianData';
import UegasUnitedBlogModal from './UegasUnitedBlogModal';
export default function UegBritianVisitConnecSky({ setBritianUegasScreenOn }) {
  const [profileName, setProfileName] = React.useState('');
  const [profilePhoto, setProfilePhoto] = React.useState<string | null>(null);
  const [blogModalVisible, setBlogModalVisible] = React.useState(false);
  const [selectedBlog, setSelectedBlog] = React.useState<any | null>(null);

  const openRandomBlog = () => {
    const idx = Math.floor(Math.random() * blogBritianData.length);
    setSelectedBlog(blogBritianData[idx]);
    setBlogModalVisible(true);
  };
  // Daily fact state
  const [dailyFact, setDailyFact] = React.useState('');
  const FACT_KEY = 'britain_daily_fact_index';
  const FACT_DATE_KEY = 'britain_daily_fact_date';

  React.useEffect(() => {
    const loadProfile = async () => {
      const name = await AsyncStorage.getItem('user_name');
      const photo = await AsyncStorage.getItem('user_photo');
      setProfileName(name || '');
      setProfilePhoto(photo || null);
    };
    loadProfile();
  }, []);

  // Helper to get today's index
  const getTodayFactIndex = () => {
    const today = new Date();
    const day = today.getDate();
    return (day - 1) % britainDayliData.length;
  };

  const loadDailyFact = async () => {
    const todayStr = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
    const savedDate = await AsyncStorage.getItem(FACT_DATE_KEY);
    let factIndex: number;

    if (savedDate === todayStr) {
      // Same day, use saved index
      const savedIndex = await AsyncStorage.getItem(FACT_KEY);
      factIndex = savedIndex ? parseInt(savedIndex, 10) : getTodayFactIndex();
    } else {
      // New day, calculate index and save
      factIndex = getTodayFactIndex();
      await AsyncStorage.setItem(FACT_KEY, factIndex.toString());
      await AsyncStorage.setItem(FACT_DATE_KEY, todayStr);
    }
    setDailyFact(britainDayliData[factIndex].britFact);
  };

  React.useEffect(() => {
    loadDailyFact();

    // Set timer for midnight update
    const now = new Date();
    const msUntilMidnight =
      new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 1).getTime() - now.getTime();
    const midnightTimer = setTimeout(() => {
      loadDailyFact();
    }, msUntilMidnight);

    return () => clearTimeout(midnightTimer);
  }, []);

  return (
    <View style={styles.container}>
      {/* Profile header */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: width * 0.92,
        alignSelf: 'center',
        marginBottom: width * 0.06,
        marginTop: width * 0.01,
      }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          flex: 1,
        }}>
          <Image
            source={profilePhoto ? { uri: profilePhoto } : require('../SkylineBritainUegasAssets/SkylineBritainUegasImages/leoLineIcoImage.png')}
            style={{
              width: width * 0.14,
              height: width * 0.14,
              borderRadius: width * 0.035,
              marginRight: width * 0.03,
              backgroundColor: '#222',
            }}
            resizeMode="cover"
          />
          <BritiSkylTxtUegasOf
            style={{
              color: '#fff',
              fontSize: width * 0.055,
              fontFamily: kingdoUegasFonsBrit.skyOnestLineSemiBold,
              textAlign: 'left',
              maxWidth: '75%',
            }}
            numberOfLines={1}
            adjustsFontSizeToFit={true}
          >
            {profileName ? `Hello, ${profileName}` : 'Hello, Guest'}
          </BritiSkylTxtUegasOf>
        </View>
        <UnitePressNowTachbr
          style={{
            marginLeft: width * 0.04,
            width: width * 0.14,
            height: width * 0.14,
            borderRadius: width * 0.035,
            backgroundColor: '#0C0C0C',
            borderWidth: 2,
            borderColor: 'rgba(144, 11, 11, 1)',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          activeOpacity={0.8}
          onPress={() => {
            setBritianUegasScreenOn('London Profile Settings Uegas');
          }}
        >
          <Image
            source={require('../SkylineBritainUegasAssets/SkylineBritainUegasImages/addPhotoOfUegasUser.png')}
            style={{
              width: width * 0.06,
              height: width * 0.06,
              resizeMode: 'contain',
            }}
          />
        </UnitePressNowTachbr>
      </View>

      <ScrollView style={{
        flex: 1,
        height: '100%',
      }} contentContainerStyle={{ paddingBottom: width * 0.2 }} showsVerticalScrollIndicator={false}>
        {/* DAILY FACT CARD */}
        <View
          style={{
            backgroundColor: 'rgba(12, 12, 12, 1)',
            borderRadius: width * 0.07,
            padding: width * 0.06,
            width: width * 0.92,
            alignSelf: 'center',
            marginBottom: width * 0.05,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ flex: 1 }}>
            <BritiSkylTxtUegasOf
              style={{
                color: '#fff',
                fontSize: width * 0.053,
                fontFamily: kingdoUegasFonsBrit.skyOnestLineBold,
                marginBottom: width * 0.01,
              }}
            >
              Daily facts:
            </BritiSkylTxtUegasOf>
            <BritiSkylTxtUegasOf
              style={{
                color: '#fff',
                fontSize: width * 0.04,
                fontFamily: kingdoUegasFonsBrit.skyOnestLineRegular,
                marginTop: width * 0.01,
              }}
            >
              {dailyFact}
            </BritiSkylTxtUegasOf>
          </View>
          <UnitePressNowTachbr
            onPress={() => {
              Share.share({
                message: `${dailyFact}\n\nNew day - new fact in the Skyline Britain Uegas app!`
              })
            }}
            style={{
              backgroundColor: 'rgba(144, 11, 11, 1)',
              borderRadius: width * 0.031,
              width: width * 0.14,
              height: width * 0.14,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: width * 0.04,
            }}
          >
            <Image
              source={require('../SkylineBritainUegasAssets/SkylineBritainUegasImages/shareSkyWithDots.png')}
              style={{
                width: width * 0.053,
                height: width * 0.053,
                resizeMode: 'contain',
                tintColor: '#fff',
              }}
            />
          </UnitePressNowTachbr>
        </View>

        <UnitePressNowTachbr onPress={openRandomBlog}>
          <Image
            source={require('../SkylineBritainUegasAssets/SkylineBritainUegasImages/britishLegendsButton.png')}
            style={[styles.card, {
              paddingHorizontal: 0
            }]}
            resizeMode='stretch'
          />
        </UnitePressNowTachbr>

        {/* PLACES LIST */}
        <View style={styles.card}>
          <Image
            source={require('../SkylineBritainUegasAssets/SkylineBritainUegasImages/placesListIco.png')}
            style={styles.icon}
            resizeMode="contain"
          />
          <View style={styles.cardContent}>
            <BritiSkylTxtUegasOf style={styles.cardTitle}>PLACES LIST</BritiSkylTxtUegasOf>
            <UnitePressNowTachbr style={styles.button} onPress={() => {
              setBritianUegasScreenOn('Britian Places All Uegas');
            }}>
              <BritiSkylTxtUegasOf style={styles.buttonText}>Open Places</BritiSkylTxtUegasOf>
            </UnitePressNowTachbr>
          </View>
        </View>

        {/* SKYLINE MOOD */}
        <View style={styles.card}>
          <Image
            source={require('../SkylineBritainUegasAssets/SkylineBritainUegasImages/uegasMood.png')}
            style={styles.icon}
            resizeMode="contain"
          />
          <View style={styles.cardContent}>
            <BritiSkylTxtUegasOf style={styles.cardTitle}>SKYLINE MOOD</BritiSkylTxtUegasOf>
            <UnitePressNowTachbr style={styles.button} onPress={() => {
              setBritianUegasScreenOn('Skyline Mood Britian Uegas');
            }}>
              <BritiSkylTxtUegasOf style={styles.buttonText}>Open</BritiSkylTxtUegasOf>
            </UnitePressNowTachbr>
          </View>
        </View>

        {/* INTERACTIVE MAP */}
        {Platform.OS !== 'android' && (
          <View style={styles.card}>
            <Image
              source={require('../SkylineBritainUegasAssets/SkylineBritainUegasImages/partOfMap.png')}
              style={styles.icon}
              resizeMode="contain"
            />
            <View style={styles.cardContent}>
              <BritiSkylTxtUegasOf style={styles.cardTitle}>INTERACTIVE MAP</BritiSkylTxtUegasOf>
              <UnitePressNowTachbr style={styles.button} onPress={() => {
                setBritianUegasScreenOn('Uegas Interactive Map Skyli');
              }}>
                <BritiSkylTxtUegasOf style={styles.buttonText}>Open map</BritiSkylTxtUegasOf>
              </UnitePressNowTachbr>
            </View>
          </View>
        )}
      </ScrollView>


      {/* Bottom icons */}
      <View style={[styles.bottomRow, {
        position: 'absolute',
        bottom: width * 0.05,
        alignSelf: 'center',
      }]}>
        <UnitePressNowTachbr style={styles.bottomIconBox} onPress={() => {
          setBritianUegasScreenOn('Britian Saved Skyli Places Uegas');
        }}>
          <Image
            source={require('../SkylineBritainUegasAssets/SkylineBritainUegasImages/skySaved.png')}
            style={styles.bottomLineIconSkybr}
            resizeMode="contain"
          />
        </UnitePressNowTachbr>
        <UnitePressNowTachbr style={styles.bottomIconBox} onPress={() => {
          setBritianUegasScreenOn('Uegas Info Britian Skyline')
        }}>
          <Image
            source={require('../SkylineBritainUegasAssets/SkylineBritainUegasImages/uegSkyliInfo.png')}
            style={styles.bottomLineIconSkybr}
            resizeMode="contain"
          />
        </UnitePressNowTachbr>
      </View>
      <UegasUnitedBlogModal
        visible={blogModalVisible}
        onClose={() => {
          setBlogModalVisible(false);
          setSelectedBlog(null);
        }}
        blog={selectedBlog}
      />
    </View>
  );
}

const CARD_HEIGHT = width * 0.28;
const ICON_SIZE = width * 0.18;
const BUTTON_HEIGHT = width * 0.14;

const styles = StyleSheet.create({
  container: {
    paddingBottom: width * 0.18,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingTop: width * 0.08,
    // justifyContent: 'center',
  },
  card: {
    shadowColor: '#000',
    borderRadius: 28,
    backgroundColor: '#0C0C0C',
    height: CARD_HEIGHT,
    marginVertical: 10,
    width: width * 0.9210435,
    elevation: 4,
    paddingHorizontal: 19,
    shadowOpacity: 0.19,
    alignItems: 'center',
    shadowRadius: 10,
    flexDirection: 'row',
  },
  icon: {
    height: ICON_SIZE,
    marginRight: 19,
    width: ICON_SIZE,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  cardTitle: {
    fontFamily: kingdoUegasFonsBrit.skyOnestLineSemiBold,
    fontSize: 19,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 12,
    letterSpacing: 0.5,
    color: '#fff',
  },
  button: {
    width: width * 0.35,
    backgroundColor: '#900B0B',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
    alignSelf: 'center',
    height: BUTTON_HEIGHT,
  },
  buttonText: {
    fontWeight: '500',
    fontFamily: kingdoUegasFonsBrit.skyOnestLineSemiBold,
    fontSize: width * 0.04,
    color: '#fff',
  },
  bottomRow: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomIconBox: {
    justifyContent: 'center',
    width: width * 0.19,
    backgroundColor: '#0C0C0C',
    borderWidth: 2,
    marginHorizontal: 14,
    borderColor: '#900B0B',
    height: width * 0.19,
    alignItems: 'center',
    borderRadius: 16,
  },
  bottomLineIconSkybr: {

    height: width * 0.09,

    tintColor: '#fff',

    width: width * 0.09,

  },
});