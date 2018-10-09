import React from 'react';
import { AppRegistry, FlatList, StyleSheet, Alert, Text, Button, View } from 'react-native';
export default class Register extends React.Component {
 
  render() {
    return (
      <View style={styles.container}>
         <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) =>
        <View style={styles.flatview}>
            <Text style={styles.item}>{item.key}</Text>
            <Text style={styles.item}>{"NO DATA"}</Text>
            <View style={styles.underline}/>
          </View>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flex: 1,
  
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  underline: {
    height: 2,
    backgroundColor: '#00bcd4'
  }
});
