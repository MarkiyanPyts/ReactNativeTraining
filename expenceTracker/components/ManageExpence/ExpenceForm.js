import { View, StyleSheet, Text } from 'react-native';
import Input from './Input';

function ExpenceForm() {
    function amountChangeHandler(text) {
        console.log(text);
    }

    return <View style={styles.form}>
        <Text style={styles.title}>Your Expence</Text>
        <View style={styles.inputRow}>
            <Input 
                style={styles.rowInput}
                label="Amount" 
                textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: amountChangeHandler,
                }}
            />
            <Input
                style={styles.rowInput}
                label="Date"
                textInputConfig={{
                    placeholder: 'YYYY/MM/DD',
                    maxLength: 10,
                    onChangeText: () => {},
                }}
            />            
        </View>
        <View style={styles.inputRow}>
            <Input label="Description" textInputConfig={{
                multiline: true,
                autoCorrect: false,
                //autoCapitalize: 'sentences',
                onChangeText: () => {},
            }} />
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
    }
});

export default ExpenceForm;