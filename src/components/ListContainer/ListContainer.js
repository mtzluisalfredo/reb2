import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ListItem from '../ListItem/ListItem';

const listContainer = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.content}
      renderItem={info => {
        return (
          <ListItem
            key={info.item.key}
            item={info.item.name}
            image={info.item.image}
            onItemPressed={() => props.onItemSelected(info.item.key)}
          />
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
});

export default listContainer;
