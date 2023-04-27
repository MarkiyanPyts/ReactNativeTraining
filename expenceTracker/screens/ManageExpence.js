import { useLayoutEffect } from "react";
import { Text } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { View, StyleSheet } from "react-native";
import Button from "../components/UI/Button";

function ManageExpence({route, navigation}) {
    const editedExpenceId = route.params?.expenceId;
    const isEditing = !!editedExpenceId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expence' : 'Add Expence',
        });
    }, [navigation, isEditing])

    function deleteExpenceHandler() {

    }

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler() {

    }


    return <View style={styles.container}>
        <View style={styles.buttons}>
            <Button style={styles.button} mode={'flat'} onPress={cancelHandler}>Cancel</Button>
            <Button style={styles.button} onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Button>
        </View>
        {isEditing && <View style={styles.deleteContainer}>
            <IconButton 
                icon="trash"
                color={GlobalStyles.colors.error500}
                size={36}
                onPress={deleteExpenceHandler} />
        </View>}
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteContainer: {
        marginTop: 16,
        padding: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center',
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
    }
});

export default ManageExpence;