import { View, Text } from 'react-native';

const ExpencesSummury = ({expences, periodName}) => {
    const expencesSum = expences.reduce((sum, expence) => sum + expence.amount, 0);
    return (
        <View>
            <Text>{periodName}</Text>
            <Text>${expencesSum.toFixed(2)}</Text>
        </View>
    )
};

export default ExpencesSummury;