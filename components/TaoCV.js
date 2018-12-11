import React from 'react';
import { Text, View, Image, StatusBar, 
         TouchableOpacity, TouchableHighlight,ScrollView,
         TextInput, Picker,CheckBox} from 'react-native';
         import DatePicker from 'react-native-datepicker';
import styles from '../css/Styless';

export default class TrangChu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        titleTaoCV: "Tạo một CV",
        bodyText: "thông tin cá nhân",      
        titleHoDem: "Họ tên đệm",
        titleTen: "Tên",
        titleDiaDiem: "Tỉnh-thành phố",

        txtHoDem: "",
        txtTen: "",
        txtDiaDiem:"",

        titleText1: "Tên Công ty",
      bodyText1: "công ty gần nhất làm việc",
      titleText2: "Chức danh",
      bodyText2: "vị trí vai trò trong công ty",
      titleText3: "Địa điểm",
      bodyText3: "địa chỉ công ty cũ",
      titleNgayVaoLam: "Ngày vào làm",
      titleNgayOut: "Ngày thôi việc",

      txtTenCTY: "",
      txtChucDanh: "",
      date:"2016-05-15",
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
      <ScrollView>
        <View style={styles.container}>
          <StatusBar hidden/>

          <Text style={{paddingLeft: 20}}>
              <Text style={{fontSize: 16, fontWeight: '500'}}>{this.state.titleTaoCV}{'\t'}{'\t'}{'\t'}</Text>
              <Text style={{fontSize: 13}}>{this.state.bodyText}</Text>    
          </Text>
          <Text style={{paddingLeft: 20}}>
              <Text style={{fontSize: 16, fontWeight: '500'}}>{this.state.titleHoDem}{'\t'}{'\t'}{'\t'}</Text>
          </Text>

          <TextInput style={styles.txtInput1} 
                    onChangeText={(txtHoDem) => this.setState({txtHoDem})} 
                    value={this.state.txtHoDem}/>

          <Text style={{paddingLeft: 20}}>
            <Text style={{fontSize: 16, fontWeight: '500'}}>{this.state.titleTen}{'\t'}{'\t'}{'\t'}</Text>
          </Text>

          <TextInput style={styles.txtInput1}  
                    onChangeText={(txtTen) => this.setState({txtTen})}
                    value={this.state.txtTen}/>

          <Text style={{paddingLeft: 20}}>
            <Text style={{fontSize: 16, fontWeight: '500'}}>{this.state.titleDiaDiem}{'\t'}{'\t'}{'\t'}</Text>
          </Text>
          <Picker
                      selectedValue={this.state.language}
                      style={{ height: 50, width: 100 }}
                      onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                      <Picker.Item label="Java" value="java" />
                      <Picker.Item label="JavaScript" value="js" />
                      <Picker.Item label="JavaScript" value="js" />
                      <Picker.Item label="JavaScript" value="js" />
                      <Picker.Item label="JavaScript" value="js" />
                      <Picker.Item label="JavaScript" value="js" />
                      <Picker.Item label="JavaScript" value="js" />
                      <Picker.Item label="JavaScript" value="js" />
                      <Picker.Item label="JavaScript" value="js" />
                      <Picker.Item label="JavaScript" value="js" />
                      <Picker.Item label="JavaScript" value="js" />
                      <Picker.Item label="JavaScript" value="js" />
                      <Picker.Item label="JavaScript" value="js" />
                      <Picker.Item label="JavaScript" value="js" />
                      <Picker.Item label="JavaScript" value="js" />
                      <Picker.Item label="JavaScript" value="js" />
                      <Picker.Item label="JavaScript" value="js" />
                      <Picker.Item label="JavaScript" value="js" />
                      <Picker.Item label="JavaScript" value="js" />
                      <Picker.Item label="JavaScript" value="js" />
                      <Picker.Item label="JavaScript" value="js" />
                      <Picker.Item label="JavaScript" value="js" />
                      <Picker.Item label="JavaScript" value="js" />
                      <Picker.Item label="JavaScript" value="js" />
                      <Picker.Item label="JavaScript" value="js" />
                  </Picker> 

            
        <TextInput style={styles.txtInput1} 
                   onChangeText={(txtTenCTY) => this.setState({txtTenCTY})} 
                   value={this.state.txtTenCTY}/>

        <Text style={{paddingLeft: 20}}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>{this.state.titleText2}{'\t'}{'\t'}{'\t'}</Text>
          <Text style={{fontSize: 13}}>{this.state.bodyText2}</Text>
        </Text>

        <TextInput style={styles.txtInput1}  
                   onChangeText={(txtChucDanh) => this.setState({txtChucDanh})}
                   value={this.state.txtChucDanh}/>

        <Text style={{paddingLeft: 20}}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>{this.state.titleText3}{'\t'}{'\t'}{'\t'}</Text>
          <Text style={{fontSize: 13}}>{this.state.bodyText3}</Text>
        </Text>
        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="JavaScript" value="js" />
                   
        </Picker> 


        <Text style={{paddingLeft: 20}}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>{this.state.titleNgayVaoLam}</Text>
        </Text>
        <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
      
      
      <Text style={{paddingLeft: 20}}>
          <Text style={{fontSize: 16, fontWeight: '500'}}>{this.state.titleNgayOut}</Text>
        </Text>
        <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
      <CheckBox
        center
        title='Click Here'
        checkedIcon='dot-circle-o'
        uncheckedIcon='circle-o'
        checked={this.state.checked}
      />
          <TouchableOpacity style={styles.btn1}>
            <Text style={{fontSize: 16, color:'#fff', fontWeight:'500'}}>Tiếp tục</Text>
          </TouchableOpacity> 
        </View>
             
      </ScrollView>
    );
  }
}

