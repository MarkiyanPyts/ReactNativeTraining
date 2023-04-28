import {View, FlatList, StyleSheet} from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import ExpencesList from './ExpencesList';
import ExpencesSummury from './ExpencesSummury';

function ExpencesOutput({ expences, expencesPeriod }) {
    return <View style={styles.container}>
        <ExpencesSummury expences={expences} periodName={expencesPeriod} />
        <ExpencesList expences={expences} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700,
    }
});

export default ExpencesOutput;