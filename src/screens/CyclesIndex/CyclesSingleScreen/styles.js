import React from 'react';
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    headerContainer: {
      backgroundColor: '#eee1db',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    headerLeft: {
      width: '80%',
      flexDirection: 'row',
      justifyContent: 'flex-end'
    },
    headerRight: {
      width: '10%',
      flexDirection: 'row',
      justifyContent: 'flex-end'
    },
    headerText: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#a46950',
      textAlign: 'center',
      marginTop: 30,
      marginBottom: 10
    },
    headerIconActive: {
      color: '#a46950',
      alignSelf: 'center',
      marginRight: 15,
      marginTop: 15
    },
    headerIconInactive: {
      color: '#999999',
      alignSelf: 'center',
      marginRight: 15,
      marginTop: 15
    },
    subContainer:{
      margin: 15
    }
  });