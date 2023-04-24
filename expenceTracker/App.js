import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpence from './screens/ManageExpence';
import RecentExpences from './screens/RecentExpances';
import AllExpances from './screens/AllExpances';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpancesOverview() {
  return <BottomTabs.Navigator>
    <BottomTabs.Screen name="RecentExpences" component={RecentExpences} />
    <BottomTabs.Screen name="All Expences" component={AllExpances} />
  </BottomTabs.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ExpancesOverview" component={ExpancesOverview} />
          <Stack.Screen name="ManageExpence" component={ManageExpence} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}