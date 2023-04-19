import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native";

function MealItem({title, imageUrl, duration, complexity, affordability}) {
    return (
        <View style={styles.mealItem}>
            <Pressable 
                style={({pressed}) => pressed ? styles.buttonPressed : null}
                android_ripple={{color: '#ccc'}}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{uri: imageUrl}} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>{duration}m</Text>
                        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: "white",
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? "hidden" : "visible",
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden",
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        margin: 8,
    },
    details: {
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        justifyContent: "center"
    },
    detailItem: {
        margin: 8,
        fontSize: 12
    }
});

export default MealItem;