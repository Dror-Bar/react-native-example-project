import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/Store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from './components/screens/login/Login';
import {Home} from './components/screens/home/Home';

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
};
