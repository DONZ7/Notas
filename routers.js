import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Scene,Router,Stack} from 'react-native-router-flux';
import {Home, CreateNote,Login,Start,Registry} from './src/Components/Views';

const Routers=()=>{
  return (
      <Router>
        <Stack key="root">
    
          <Scene key="Start" component={Start} title="Start" initial hideNavBar/>
          <Scene key='Login' component={Login} title="Login" hideNavBar/> 
          <Scene key='Registry' component={Registry} title="Registry" hideNavBar/> 
          <Scene key="CreateNote" component={CreateNote} title="CreateNote"  hideNavBar/> 
          <Scene key="Home" component={Home} title="Home"  hideNavBar/>     
          
        </Stack>
      </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    marginTop:25,
  },
});


export default Routers;