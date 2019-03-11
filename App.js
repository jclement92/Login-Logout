import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native'

import Login from './Pages/Login'
import Home from './Pages/Home'


export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NativeRouter>
        <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        </Switch>
      </NativeRouter>
    );
  }
}

