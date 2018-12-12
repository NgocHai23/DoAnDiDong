import React from 'react';
import { Text, View, Image, StatusBar, 
         TouchableOpacity, TouchableHighlight,ScrollView,
         TextInput, Picker,CheckBox, Alert} from 'react-native';
         import DatePicker from 'react-native-datepicker';
import styles from '../css/Styless';

export default class ChiTietCV extends React.Component {
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
        title: 'Chi tiết công việc',
        headerStyle:{
          backgroundColor: '#000'
        },
        headerTintColor: '#fff',
        headerTintStyle:{
          fontWeight: 'bold',
        }
      };

      render(){
          return(
              <ScrollView>
                    <View style={styles.container}>
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