import React from 'react';
import {Provider} from 'react-redux';
import AppNavigator from './navigation/AppNavigator';
import {store} from './redux/store';
import {SafeAreaView} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';

const App = () => {
  return (
    <Provider store={store}>
      <MenuProvider>
        <SafeAreaView style={{flex: 1, backgroundColor: '#6a1b9a'}}>
          <AppNavigator />
        </SafeAreaView>
      </MenuProvider>
    </Provider>
  );
};

export default App;
