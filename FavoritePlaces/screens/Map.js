import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

function Map ({}) {
    const region = {
        latiture: 37.78,
        longitude: -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }
    return <MapView style={styles.map} initianRegion={region} />
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
    }
});

export default Map;