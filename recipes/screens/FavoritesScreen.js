import { MEALS } from '../data/dummy-data';
import {useContext} from 'react';
import { FavoritesContext } from '../store/context/favorites-context';
import MealsList from '../components/MealsList/MealsList';
import { StyleSheet, View, Text } from 'react-native';

function FavoritesScreen() {
    const favoroteMealsCtx = useContext(FavoritesContext);
    const favoriteMeals = MEALS.filter(meal => favoroteMealsCtx.ids.includes(meal.id));

    if (favoriteMeals.length === 0) {
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>No favorite meals found. Start adding some!</Text>
        </View>
    }

    return <MealsList items={favoriteMeals} />
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
});

export default FavoritesScreen;