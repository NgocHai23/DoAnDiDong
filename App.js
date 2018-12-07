import {createStackNavigator} from "react-navigation"
import TrangChu from "./components/TrangChu";

import DangKi from "./components/DangKi";

const App = createStackNavigator({
  Home: { screen: TrangChu},
  Login: {screen: DangKi}
}, {
  initialRouteName: 'Login'
});


export default App;