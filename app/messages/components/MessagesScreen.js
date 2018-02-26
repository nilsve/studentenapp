import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    FlatList,
    KeyboardAvoidingView,
    TouchableOpacity,
} from 'react-native';

import {
    Button,
    ListItem,
} from 'react-native-material-ui';

class MessagesScreen extends React.Component {

    static propTypes = {
        navigation: PropTypes.object.isRequired,
        messages: PropTypes.array.isRequired,
    }

    state = {
        typing: '',
    }

    render() {
        const { messages } = this.props;

        return <View style={styles.container}>
            <FlatList
                data={this.props.messages}
                renderItem={this.renderMessage}
                inverted
                />
            <KeyboardAvoidingView behavior="padding">
                <View style={styles.footer}>
                    <TextInput
                    value={this.state.typing}
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Nieuw bericht"
                    onChangeText={text => this.setState({ typing: text })}
                    />
                    <TouchableOpacity onPress={this.sendMessage}>
                    <Text style={styles.send}>Send</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>;

        return <View style={styles.container}>
            {
                messages.map(this.renderMessage)
            }
            <View style={styles.input}>
                <Button primary text="hoi" />
            </View>
        </View>;
    }

    renderMessage({item}) {
        return <View style={styles.row}>
            <View style={styles.rowText}>
                <Text style={styles.sender}>{item.user}</Text>
                <Text style={styles.message}>{item.message}</Text>
            </View>
        </View>
    }
}

function mapStateToProps(state) {
    return {
        messages: state.messages.messages,
    }
}

export default connect(mapStateToProps, null)(MessagesScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    row: {
        flexDirection: 'row',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    avatar: {
        borderRadius: 20,
        width: 40,
        height: 40,
        marginRight: 10
    },
    rowText: {
        flex: 1
    },
    message: {
        fontSize: 18
    },
    sender: {
        fontWeight: 'bold',
        paddingRight: 10
    },
    footer: {
        flexDirection: 'row',
        backgroundColor: '#eee'
    },
    input: {
        paddingHorizontal: 20,
        fontSize: 18,
        flex: 1
    },
    send: {
        alignSelf: 'center',
        color: 'lightseagreen',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 20
    }
});
