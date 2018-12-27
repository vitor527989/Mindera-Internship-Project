import React from 'react';
import RootNavigator from './src/appRouting';

/**
 * This is the app's root component.
 * This is only redirecting us to RootNavigator, located in src/appRouting
 */
export default class App extends React.Component {
  render() {
    return <RootNavigator />;
  }
}