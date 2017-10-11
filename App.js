/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Button from 'apsl-react-native-button';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const clickUrl = 'http://localhost:8080/api/click';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Clicker App!
        </Text>
        <Text style={styles.instructions}>
          Click the button to increment count of clicks
        </Text>
        <Button
            style={styles.buttonStyle} textStyle={styles.textStyle}
            onPress={() => {
                doClick();
            }}>
          CLICK ME!
        </Button>
      </View>
    );
  }
}

function doClick() {
    return fetch(clickUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonStyle: {
    borderColor: '#c0392b',
    backgroundColor: 'blue'
  },
  textStyle: {
     color: 'white'
  },
});
