import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { View, StyleSheet } from "react-native";
import Button from "../components/UI/Button";
import { ExpenceContext } from "../store/expence-context";
import ExpenceForm from "../components/ManageExpence/ExpenceForm";

function ManageExpence({route, navigation}) {
    const expencesContext = useContext(ExpenceContext);
    const editedExpenceId = route.params?.expenceId;
    const isEditing = !!editedExpenceId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expence' : 'Add Expence',
        });
    }, [navigation, isEditing])

    function deleteExpenceHandler() {
        expencesContext.deleteExpence(editedExpenceId);
        navigation.goBack();
    }

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler() {
        if (isEditing) {
            expencesContext.updateExpence(editedExpenceId, {
                description: "Test2",
                amount: 10,
                date: new Date(),
            });
        } else {
            expencesContext.addExpence({
                description: "Test",
                amount: 100,
                date: new Date(),
            });
        }
        navigation.goBack();
    }


    return <View style={styles.container}>
        <View>
         <ExpenceForm />
        </View>
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