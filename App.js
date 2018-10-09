import React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from "./src/pages/Login";
import Register from "./src/pages/Register";
import { createStackNavigator } from 'react-navigation';
/*export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Login/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

const App = createStackNavigator({
    Login: { screen: Login},
    Register: { screen: Register}
})

export default App;
