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

import {connect} from 'react-redux';

import {
    login,
} from '../actions';

import logo from '../../resources/logo.png';

class LoginScreen extends React.Component {

    static propTypes = {
        login: PropTypes.func.isRequired,
        navigation: PropTypes.object.isRequired,
    }

    state = {
        username: '',
        password: '',
    };

    render() { 
        return (
        <View style={styles.container}>
            <Image style={styles.logo} source={logo} />
            <TextInput
                value={this.state.username}
                style={styles.input}
                placeholder="Gebruikersnaam"
                autoFocus={true}
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={(value) => this.setState({username: value,})}
                />
            <TextInput
                value={this.state.password}
                style={styles.input}
                placeholder="Wachtwoord"
                secureTextEntry
                onChangeText={(value) => this.setState({password: value,})}
                />
            <Button 
                raised
                primary
                onPress={this.handleLogin} 
                text="Inloggen" />
            <Button 
                raised
                onPress={this.handleRegister}
                text="Registreren" />
        </View>
        );
    }

    handleLogin = () => {
        const {username, password} = this.state;

        this.props.login(username, password);
    }

    handleRegister = () => {
        this.props.navigation.navigate('Signup');
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (username, password) => dispatch(login(username, password))
    }
}

export default connect(null, mapDispatchToProps)(LoginScreen);

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
