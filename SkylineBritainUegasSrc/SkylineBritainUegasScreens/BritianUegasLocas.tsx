import { kingdoUegasFonsBrit } from '../kingdoUegasFonsBrit';
import { Dimensions, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import britianSkylinePlacesUegas from '../SkylineDataBritianUegas/britianSkylinePlacesUegas';
import BritianUegasLocasCard from '../SkylineBritainUegasComponents/BritianUegasLocasCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BritianUegasLocasDetail from '../SkylineBritainUegasComponents/BritianUegasLocasDetail';

// Dimensions
const { height } = Dimensions.get('window');

interface BritianUegasLocasProps {
    isSkyUegasAdditionalInternalOpened: boolean;
    setSkyUegasAdditionalInternalOpened: React.Dispatch<React.SetStateAction<boolean>>;
    showWhichList: 'all' | 'saved';
}

export default function BritianUegasLocas({isSkyUegasAdditionalInternalOpened, setSkyUegasAdditionalInternalOpened, showWhichList}: BritianUegasLocasProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [savedIds, setSavedIds] = useState<number[]>([]);

  useEffect(() => {
    if (showWhichList === 'saved') {
      AsyncStorage.getItem('uegasLineBritianSavedSky').then(val => {
        if (val) {
          try {
            setSavedIds(JSON.parse(val));
          } catch {
            setSavedIds([]);
          }
        } else {
          setSavedIds([]);
        }
      });
    }
  }, [showWhichList, isSkyUegasAdditionalInternalOpened]);

  // Вибираємо локації згідно showWhichList
  const filteredPlaces = showWhichList === 'saved'
    ? britianSkylinePlacesUegas.filter(place => savedIds.includes(place.id))
    : britianSkylinePlacesUegas;

  if (selected !== null && isSkyUegasAdditionalInternalOpened) {
    return (
      <ScrollView
        style={{
          alignSelf: 'center',
          flex: 1,
          paddingTop: height * 0.04,
        }}
        contentContainerStyle={{
          alignItems: 'center',
          paddingBottom: height * 0.04,
        }}
        showsVerticalScrollIndicator={false}
      >
        <BritianUegasLocasDetail
          place={britianSkylinePlacesUegas[selected]}
          onBack={() => setSelected(null)}
        />
      </ScrollView>
    );
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingTop: height * 0.04,
      }}
      contentContainerStyle={{
        alignItems: 'center',
        paddingBottom: height * 0.04,
      }}
      showsVerticalScrollIndicator={false}
      scrollEnabled={filteredPlaces.length > 0}
    >
      {filteredPlaces.length === 0 && showWhichList === 'saved' ? (
        <><Text style={{ color: '#fff', marginTop: height * 0.3, fontSize: height * 0.019, fontFamily: kingdoUegasFonsBrit.skyOnestLineRegular }}>No saved place</Text></>
      ) : (
        filteredPlaces.map((place, idx) => (
          <BritianUegasLocasCard
            key={place.britianName}
            place={place}
            onOpen={() => {

              setSelected(britianSkylinePlacesUegas.findIndex(p => p.id === place.id));
              setSkyUegasAdditionalInternalOpened(true);
            }}
          />
        ))
      )}
    </ScrollView>
  );
}
