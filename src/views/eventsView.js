import React from 'react';
import { getEvents } from '../utils/bootstrapper';
import { EventListPrinter } from '../utils/eventListPrinter';

export class EventsView extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            events: [],
        }
    }
    
    /**
     * Since the events are comming in a promise, I use the React Lifecycle Methods to handle the promise
     * It sets the state of the Component to contain the events returned from the bootstrapper.
     */
    componentDidMount () {
        getEvents().then((e) => {
            this.setState({
                events: e
            })
        });
    }

    /**
     * The render is only returning if there is any event in the state.
     * If there isn't, it returns null but, every time the state is changed (e.g. the promise is treated and the events are set in the state),
     * the render runs again
     */
    render () {
        if(this.state.events.length >0){
            return (
                <EventListPrinter
                events={this.state.events}
                navigator={this.props.screenProps.rootNavigation}/>
            )
        } else {
            return null;
        }
    }
}

export default EventsView;
