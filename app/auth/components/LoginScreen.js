import React from 'react';

import PropTypes from 'prop-types';

import { 
  StyleSheet, 
  Text,
  View,
  TextInput,
} from 'react-native';

import {
    Button,
} from 'react-native-material-ui';

import {connect} from 'react-redux';

import {
    login,
} from '../actions';

class LoginForm extends React.Component {

    static propTypes = {
        login: PropTypes.func.isRequired,
    }

    state = {
        username: '',
        password: '',
    };

    render() { 
        return (
        <View style={styles.container}>
            <TextInput
                value={this.state.username}
                style={{height: 40, width: 200}}
                placeholder="Gebruikersnaam"
                autoFocus={true}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(value) => this.setState({username: value,})}
                />
            <TextInput
                value={this.state.password}
                style={{height: 40, width: 200}}
                placeholder="Wachtwoord"
                secureTextEntry
                onChangeText={(value) => this.setState({password: value,})}
                />
            <Button 
                raised
                primary
                onPress={this.handleLogin}
                text="Inloggen" />
        </View>
        );
    }

    handleLogin = () => {
        const {username, password} = this.state;

        this.props.login(username, password);
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (username, password) => dispatch(login(username, password))
    }
}

export default connect(null, mapDispatchToProps)(LoginForm);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
