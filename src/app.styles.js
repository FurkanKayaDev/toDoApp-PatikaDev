import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#293649',
      justifyContent: 'space-between',
  
    },
    input: {
      borderBottomWidth: 0.5,
      borderBottomColor: '#c7c8cc',
      color:'white'
    },
    writeWrapper: {
      backgroundColor: '#3e4a5b',
      borderRadius: 10,
      padding: 5,
      margin: 10,
     
    },
    Header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 20
    },
  
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#FFA500'
    },
    count: {
  
      fontSize: 24,
      fontWeight: 'bold',
      color: '#FFA500'
    },
    tasksWrapper: {
      paddingTop: 10,
  
    },
    button: {
      backgroundColor: '#808080',
      borderWidth: 0.4,
      borderRadius: 10,
      alignContent: 'center',
      marginHorizontal: 20,
      paddingVertical: 6,
      margin: 10,
      alignItems: 'center'
  
    },
    buttonText: {
      fontSize: 18,
      marginLeft: 10,
      color: 'white'
    }
  
  });

  export default styles;
  