import { MEALS, CATEGORIES } from '../data/dummy-data';
import {useLayoutEffect} from 'react';

import MealsList from '../components/MealsList/MealsList';

function MealsOverviewScreen ({route, navigation}) {
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(cat => cat.id === catId).title;
        
        navigation.setOptions({
            title: categoryTitle,
        });
    }, [catId, navigation]);

    return <MealsList items={displayedMeals} />
}

export default MealsOverviewScreen;