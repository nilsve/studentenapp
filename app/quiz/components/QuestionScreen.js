import React from 'react';

import PropTypes from 'prop-types';

import { 
  StyleSheet, 
  Text,
  View,
  Button
} from 'react-native';

import {connect} from 'react-redux';

class QuestionScreen extends React.Component {
    render() { 
        return (
            <View style={styles.container}>
                <Text>VRAAG</Text>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        // question: apis.
    }
}

export default connect(mapStateToProps, null)(QuestionScreen);

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
