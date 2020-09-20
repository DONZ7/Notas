import React, { Fragment } from 'react';
import {Button,View} from 'react-native';
import styles from './style';

const Buttons=(props)=>{
   const {name,action}=props;
    return(
        <Fragment>
            <View style={styles.container}>
                <Button 
                title={name}
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
                onPress={action}
                />
            </View>
        </Fragment>
    );
}

export default Buttons;







