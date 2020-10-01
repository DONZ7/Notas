import React, { Fragment,useState } from 'react';
import {Button} from 'react-native';
import styles from './style';
import { TextInput } from 'react-native';

const Input = (props) => {
  const {value,action,placeholder,password}=props

  return (
    <TextInput
      style={styles.container}
      placeholder={placeholder}
      onChangeText={action}
      value={value}
     
    />
  );
}

export default Input;






