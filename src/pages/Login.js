import React from 'react';
import { AppRegistry, StyleSheet, Alert, Text, Button, View } from 'react-native';

export default class Login extends React.Component {
  onScreenLoad() {

    setTimeout(function(){
      Alert.alert("Alert Shows After 5 Seconds of Delay.")
 
    }, 10000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>SAMPLE APP</Text>
       <Button
          title="Register"
          onPress={() => this.props.navigation.navigate('Register')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   textStyle: {
    color:'#00bcd4',
    fontWeight:"bold",
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
