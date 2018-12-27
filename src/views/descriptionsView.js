import React from 'react'
import { FlatList, Text, View } from 'react-native'

import { getDescriptions } from '../utils/bootstrapper'

export class DescriptionsView extends React.Component {

  /**
   * Goes to the bootstrapper to get the descriptions.
   * Just like in EventListPrinter, it is not a promise, so we just get directly the return on the constructor and set it in the state
   */
  constructor (props) {
    super(props)
    this.state = {
      list: getDescriptions()
    }
  }

  /**
   * Sets the title of the page with the parameters recieved from the "parent" page
   */
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('list', 'List')
    }
  }

  render () {
    return (
      <FlatList
        data={this.state.list}
        contentContainerStyle={{
          paddingLeft: 10,
          paddingRight: 10
        }}
        renderItem={({item}) => (
          <View style={{
            flex: 1,
            alignItems: 'center',
            width: 160,
            minHeight: 160,
            maxHeight: 200,
            marginTop: 20
          }}>
            <View>
              <View style={{height: 160, width: 160, backgroundColor: 'darkgrey'}}/>
              <Text style={{marginTop: 5}}>{item}</Text>
            </View>
          </View>
        )}
        numColumns={2}
        keyExtractor={(item) => item}
      />
    )
  }
}