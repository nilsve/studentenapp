import React from 'react';

import PropTypes from 'prop-types';

import { 
  StyleSheet, 
  Text,
  View,
  Button
} from 'react-native';

import {connect} from 'react-redux';

import LoginScreen from './LoginScreen';

class EnsureUser extends React.Component {

    static propTypes = {
        loggedOn: PropTypes.bool.isRequired,
    }

    connect(connection) {
        if (connection.connecting || connection.connected) {
            return;
        } else {
            this.props.connectApis(); 
        }
    }

    render() { 
        const {loggedOn, children} = this.props;

        return loggedOn ? children : <LoginScreen />;
    }
}

function mapStateToProps(state) {
    return {
        loggedOn: state.auth.loggedOn,
    }
}

export default connect(mapStateToProps, null)(EnsureUser);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  codeContainer: {
    backgroundColor: '#009C92',
    paddingVertical: 50,
    justifyContent: 'center',
  }
});
