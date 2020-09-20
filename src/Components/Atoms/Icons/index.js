import React, { Fragment } from 'react';
import {View,Text} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


const Icons=( {name, color, ...rest})=>{

    return(
        <Fragment>
            <View>
              <Icon name ={name} size={24} color={color}/>
            </View>           
        </Fragment>
    );
}

export default Icons;






