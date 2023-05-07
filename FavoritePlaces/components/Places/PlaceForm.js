import { useState } from "react";
import { Text, View , ScrollView, TextInput, StyleSheet} from "react-native";
import { Colors } from "../../constants/colors";

function PlaceForm() {
    const [enteredTitle, setEnteredTitle] = useState('');

    function changeTitleHandler(text) {
        setEnteredTitle(text);
    }

    return <ScrollView style={styles.form}>
        <View>
            <Text style={styles.label}>Title</Text>
            <TextInput style={styles.input} value={enteredTitle} onChangeText={changeTitleHandler}></TextInput>
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    form : {
        flex: 1,
        padding: 24,
    },
    label: {
        fontWeight: 'bold',
        margingBottom: 4,
        color: Colors.primary500,
    },
    input: {
        marginVertical: 8,
        paddingHorizontal: 4,
        paddingVertical: 8,
        fontSize: 16,
        borderBottomColor: Colors.primary700,
        borderBottomWidth: 2,
        backgroundColor: Colors.primary100,
    },
});

export default PlaceForm;