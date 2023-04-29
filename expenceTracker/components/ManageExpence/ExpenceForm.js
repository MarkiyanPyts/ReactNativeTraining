import {View} from 'react-native';
import Input from './Input';

function ExpenceForm() {
    function amountChangeHandler(text) {
        console.log(text);
    }

    return <View>
        <Input label="Amount" textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: amountChangeHandler,
        }} />
        <Input label="Date" textInputConfig={{
            placeholder: 'YYYY/MM/DD',
            maxLength: 10,
            onChangeText: () => {},
        }}/>
        <Input label="Description" textInputConfig={{
            multiline: true,
            autoCorrect: false,
            //autoCapitalize: 'sentences',
            onChangeText: () => {},
        }} />
    </View>
}

export default ExpenceForm;