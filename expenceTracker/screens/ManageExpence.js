import { useState, useContext, useLayoutEffect } from "react";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { View, StyleSheet } from "react-native";
import { ExpenceContext } from "../store/expence-context";
import ExpenceForm from "../components/ManageExpence/ExpenceForm";
import { storeExpence, updateExpence, deleteExpence } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";

function ManageExpence({route, navigation}) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const expencesContext = useContext(ExpenceContext);
    const editedExpenceId = route.params?.expenceId;
    const isEditing = !!editedExpenceId;

    const selectedExpence = expencesContext.expences.find(expence => expence.id === editedExpenceId);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expence' : 'Add Expence',
        });
    }, [navigation, isEditing])

    async function deleteExpenceHandler() {
        setIsSubmitting(true);
        await deleteExpence(editedExpenceId);
        setIsSubmitting(false);
        expencesContext.deleteExpence(editedExpenceId);
        
        navigation.goBack();
    }

    function cancelHandler() {
        navigation.goBack();
    }

    async function confirmHandler(expenceData) {
        setIsSubmitting(true);
        if (isEditing) {
            expencesContext.updateExpence(editedExpenceId, expenceData);
            await updateExpence(editedExpenceId, expenceData);
        } else {
            const id = await storeExpence(expenceData);
            expencesContext.addExpence({...expenceData, id});
        }
        setIsSubmitting(false);
        navigation.goBack();
    }

    if (isSubmitting) {
        return <LoadingOverlay />
    }


    return <View style={styles.container}>
        <ExpenceForm 
            onSubmit={confirmHandler}
            onCancel={cancelHandler}
            submitButtonLabel={isEditing ? 'Update' : 'Add'}
            defaultValues={selectedExpence} />
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
    deleteContainer: {
        marginTop: 16,
        padding: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center',
    }
});

export default ManageExpence;