import React from 'react';
import { Text, View, Image, StatusBar, 
         TouchableOpacity, TouchableHighlight,ScrollView,
         TextInput, Picker,CheckBox} from 'react-native';
         import DatePicker from 'react-native-datepicker';
import styles from '../css/Styless';
export default class TrangChu extends React.Component {
    constructor(props){
        super(props);
        this.state={
            txtTimKiem:"",
            txtTenCTY:"Glorucode",
            txtVitri:"Thành phố Hồ Chí Minh",
            txtLuong:"5000000 - 10 000000 VND",
            txtTenCV:"Nhân viên bán hàng",

        }
    }

    static navigationOptions = {
        title: 'show Công Việc',
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
                    <TextInput placeholder="Tìm kiếm công việc" placeholderTextColor="#585858" style={styles.txtInput2}  
                    onChangeText={(txtTimKiem) => this.setState({txtTimKiem})}
                    value={this.state.txtTimKiem}/>

                    <View style={styles.LuaChon}>
                        <TouchableOpacity style={styles.btnLuaChon}>
                            <Text style={{fontSize: 16, color:'#fff', fontWeight:'500'}}>Toàn TG</Text>
                         </TouchableOpacity>
                         <TouchableOpacity style={styles.btnLuaChon}>
                            <Text style={{fontSize: 16, color:'#fff', fontWeight:'500'}}>Bán TG</Text>
                         </TouchableOpacity>
                         <TouchableOpacity style={styles.btnLuaChon}>
                            <Text style={{fontSize: 16, color:'#fff', fontWeight:'500'}}>Full Time</Text>
                         </TouchableOpacity>
                    </View>

                    <View style={styles.ChiTietCV}>
                        <Text style ={styles.tenCV}>{this.state.txtTenCV}</Text>
                        <Text style ={styles.tenCTY}>{this.state.txtTenCTY}</Text>
                        <Text style ={styles.Vitri}>{this.state.txtVitri}</Text>
                        <Text style ={styles.Luong}>{this.state.txtLuong}</Text>
                    </View>



                </View>
               
            </ScrollView>
        )
    }
}
