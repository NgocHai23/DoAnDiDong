import React, {Component} from 'react';
import { Text, View, StatusBar} from 'react-native';
import {createStackNavigator} from "react-navigation";
import TrangChu from "./components/TrangChu";
import DangNhap from "./components/DangNhap";
import DangKi from "./components/DangKi";
import TaoCV from "./components/TaoCV";
import TaoCV2 from "./components/TaoCV2";
import showCongViec from "./components/showCongViec";
import ChiTietCV from "./components/ChiTietCV";

const App = createStackNavigator({
  Home: { screen: TrangChu},
  Login: {screen: DangNhap},
  Register:{screen: DangKi},
  TaoCV:{screen:TaoCV},
  TaoCV2:{screen:TaoCV2},
  ChiTietCV:{screen:ChiTietCV},
  showCongViec:{screen:showCongViec},
}, {
  initialRouteName: 'showCongViec'
});

export default App;