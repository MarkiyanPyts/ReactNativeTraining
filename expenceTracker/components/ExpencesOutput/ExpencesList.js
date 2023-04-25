import { FlatList, Text } from "react-native";

function renderExpenceItem(itemData) {
    return <Text>{itemData.item.description}</Text>
}

const ExpencesList = ({expences}) => {
    return (
        <FlatList data={expences} renderItem={renderExpenceItem} keyExtractor={(item) => item.id} />
    );
};

export default ExpencesList;