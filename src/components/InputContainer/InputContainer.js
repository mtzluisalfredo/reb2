import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

class InputContainer extends Component {
  state = {
    placeName: ''
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeAdded = () => {
    if (this.state.placeName !== '') {
      this.props.onPlaceAdded(this.state.placeName);
    }
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={{ width: 300 }}
          placeholder="An awesome place"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          style={styles.placeInput}
        />
        <Button
          title="Add"
          style={styles.placeButton}
          onPress={this.placeAdded}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    //flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  }
});

export default InputContainer;
