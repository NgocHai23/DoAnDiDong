import React from 'react';
import { Text, View, StatusBar, Image,
         TouchableOpacity, TouchableHighlight,
         TextInput } from 'react-native';
import styles from '../css/Styless';

export default class DangKi extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        txtTaiKhoan: "",
        txtMatKhau: "",
        txtNhapLaiMatKhau: "",
      }
    }


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

    render() {
        return (
          <View style={styles.container}>
            <StatusBar hidden/>

            <Image style={styles.logo} source={require('../assets/logo.png')}/>
            <Text style={{fontSize: 20, fontWeight: '500'}}>Tạo một tài khoản (miễn phí)</Text>

            <Text style={{paddingLeft: 20}}>Username</Text>

            <TextInput style={styles.txtInput2}  
                
                onChangeText={(txtTaiKhoan) => this.setState({txtTaiKhoan})}
                value={this.state.txtTaiKhoan}/>

            <Text style={{paddingLeft: 20}}>Password</Text>

            <TextInput style={styles.txtInput2}  
                 secureTextEntry
                onChangeText={(txtMatKhau) => this.setState({txtMatKhau})}
                value={this.state.txtMatKhau}/>

            <Text style={{paddingLeft: 20}}>Retype Password</Text>

            <TextInput style={styles.txtInput2}  
            secureTextEntry
                onChangeText={(txtNhapLaiMatKhau) => this.setState({txtNhapLaiMatKhau})}
                value={this.state.txtNhapLaiMatKhau}/>

            <TouchableOpacity style={styles.btn1}>
              <Text style={{fontSize: 16, color:'#fff', fontWeight:'500'}}>Tạo tài khoản</Text>
            </TouchableOpacity>
          </View>
        );
      }

}

