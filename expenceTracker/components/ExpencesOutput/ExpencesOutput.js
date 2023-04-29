import {View, Text, StyleSheet} from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import ExpencesList from './ExpencesList';
import ExpencesSummury from './ExpencesSummury';

function ExpencesOutput({ expences, expencesPeriod, fallbackText }) {
    let content = <Text style={styles.infoText}>{fallbackText}</Text>

    if (expences.length > 0) {
        content = <ExpencesList expences={expences} />
    }

    return <View style={styles.container}>
        <ExpencesSummury expences={expences} periodName={expencesPeriod} />
        {content}
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700,
    },
    infoText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32,
    }
});

export default ExpencesOutput;