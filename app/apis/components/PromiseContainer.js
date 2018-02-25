import React from 'react';

import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import LoadingScreen from './LoadingScreen';

const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class PromiseContainer extends React.Component {

    static propTypes = {
        getPromises: PropTypes.func.isRequired,
        render: PropTypes.func.isRequired,
        pending: PropTypes.node,
    }

    state = {
        status: PENDING, 
        result: null,
    }

    componentWillMount() {
        this.executePromises(this.getPromises());
    }

    getPromises() {
        try {
            return this.props.getPromises(this.props, this.context);
        } catch (error) {
            console.error(error);
            this.setState({status: REJECTED, error});
            return null;
        }
    }

    async executePromise(objectWithPromises) {
        if (objectWithPromises) {
            this.setState({
                status: PENDING,
                result: null,
                error: null,
            });

            try {
                const result = await Promise.props(objectWithPromises);
                if (this._isMounted) {
                    this.setState({status: FULFILLED, result});
                }
                return result;
            } catch (err) {
                console.error(error);
                if (this._isMounted) {
                    this.setState({status: REJECTED, error});
                }
            }
        }
    }

    render() { 
        switch (this.state.status) {
            case PENDING:
                return this.props.pending || <LoadingScreen />;
            case REJECTED:
                return null; //TODO
            case FULFILLED:
                return this.props.render(this.state.result);
        }
    }
}

export default connect(null, null)(QuestionScreen);

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
