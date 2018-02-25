import React from 'react';

import PropTypes from 'prop-types';

import { 
  StyleSheet, 
  Text,
  View,
  Button
} from 'react-native';

import {connect} from 'react-redux';

export default class LoadingScreen extends React.Component {

    render() { 
        return (
            <View style={styles.container}>
                <Text>Bezig met laden...</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
});
