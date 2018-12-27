import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';

import { getLists } from '../utils/bootstrapper';

export class DayView extends React.Component {
    
  /**
   * Goes to the bootstrapper to get the lists.
   * Just like in EventListPrinter, it is not a promise, so we just get directly the return on the constructor and set it in the state
   */
  constructor (props) {
    super(props)
    this.state = {
      list: getLists(),
    }
  }

  /**
   * Sets the title of the page with the parameters recieved from the "parent" page
   */
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.getParam('event', 'Event') + '_' + navigation.getParam('day', 'day')
    }
  }

  /**
   * The hideChevron property on ListItem hides the arrow on the listItem
   */
  render () {
    return (
      <FlatList
        data={this.state.list}
        renderItem={({item}) => (
          <View style={{marginLeft: 10, marginRight: 10}}>
            <ListItem
              title={<Text style={{marginTop: 8, marginBottom: 8}}>{item}</Text>}
              hideChevron
              /**
               * On press, redirects to the Descriptions page sends the chosen list's name through the props
               */
              onPress={() => this.props.navigation.navigate('Descriptions', {list: item})}
            />
          </View>
        )}
        keyExtractor={(item) => item}
      />
    )
  }
}