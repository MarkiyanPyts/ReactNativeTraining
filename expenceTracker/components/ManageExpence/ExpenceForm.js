import { View, StyleSheet, Text, Alert } from 'react-native';
import Input from './Input';
import { useState } from 'react';
import Button from '../UI/Button';
import { getFormattedDate } from '../../util/date';
import { GlobalStyles } from '../../constants/styles';

function ExpenceForm({submitButtonLabel, onCancel, onSubmit, defaultValues}) {
    const [inputs, setInputs] = useState({
        amount: {
            value: defaultValues ? defaultValues.amount.toString() : '',
            isValid: true,
        },
        date: {
            value: defaultValues ? getFormattedDate(defaultValues.date) : '',
            isValid: true,
        },
        description: {
            value: defaultValues ? defaultValues.description : '',
            isValid: true,
        },
    });

    function inputChangeHandler(inputIdentifier, enteredValue) {
        setInputs((currInputs) => {
            return {
                ...currInputs,
                [inputIdentifier]: {
                    value: enteredValue,
                    isValid: true
                },
            }
        })
    }

    function submitHandler () {
        const expenceData = {
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value),
            description: inputs.description.value,
        }

        const amountIsVsalid = !isNaN(expenceData.amount) && expenceData.amount > 0;
        const dateIsValid = expenceData.date.toString() !== 'Invalid Date';
        const descriptionIsValid = expenceData.description.trim().length > 0;

        if (!amountIsVsalid || !dateIsValid || !descriptionIsValid) {
            //Alert.alert('Invalid input', 'Please check your input values', [{text: 'OK'}]);
            setInputs((currInputs) => {
                return {
                    amount: {
                        value: currInputs.amount.value,
                        isValid: amountIsVsalid,
                    },
                    date: {
                        value: currInputs.date.value,
                        isValid: dateIsValid,
                    },
                    description: {
                        value: currInputs.description.value,
                        isValid: descriptionIsValid,
                    }
                }
            });
            return;
        }

        onSubmit(expenceData);
    }

    const formIsInvalid = !inputs.amount.isValid || !inputs.date.isValid || !inputs.description.isValid;

    return <View style={styles.form}>
        <Text style={styles.title}>Your Expence</Text>
        <View style={styles.inputRow}>
            <Input
                style={styles.rowInput}
                label="Amount"
                invalid={!inputs.amount.isValid}
                textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: (enteredValue) => {
                        inputChangeHandler('amount', enteredValue);
                    },
                    value: inputs.amount.value,
                }}
            />
            <Input
                style={styles.rowInput}
                label="Date"
                invalid={!inputs.date.isValid}
                textInputConfig={{
                    placeholder: 'YYYY/MM/DD',
                    maxLength: 10,
                    onChangeText: (enteredValue) => {
                        inputChangeHandler('date', enteredValue);
                    },
                    value: inputs.date.value,
                }}
            />            
        </View>
        <View style={styles.inputRow}>
            <Input 
                label="Description" 
                invalid={!inputs.description.isValid}
                textInputConfig={{
                multiline: true,
                autoCorrect: false,
                //autoCapitalize: 'sentences',
                onChangeText: (enteredValue) => {
                    inputChangeHandler('description', enteredValue);
                },
                value: inputs.description.value,
            }} />
        </View>
        {formIsInvalid && <Text style={styles.errorText}>Invalid Input Values - please check your entered data!</Text>}
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
    errorText: {
        textAlign: 'center',
        color: GlobalStyles.colors.error500,
        margin: 8,
    }
});

export default ExpenceForm;