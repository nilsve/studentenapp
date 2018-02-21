import React from 'react';
import {Provider} from 'react-redux';

import { 
  StyleSheet, 
  Text, 
  View,
  Button
} from 'react-native';

import store from './store';

export default class App extends React.Component {
  render() { 
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <View style={styles.row}>
            <Button 
              onPress={this.onButtonClick}
              title="Hoi bla test" />
            <Button 
              onPress={this.onButtonClick}
              title="Hoi bla test" />
          </View> 
          <View style={styles.row}>
            <Button 
              onPress={this.onButtonClick}
              title="Hoi bla test" /> 
            <Button 
              onPress={this.onButtonClick}
              title="Hoi bla test" />
          </View> 
        </View>
      </Provider>
    );
  }

  onButtonClick = () => {
    alert('test');
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
