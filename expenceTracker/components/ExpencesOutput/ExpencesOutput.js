import {View, FlatList} from 'react-native';
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
    }
];

function ExpencesOutput({ expences, expencesPeriod }) {
    return <View>
        <ExpencesSummury expences={DUMMY_EXPENCES} periodName={expencesPeriod} />
        <ExpencesList expences={DUMMY_EXPENCES} />
    </View>
}

export default ExpencesOutput;