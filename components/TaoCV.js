import React from 'react';
import { Text, View, Image, StatusBar, 
         TouchableOpacity, TouchableHighlight,
         TextInput } from 'react-native';
import styles from '../css/Styless';

export default class TaoCV extends React.Component {
    


    static navigationOptions = {
        title: 'Tìm việc',
        headerStyle:{
          backgroundColor: '#000'
        },
        headerTintColor: '#fff',
        headerTintStyle:{
          fontWeight: 'bold',
        }
      };

    render(){
        return (
            <View style={styles.container}>
                
                Text
            </View>
        );
    }
}