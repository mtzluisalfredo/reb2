import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import ListContainer from '../../components/ListContainer/ListContainer';

class FindPlaceScreen extends Component {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'sideDrawerToggle') {
        this.props.navigator.toggleDrawer({
          side: 'left',
          animated: true
        });
      }
    }
  };

  itemSelectedHandler = key => {
    const selPlace = this.props.places.find(place => {
      return place.key === key;
    });
    this.props.navigator.push({
      screen: 'awesome-places.PlaceDetailScreen',
      title: selPlace.name,
      passProps: {
        selectedPlace: selPlace
      }
    });
  };

  render() {
    return (
      <View>
        <ListContainer
          content={this.props.places}
          onItemSelected={this.itemSelectedHandler}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};

export default connect(
  mapStateToProps,
  null
)(FindPlaceScreen);
