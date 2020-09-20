import React, { Fragment,useState } from 'react';
import {Button} from 'react-native';
import styles from './style';
import { TextInput } from 'react-native';

const Input = (props) => {
  const {name,action}=props
  const [value, setValue] = useState();

  return (
    <TextInput
      style={styles.container}
      onChangeText={action}
      value={name}
    />
  );
}

export default Input;






