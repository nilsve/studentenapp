import React from 'react';
import {Provider} from 'react-redux';

import { 
  StyleSheet, 
  Text, 
  View,
  Button
} from 'react-native';

import { 
  ThemeProvider,
} from 'react-native-material-ui';

import store from './store';

import EnsureSocket from './apis/components/EnsureSocket';

import Router from './router';

import theme from './theme';

import { createRootNavigator } from "./router";

export default class App extends React.Component {
  render() { 
    return (
      <Provider store={store}>
        <ThemeProvider uiTheme={theme}>
          <View style={styles.container}>
            <EnsureSocket>
              <Router />
            </EnsureSocket>
          </View>
        </ThemeProvider>
      </Provider>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
  }, 
});
