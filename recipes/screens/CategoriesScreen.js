import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

function renderCategoryItem(categoryItem) {
    return <CategoryGridTile title={categoryItem?.item?.title} color={categoryItem?.item?.color} />;
}

function CategoriesScreen() {
    return <FlatList
    data={CATEGORIES}
    keyExtractor={(item => item.id)}
    renderItem={renderCategoryItem}
    numColumns={2}
    />
}

export default CategoriesScreen;