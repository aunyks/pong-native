import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <WebView
        source={{uri: 'http://www.aunyks.com/pong/pong.html'}}
        style={
          {marginTop: 20,
           width: '100%',
           height: '100%'
          }}
      />
    );
  }
}
