import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

function Card({children}) {
    return (
        <View style={styles.card}>{children}</View>
    );
}

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        marginTop: 36,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: Colors.primary800,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.5,
        elevation: 8,
      },
});

export default Card;