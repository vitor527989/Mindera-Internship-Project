/** 
 * Landing page.
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';


/** 
 * AppRegistry is the JS entry point to running all React Native apps.
 * App root components should register themselves with AppRegistry.registerComponent.
 * In this case, the App root component will be App.js
 */
AppRegistry.registerComponent(appName, () => App);
