import { Pressable, Text, StyleSheet } from "react-native";
import {Ionicons} from '@expo/vector-icons';
import { Colors } from "../../constants/colors";

function OutlinedButton({onPress, icon, children}) {
    return <Pressable style={(pressed) => {
        return [styles.button, pressed && styles.pressed]
    }} onPress={onPress}>
        <Ionicons style={styles.icon} name={icon} size={24} color={Colors.primary500} />
        <Text style={styles.text}>{children}</Text>
    </Pressable>
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        margin: 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.primary500,
        flexDirection: 'row',
    },
    pressed: {
        opacity: 0.7,
    },
    icon: {
        marginRight: 6,
    },
    text: {
        color: Colors.primary500,
    },
});

export default OutlinedButton;