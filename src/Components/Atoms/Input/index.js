import React, { Fragment,useState } from 'react';
import {Button} from 'react-native';
import styles from './style';
import { TextInput } from 'react-native';

const Input = () => {
  //const {name}=props
  const [value, setValue] = useState();

  return (
    <TextInput
      style={styles.container}
      onChangeText={text => setValue(text)}
      value={value}
    />
  );
}

export default Input;






