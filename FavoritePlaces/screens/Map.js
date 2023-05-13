import { useCallback, useLayoutEffect, useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import IconButton from '../components/UI/IconButton';

function Map ({navigation, route}) {
    const initialLocation = route.params && {
        lat: route.params?.initialLat,
        lng: route.params?.initialLng
    };

    const [selectedLocation, setSelectedLocation] = useState(initialLocation);


    const region = {
        latiture: initialLocation? initialLocation.lat : 37.78,
        longitude: initialLocation? initialLocation.lng : -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    function selectLocationHandler(event) {
        if (initialLocation) {
            return;
        }

        const lng = event.nativeEvent.coordinate.longitude;
        const lat = event.nativeEvent.coordinate.latitude;

        setSelectedLocation({
            lat,
            lng
        });
    }

    const savePickedLocationHandler = useCallback(
        () => {
            if (!selectedLocation) {
                Alert.alert('No location picked', 'Please pick a location before saving');
                return;
            }
    
            navigation.navigate('AddPlace', { 
                pickedLat: selectedLocation.lat,
                pickedLng: selectedLocation.lng
             });
        },
        [navigation, selectedLocation]
    );

    useLayoutEffect(() => {
        if (initialLocation) {
            return;
        }

        navigation.setOptions({
            headerRight: ({tintColor}) => <IconButton icon="save" size={24} color={tintColor} onPress={savePickedLocationHandler} />
        })
    }, [navigation, savePickedLocationHandler, initialLocation]);

    return <MapView style={styles.map} initianRegion={region} onPress={selectLocationHandler}>
        {selectedLocation && <Marker title="Picked Location" coordinate={{ latitude: selectedLocation.lat, longitude: selectedLocation.lng }}></Marker>}
    </MapView>
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
    }
});

export default Map;