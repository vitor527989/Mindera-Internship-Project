import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';

import { getVacancies } from '../utils/bootstrapper';

class VacanciesView extends React.Component {
  /**
* Goes to the bootstrapper to get the lists.
* Just like in EventListPrinter, it is not a promise, so we just get directly the return on the constructor and set it in the state
*/
  constructor(props) {
    super(props)
    this.state = {
      vacancies: getVacancies(),
    }
  }

  /**
   * The hideChevron property on ListItem hides the arrow on the listItem
   */
  render() {
    return (
      <FlatList
        data={this.state.vacancies}
        renderItem={({ item }) => (
          <View style={{ marginLeft: 10, marginRight: 10 }}>
            <ListItem
              leftIcon={<Icon name="work" />}
              title={<Text style={{ marginTop: 8, marginBottom: 8 }}> {item}</Text>}
              hideChevron
            />
          </View>
        )}
        keyExtractor={(item) => item}
      />
    )
  }
}

export default VacanciesView;
