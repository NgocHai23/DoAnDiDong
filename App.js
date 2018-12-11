import {createStackNavigator} from "react-navigation"
import TrangChu from "./components/TrangChu";
import DangNhap from "./components/DangNhap";
import DangKi from "./components/DangKi";
import TaoCV from "./components/TaoCV";
import TaoCV2 from "./components/TaoCV2";

const App = createStackNavigator({
  Home: { screen: TrangChu},
  Login: {screen: DangNhap},
  Register:{screen: DangKi},
  TaoCV:{screen:TaoCV},
  TaoCV2:{screen:TaoCV2},

}, {
  initialRouteName: 'TaoCV'
});


export default App;