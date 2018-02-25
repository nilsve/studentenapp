import React from 'react';

import PropTypes from 'prop-types';

import { 
  StyleSheet, 
  Text,
  View,
  Button
} from 'react-native';

import {connect} from 'react-redux';

import {
    connect as connectApis,
} from '../actions';

import LoadingScreen from './LoadingScreen';

class EnsureSocket extends React.Component {

    static propTypes = {
        children: PropTypes.node.isRequired,
        connection: PropTypes.object.isRequired,
    }

    componentDidMount() {
        this.connect(this.props.connection);
    }

    componentWillReceiveProps(props) {
        this.connect(props.connection);
    }

    connect(connection) {
        if (connection.connecting || connection.connected) {
            console.log('Niet: ', connection);
            return;
        } else {
            this.props.connectApis(); 
        }
    }

    render() { 
        const {connection, children} = this.props;

        return connection.connected ? children : <LoadingScreen />
    }
}

function mapStateToProps(state) {
    return {
        connection: state.apis.connection,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        connectApis: () => dispatch(connectApis()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnsureSocket);

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
