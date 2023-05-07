import { View, Text, StyleSheet, FlatList } from "react-native";
import { Colors } from "../../constants/colors";

import PlaceItem from "./PlaceItem";

function PlacesList({places}) {
    if (!places || places.length === 0) {
        return <View style={styles.fallbackContainer}>
            <Text style={styles.fallbackText}>No Places Added Yet</Text>
        </View>
    }
    return <FlatList data={places} keyExtractor={(item) => {item.id}} renderItem={({item}) => {
        return <PlaceItem place={item} />
    }} />
}

const styles = StyleSheet.create({
    fallbackContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fallbackText: {
        fontSize: 16,
        color: Colors.primary200
    }
});

export default PlacesList;