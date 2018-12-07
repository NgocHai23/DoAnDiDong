import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-around',
      paddingHorizontal: 25,
      paddingBottom: 100
    },
    logo:{
      width: 100,
      height: 100,
      resizeMode: 'contain',
      marginRight: 'auto',
      marginLeft: 'auto'
    },
    btn1:{
      backgroundColor: '#2E2EFE',
      borderRadius: 25,
      alignItems: 'center',
      padding: 8
    },
    btn2:{
      paddingVertical:10,
    },
    txtInput1:{
      height: 40,
      borderWidth: 1,
      borderRadius: 3,
      borderColor: '#585858'
    },
    txtInput2:{
      height: 35,
      borderWidth: 1,
      borderRadius: 18,
      borderColor: '#585858'
    }
});