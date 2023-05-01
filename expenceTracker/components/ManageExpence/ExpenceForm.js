import { View, StyleSheet, Text, Alert } from 'react-native';
import Input from './Input';
import { useState } from 'react';
import Button from '../UI/Button';
import { getFormattedDate } from '../../util/date';

function ExpenceForm({submitButtonLabel, onCancel, onSubmit, defaultValues}) {
    const [inputValues, setInputValues] = useState({
        amount: defaultValues ? defaultValues.amount.toString() : '',
        date: defaultValues ? getFormattedDate(defaultValues.date) : '',
        description: defaultValues ? defaultValues.description : '',
    });

    function inputChangeHandler(inputIdentifier, enteredValue) {
        setInputValues((currentInputValues) => {
            return {
                ...currentInputValues,
                [inputIdentifier]: enteredValue,
            }
        })
    }

    function submitHandler () {
        const expenceData = {
            amount: +inputValues.amount,
            date: new Date(inputValues.date),
            description: inputValues.description,
        }

        const amountIsVsalid = !isNaN(expenceData.amount) && expenceData.amount > 0;
        const dateIsValid = expenceData.date.toString() !== 'Invalid Date';
        const descriptionIsValid = expenceData.description.trim().length > 0;

        if (!amountIsVsalid || !dateIsValid || !descriptionIsValid) {
            Alert.alert('Invalid input', 'Please check your input values', [{text: 'OK'}]);
            return;
        }

        onSubmit(expenceData);
    }

    return <View style={styles.form}>
        <Text style={styles.title}>Your Expence</Text>
        <View style={styles.inputRow}>
            <Input
                style={styles.rowInput}
                label="Amount" 
                textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: (enteredValue) => {
                        inputChangeHandler('amount', enteredValue);
                    },
                    value: inputValues.amount,
                }}
            />
            <Input
                style={styles.rowInput}
                label="Date"
                textInputConfig={{
                    placeholder: 'YYYY/MM/DD',
                    maxLength: 10,
                    onChangeText: (enteredValue) => {
                        inputChangeHandler('date', enteredValue);
                    },
                    value: inputValues.date,
                }}
            />            
        </View>
        <View style={styles.inputRow}>
            <Input label="Description" textInputConfig={{
                multiline: true,
                autoCorrect: false,
                //autoCapitalize: 'sentences',
                onChangeText: (enteredValue) => {
                    inputChangeHandler('description', enteredValue);
                },
                value: inputValues.description,
            }} />
        </View>
        <View style={styles.buttons}>
            <Button style={styles.button} mode={'flat'} onPress={onCancel}>Cancel</Button>
            <Button style={styles.button} onPress={submitHandler}>{submitButtonLabel}</Button>
        </View>
    </View>
}

const styles = StyleSheet.create({
    form: {
        marginTop: 40
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center',
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rowInput: {
        flex: 1,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
    },
});

export default ExpenceForm;