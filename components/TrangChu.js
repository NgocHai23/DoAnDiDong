import React from 'react';
import { Text, View, Image, StatusBar, 
         TouchableOpacity, TouchableHighlight,
         TextInput, Alert} from 'react-native';
import styles from '../css/Styless';

export default class TrangChu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      titleText1: "Tìm kiếm",
      bodyText1: "chức danh, từ khóa hoặc công ty",
      titleText2: "Ðịa điểm",
      bodyText2: "tỉnh hoặc thành phố",
      txtTimKiem: "",
      txtDiaDiem: ""
    }
  }
  
  onPress=()=>{
    this.props.navigation.navigate('Login')  
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
        <Text style={{paddingLeft: 20}}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>{this.state.titleText1}{'\t'}{'\t'}{'\t'}</Text>
          <Text style={{fontSize: 13}}>{this.state.bodyText1}</Text>
        </Text>

        <TextInput style={styles.txtInput1} 
                   onChangeText={(txtTimKiem) => this.setState({txtTimKiem})} 
                   value={this.state.txtTimKiem}/>

        <Text style={{paddingLeft: 20}}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>{this.state.titleText2}{'\t'}{'\t'}{'\t'}</Text>
          <Text style={{fontSize: 13}}>{this.state.bodyText2}</Text>
        </Text>

        <TextInput style={styles.txtInput1}  
                   onChangeText={(txtDiaDiem) => this.setState({txtDiaDiem})}
                   value={this.state.txtDiaDiem}/>

        <TouchableOpacity style={styles.btn1}>
          <Text style={{fontSize: 16, color:'#fff', fontWeight:'500'}}>Tìm việc</Text>
        </TouchableOpacity>

        <TouchableHighlight style={styles.btn2} underlayColor={'#5882FA'} onPress={this.onPress}>
          <Text style={{fontSize: 13, color:'#000', fontWeight:'400'}}>Đăng nhập</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.btn2} underlayColor={'#5882FA'}>
          <Text style={{fontSize: 13, color:'#000', fontWeight:'400'}}>Đăng kí</Text>
        </TouchableHighlight>
        
      </View>
    );
  }
}

