import {View, FlatList, StyleSheet} from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import ExpencesList from './ExpencesList';
import ExpencesSummury from './ExpencesSummury';

const DUMMY_EXPENCES = [
    {
        id: 'e1',
        description: 'Toilet Paper',
        amount: 94.12,
        date: new Date('2021-12-19'),
    },
    {
        id: 'e2',
        description: 'New TV',
        amount: 799.49,
        date: new Date('2022-01-19'),
    },
    {
        id: 'e3',
        description: 'Car Insurance',
        amount: 294.67,
        date: new Date('2022-02-19'),
    },
    {
        id: 'e4',
        description: 'New Desk (Wooden)',
        amount: 450,
        date: new Date('2022-03-19'),
    },
    {
        id: 'e5',
        description: 'New Desk (Glass)',
        amount: 100,
        date: new Date('2022-04-19'),
    },
    {
        id: 'e6',
        description: 'New Desk (Metal)',
        amount: 200,
        date: new Date('2022-05-19'),
    },
    {
        id: 'e7',
        description: 'New Desk (Plastic)',
        amount: 300,
        date: new Date('2022-06-19'),
    },
    {
        id: 'e8',
        description: 'New Desk (Paper)',
        amount: 400,
        date: new Date('2022-07-19'),
    },
    {
        id: 'e9',
        description: 'New Desk (Cloth)',
        amount: 500,
        date: new Date('2022-08-19'),
    },
];

function ExpencesOutput({ expences, expencesPeriod }) {
    return <View style={styles.container}>
        <ExpencesSummury expences={DUMMY_EXPENCES} periodName={expencesPeriod} />
        <ExpencesList expences={DUMMY_EXPENCES} />
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