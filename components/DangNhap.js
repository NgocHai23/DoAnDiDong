import React, {Component} from 'react';
import { Text, View, StatusBar, Image,
         TouchableOpacity, KeyboardAvoidingView,
         TextInput} from 'react-native';
import styles from '../css/Styless';

export default class DangNhap extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        txtTaiKhoan: "",
        txtMatKhau: ""
      }
    }


    static navigationOptions = {
        title: 'Đăng Nhập',
        headerStyle:{
          backgroundColor: '#000'
        },
        headerTintColor: '#fff',
        headerTintStyle:{
          fontWeight: 'bold',
        }
    };

     TaoTK=()=>{
      this.props.navigation.navigate('Register')  
    }

    render() {
        return (
          <View style={styles.container}>
            <StatusBar hidden/>

            <Image style={styles.logo} source={require('../assets/logo.png')}/>
            <Text style={{fontSize: 20, fontWeight: '500'}}>Đăng nhập</Text>

            <Text style={{paddingLeft: 20}}>Địa chỉ email</Text>

            <TextInput placeholder="email" placeholderTextColor="#585858" style={styles.txtInput2}  
                onChangeText={(txtTaiKhoan) => this.setState({txtTaiKhoan})}
                value={this.state.txtTaiKhoan}/>

            <Text style={{paddingLeft: 20}}>Mật khẩu</Text>

            <TextInput placeholder="password" placeholderTextColor="#585858" style={styles.txtInput2}  
                secureTextEntry
                onChangeText={(txtMatKhau) => this.setState({txtMatKhau})}
                value={this.state.txtMatKhau}/>

            <TouchableOpacity style={styles.btn1}>
              <Text style={{fontSize: 16, color:'#fff', fontWeight:'500'}}>Đăng nhập</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn1} onPress={this.TaoTK}>
              <Text style={{fontSize: 16, color:'#fff', fontWeight:'500'}} >Tạo tài khoản</Text>
            </TouchableOpacity>
          </View>
        );
      }

}

