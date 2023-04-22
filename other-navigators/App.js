import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';
import {Ionicons} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator initialRouteName='User' screenOptions={{
         drawerActiveBackgroundColor: '#adb3db',
         drawerActiveTintColor: '#5466d7',
         drawerStyle: {
           backgroundColor: '#ccc',
         },
         headerStyle: {
          backgroundColor: '#5466d7',
        },
        headerTintColor: '#fff'
      }}>
        <Drawer.Screen name='Welcome' component={WelcomeScreen} options={{
          drawerLabel: 'Welcome Screen',
          drawerIcon: ({color, size}) => <Ionicons name='ios-home' size={size} color={color} />
        }} />
        <Drawer.Screen name='User' component={UserScreen} options={{
          drawerIcon: ({color, size}) => <Ionicons name='ios-person' size={size} color={color} />
        }} />
      </Drawer.Navigator> */}
      <BottomTab.Navigator initialRouteName='User' screenOptions={{
        headerStyle: {
          backgroundColor: '#5466d7',
        },
        headerTintColor: '#fff',
        tabBarActiveTintColor: '#5466d7',
      }}>
        <BottomTab.Screen name='Welcome' component={WelcomeScreen} options={{
          tabBarIcon: ({color, size}) => <Ionicons name='ios-home' size={size} color={color} />
        }} />
        <BottomTab.Screen name='User' component={UserScreen} options={{
          tabBarIcon: ({color, size}) => <Ionicons name='ios-person' size={size} color={color} />
        }} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
