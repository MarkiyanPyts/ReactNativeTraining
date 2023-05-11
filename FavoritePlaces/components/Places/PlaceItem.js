import { View, Pressable, Image, StyleSheet, Text } from "react-native";

function PlaceItem({place, onSelect}) {
    return (
        <Pressable onPress={onSelect}>
            <Image source={{ uri: place.imageUri }} />
            <View>
                <Text>{place.titile}</Text>
                <Text>{place.address}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    
});

export default PlaceItem;