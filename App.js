import { StatusBar } from 'expo-status-bar';
import {createStackNavigation} from '@react-navigation/stack'
import {Text, View } from 'react-native';

const Stack = createStackNavigator();

function MyStack() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="SpaceCrafts" component={SpaceCraftsScreen}/>
        <Stack.Screen name="DailyPic" component={DailyPicScreen}/>
        <Stack.Screen name="StarMap" component={StarMapScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}