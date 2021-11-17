import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image } from 'react-native';
import AccountScreen from './src/pages/AccountScreen';
import HomeScreen from './src/pages/HomeScreen';
import PostsScreen from './src/pages/PostsScreen';

export type TabParams = {
  Home: undefined,
  Posts: undefined,
  Account: undefined
}

const Tab = createBottomTabNavigator<TabParams>();

const App = () => {  

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: () => (
            <Image
              source={{
                uri: 'https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-4/256/home-icon.png',
                width: 20,
                height: 20
              }}
            />
          )
        }} />
        <Tab.Screen name="Posts" component={PostsScreen} options={{
          tabBarIcon: () => (
            <Image
              source={{
                uri: 'https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/post-it-icon.png',
                width: 20,
                height: 20
              }}
            />
          )
        }} />
        <Tab.Screen name="Account" component={AccountScreen} options={{
          tabBarIcon: () => (
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png',
                width: 20,
                height: 20
              }}
            />
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
