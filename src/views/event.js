import React from 'react'
import { FlatList, Text, TouchableHighlight, View } from 'react-native'

export class Event extends React.Component {
  constructor (props) {
    super(props)
  }

  /**
   * Prints all the clickable frames for each day in the event
   */
  render () {
    return (
      <View>
        <FlatList
          horizontal
          data={this.props.eventDays}
          renderItem={({item}) => (
            <TouchableHighlight
            /**
             * On touch, it redirects to the selected day and sends the event name and the day chosen through the props
             */
              onPress={() => this.props.navigator.navigate('Day', {event: this.props.eventName, day: item})}
            >
              <View style={{
                marginTop: 5,
                marginRight: 15,
                width: 160,
                height: 190,
                backgroundColor: 'darkgrey'
              }}>
                <Text style={{
                  marginTop: 150,
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: '300',
                  color: 'white'
                }}>{item}</Text>
              </View>
            </TouchableHighlight>
          )}
          keyExtractor={(item) => item}
        />
      </View>
    )
  }
}
