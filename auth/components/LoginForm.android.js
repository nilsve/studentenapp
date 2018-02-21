import React from 'react';

import PropTypes from 'prop-types';

import { 
  StyleSheet, 
  Text,
  View,
  Button
} from 'react-native';

import {connect} from 'redux';

import {
    login,
} from '../actions';

class LoginForm extends React.Component {

    static propTypes = {
        loggedOn: PropTypes.bool.isRequired,
    }

    render() { 
        return (
        <View style={styles.container}>
            {
                loggedOn ? <View>Ingelogt!</View> : <View>nope</View>
            }
            <Button 
                onPress={this.onButtonClick}
                title="Hoi bla test" />
        </View>
        );
    }

    onButtonClick = () => {
        this.props.login('', '');
    }
}

function mapStateToProps(state, props) {
    return {
        loggedOn: state.auth.loggedOn,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        login: (username, password) => dispatch(login(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});