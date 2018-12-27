import React, { Component } from 'react';

import {
  createDrawerNavigator,
  createMaterialTopTabNavigator,
  createAppContainer,
  createStackNavigator
} from 'react-navigation';

import { TouchableWithoutFeedback } from 'react-native';

import { Icon } from 'react-native-elements'
import EventsView from './views/eventsView';
import VacanciesView from './views/vacanciesView';
import { DayView } from './views/dayView';
import { DescriptionsView } from './views/descriptionsView';
import AboutView from './views/aboutView';

/**
 * Events and Vacancies Top Tab Bar
 */
const TabBar = createMaterialTopTabNavigator({
  Events: {
    screen: ({ navigation }) => <EventsView screenProps={{ rootNavigation: navigation }} />,
  },
  Vacancies: {
    screen: VacanciesView
  }
},
  {
    tabBarOptions: {
      style: {
        backgroundColor: '#a8a7a7'
      },
      indicatorStyle: {
        backgroundColor: '#ffffff'
      },
      upperCaseLabel: false
    }
  })

/**
 * Top Bar Components:
 * - Title,
 * - Hamburguer menu icon that opens the Drawer on press
 * - Search icon (At the moment it only launches an alert)
 */
const TopBar = createStackNavigator({
  Options: {
    screen: TabBar,
    navigationOptions: ({ navigation }) => ({
      title: 'Meet Mindera',
      headerStyle: {
        backgroundColor: '#a8a7a7'
      },
      headerTintColor: '#ffffff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      headerLeft: (
        <TouchableWithoutFeedback onPress={() => navigation.toggleDrawer()}>
          <Icon
            marginLeft={10}
            name="menu"
            color="#ffffff"
            size={30}
          />
        </TouchableWithoutFeedback>
      ),
      headerRight: (
        <TouchableWithoutFeedback onPress={() => alert('Not yet implemented')}>
          <Icon
            marginRight={10}
            name="search"
            color="#ffffff"
            size={30}
          />
        </TouchableWithoutFeedback>
      ),
    })
  },
  Day: {
    screen: DayView
  },
  Descriptions: {
    screen: DescriptionsView
  }
})

/**
 * RootNavigator called in App.js
 */
const RootNavigator = createDrawerNavigator({
//Navigators available in the Drawer
  Home: {
    screen: TopBar,
  },
  About: {
    screen: createStackNavigator({
      About: {
        screen: AboutView
      }
    })
  },
},
//Drawer properties
{
  //contentComponent: Sidebar,
  drawerWidth: 250,
  drawerPosition: 'left',
  drawerBackgroundColor: '#a8a7a7',
   contentOptions: {
     activeTintColor: '#52606c'
   }
})

export default createAppContainer(RootNavigator);