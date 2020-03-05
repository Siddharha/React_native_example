import React from 'react';
import { AppRegistry, StyleSheet, Alert, Text, Button, View } from 'react-native';

export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true,
                  dataSource:""}
  }

  onScreenLoad() {

    setTimeout(function(){
      Alert.alert("Alert Shows After 5 Seconds of Delay.")
 
    }, 1000);
  }

//  componentDidMount(){
//      return fetch('https://creative-lizard.000webhostapp.com/getDetailse.php')
//     .then((response) => response.json())
//     .then((responseJson) => {
//        this.setState({
//           // dataSource: JSON.stringify(responseJson),
//         }, function(){

//         });
//     })
//     .catch((error) => {
//       console.error(error);
//       dataSource: JSON.stringify({});
//     });
//   }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>SAMPLE APP</Text>
        {/* <Text>{this.state.dataSource}</Text> */}
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
  netTextStyle:{
    color:'#000',
    fontWeight:"bold",
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
