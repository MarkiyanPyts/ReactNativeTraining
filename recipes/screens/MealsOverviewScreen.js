import { MEALS } from '../data/dummy-data';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import MealItem from '../components/MealItem';

function renderMealItem(mealItem) {
    const item = mealItem.item;
    const mealItemProps = {
        title: item.title,
        imageUrl: item.imageUrl,
        affordability: item.affordability,
        complexity: item.complexity,
        duration: item.duration,
    }
    return (
       <MealItem {...mealItemProps} />
    )
}

function MealsOverviewScreen ({route}) {
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);
    console.log(catId);
    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})

export default MealsOverviewScreen;