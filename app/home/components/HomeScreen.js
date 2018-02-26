import React from 'react';

import PropTypes from 'prop-types';

import { 
  StyleSheet, 
  Text,
  View,
  TextInput,
  Image,
} from 'react-native';

import {
    Button,
} from 'react-native-material-ui';

export default class HomeScreen extends React.Component {

    static propTypes = {
        navigation: PropTypes.object.isRequired,
    }

    state = {
        username: '',
        password: '',
    };

    render() { 
        return <View style={styles.container}>
            <Text>Hoofd scherm</Text>
        </View>;
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 70,
  },
  input: {
    marginBottom: 15,
    height: 40, 
    width: 200,
  },
  logo: {
      marginBottom: 10,
  }
});
