import { View, Pressable, Image, StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/colors";

function PlaceItem({place, onSelect}) {
    return (
        <Pressable onPress={onSelect.bind(this, place.id)} style={({pressed}) => [styles.item, pressed && styles.pressed]}>
            <Image style={styles.image} source={{ uri: place.imageUri }} />
            <View style={styles.info}>
                <Text style={styles.title}>{place.titile}</Text>
                <Text style={styles.address}>{place.address}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.9,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderRadius: 6,
        marginVertical: 12,
        backgroundColor: Colors.primary500,
        elevation: 2,
        shadowColor: 'black',
        shadowOpacity: 0.15,
        shadowOffset: { width: 1, height: 2 },
        shadowRadius: 2,
    },
    image: {
        flex: 1,
        borderBottomLeftRadius: 4,
        borderTopLeftRadius: 4,
        height: 100
    },
    info: {
        flex: 2
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: Colors.gray700
    },
    address: {
        fontSize: 18,
        color: Colors.gray700
    },
});

export default PlaceItem;