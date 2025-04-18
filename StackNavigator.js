import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomePrideQuestScreen from './src/screens/HomePrideQuestScreen';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { UserProvider, UserContext } from './src/context/UserContext';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import LoadingPrideQuestAppScreen from './src/screens/LoadingPrideQuestAppScreen';

const Stack = createNativeStackNavigator();

const PrideQuestStack = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <UserProvider>
          <SafeAreaProvider>
            <AppNavigator />
          </SafeAreaProvider>
        </UserProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};

const AppNavigator = () => {




  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={'LoadPrideQuestScreen'}>
          <Stack.Screen name="Home" component={HomePrideQuestScreen} options={{ headerShown: false }} />
          <Stack.Screen name="LoadPrideQuestScreen" component={LoadingPrideQuestAppScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};


export default PrideQuestStack;
