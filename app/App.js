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
import EnsureUser from './auth/components/EnsureUser';

import theme from './theme';

export default class App extends React.Component {
  render() { 
    return (
      <Provider store={store}>
        <ThemeProvider uiTheme={theme}>
          <View style={styles.container}>
            <EnsureSocket>
              <EnsureUser>
                <Text>ingelogd</Text>
              </EnsureUser>
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
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'column'
  },
});
