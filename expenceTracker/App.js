import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ManageExpence from './screens/ManageExpence';
import RecentExpences from './screens/RecentExpances';
import AllExpances from './screens/AllExpances';
import { GlobalStyles } from './constants/styles';
import {Ionicons} from '@expo/vector-icons';
import IconButton from './components/UI/IconButton';
import ExpencesContextProvider from './store/expence-context';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpancesOverview() {
  return <BottomTabs.Navigator screenOptions={({navigation}) => {
    return {
      headerStyle: {
        backgroundColor: GlobalStyles.colors.primary500,  
      },
      headerTintColor: 'white',
      tabBarStyle: {
        backgroundColor: GlobalStyles.colors.primary500,
      },
      tabBarActiveTintColor: GlobalStyles.colors.accent500,
      headerRight: ({tintColor}) => <IconButton icon="add" size={24} color={tintColor} onPress={() => {
        navigation.navigate('ManageExpence')
      }} />,
    }
  }}>
    <BottomTabs.Screen name="RecentExpences" component={RecentExpences} options={{
      title: 'Recent Expences',
      tabBarLabel: 'Recent Expences',
      tabBarIcon: ({color, size}) => {
        return <Ionicons name="hourglass" size={size} color={color} />
      }
    }} />
    <BottomTabs.Screen name="All Expences" component={AllExpances} options={{
      title: 'All Expences',
      tabBarLabel: 'All Expences',
      tabBarIcon: ({color, size}) => {
        return <Ionicons name="calendar" size={size} color={color} />
      }
    }}/>
  </BottomTabs.Navigator>
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ExpencesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: GlobalStyles.colors.primary500,
            },
            headerTintColor: 'white',
          }}>
            <Stack.Screen name="ExpancesOverview" component={ExpancesOverview} options={{
              headerShown: false
            }} />
            <Stack.Screen name="ManageExpence" component={ManageExpence} options={{
              presentation: 'modal',
            }} />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpencesContextProvider>
    </>
  );
}