import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';



function CategoriesScreen({navigation}) {
    function renderCategoryItem(categoryItem) {
        const pressHandler = () => {
            navigation.navigate('MealsOverview', {
                categoryId: categoryItem.item.id
            });
        };
        return <CategoryGridTile title={categoryItem?.item?.title} color={categoryItem?.item?.color} onPress={pressHandler} />;
    }

    return <FlatList
    data={CATEGORIES}
    keyExtractor={(item => item.id)}
    renderItem={renderCategoryItem}
    numColumns={2}
    />
}

export default CategoriesScreen;