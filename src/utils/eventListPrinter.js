import React from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native'
import { Event } from '../views/event';

export class EventListPrinter extends React.Component {
  
  /**
   * Since the events are already loaded from EventsViewm
   * I just need to set them in the state in the constructor
   */
  constructor (props) {
    super(props)
    this.state = {
        events: this.props.events,
        navigator: this.props.navigator
    }
  }

  /**
   * Prints all the events
   */
  render () {
    return (
      <ScrollView style={{flex: 1}}>
        <View
          style={{height: 150, backgroundColor: 'darkgrey'}}
        />
        <FlatList
          data={this.state.events}
          renderItem={({item}) => (
            <View style={{marginTop: 20, marginLeft: 15}}>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>{item.event}</Text>
              <Event
                eventName={item.event}
                eventDays={item.days}
                navigator={this.state.navigator}
              />
            </View>
          )}
          keyExtractor={(item) => item.event}
        />
      </ScrollView>
    )
  }
}