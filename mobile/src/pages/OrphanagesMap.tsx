import React from "react";
import { StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native';
import MapView, {Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import mapMarker from '../images/map-marker.png';


export default function OrphanagesMap () {
  const navigation = useNavigation ();

  function handleNavigateToOrphanageDetails() {
    navigation.navigate('OrphanageDetails');
  }

  function handleNavigateToCreateOrphanage() {
    navigation.navigate('SelectMapPosition');
  }

    return (
        <View style={styles.container}>
      <MapView 
      provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -23.648388,
          longitude: -52.6298881,
          latitudeDelta: 0.009,
          longitudeDelta: 0.009,
        }}
      >
        <Marker 
          icon={mapMarker}
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
          coordinate={{
            latitude: -23.648388,
            longitude: -52.6298881,
          }}
        >
          <Callout tooltip onPress={()=> {handleNavigateToOrphanageDetails}}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Lar das Criancas</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>  

      <View style={styles.footer}>
        <Text style={styles.footerText}>2 orfanatos encontrados</Text>
          <TouchableOpacity style={styles.createOrphanageButton} onPress={() => {handleNavigateToCreateOrphanage}}>
          <Feather name="plus" size={20} color="#FFF" />
          </TouchableOpacity>
      </View>
    </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height
    },
    calloutContainer: {
      width: 160,
      height: 46,
      paddingHorizontal: 16,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: 16,
      justifyContent: 'center',
    },
    calloutText: {
      color: '#0089a5',
      fontSize: 14,
      fontFamily: 'Nunito_700Bold',
    },
    footer: {
      position: "absolute",
      left: 24,
      right: 24,
      bottom: 32,
      backgroundColor: '#FFF',
      borderRadius: 20,
      height: 56,
      paddingLeft: 24,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 75,
      elevation: 5,
    },
    footerText: {
      fontFamily: 'Nunito_700Bold',
      color: '#8fa7b3'
    },
    createOrphanageButton: {
      width: 56,
      height: 56,
      borderRadius: 20,
      backgroundColor: '#15c3d6',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });