import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Platform, StatusBar } from "react-native";
import { StackNavigator, TabNavigator } from "react-navigation";

import LoginScreen from './auth/components/LoginScreen';
import SignupScreen from "./auth/components/SignupScreen";
import HomeScreen from "./home/components/HomeScreen";
import MessagesScreen from "./messages/components/MessagesScreen";
 
const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

const SignedOut = StackNavigator({
  
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: "Inloggen",
      headerStyle
    }
  },
  Signup: {
    screen: SignupScreen,
    navigationOptions: {
      title: "Registreren",
      headerStyle
    }
  }
});

const SignedIn = TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) =>
          <FontAwesome name="home" size={30} color={tintColor} />
      }
    },
    Messages: {
      screen: MessagesScreen,
      navigationOptions: {
        tabBarLabel: "Berichten",
        tabBarIcon: ({ tintColor }) =>
          <FontAwesome name="home" size={30} color={tintColor} />
      }
    },
  },
  {
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }
    }
  }
);

function createRootNavigator(loggedOn) {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      SignedOut: {
        screen: SignedOut,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: loggedOn ? "SignedIn" : "SignedOut"
    }
  );
};

class Router extends React.Component {
    static propTypes = {
        loggedOn: PropTypes.bool.isRequired,
    }

    render() {
        const Navigator = createRootNavigator(this.props.loggedOn);
        return <Navigator />;
    }
}

function mapStateToProps(state) {
    return {
        loggedOn: state.auth.loggedOn,
    }
}

export default connect(mapStateToProps, null)(Router);
