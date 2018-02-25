import React from 'react';
import {Provider} from 'react-redux';

import { 
  StyleSheet, 
  Text, 
  View,
  Button
} from 'react-native';

import store from './store';

import EnsureSocket from './apis/components/EnsureSocket';
import LoginForm from './auth/components/LoginForm';

export default class App extends React.Component {
  render() { 
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <EnsureSocket>
            <LoginForm />
          </EnsureSocket>
        </View>
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
