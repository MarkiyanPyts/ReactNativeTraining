import { FlatList } from "react-native";
import ExpenceItem from "./ExpenceItem";

function renderExpenceItem(itemData) {
    return <ExpenceItem {...itemData.item} />
}

const ExpencesList = ({expences}) => {
    return (
        <FlatList data={expences} renderItem={renderExpenceItem} keyExtractor={(item) => item.id} />
    );
};

export default ExpencesList;