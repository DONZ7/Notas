import React, { Fragment } from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import styles from './style';

const Note=()=>{
    return(
        <Fragment>
            <TouchableOpacity >
               <View style={styles.container}>
                <View style={styles.column}>
                    <View style={styles.boxTittle}>
                        <Text style={styles.font}>Hola</Text>
                    </View>
                    <View style={styles.boxText}>
                        <View style={styles.boxImage}></View>
                        <View style={styles.text}>
                            <Text>este es un ejemplo jjjjjjjsjjsbhvhsvhavshvahvhsvhasvhashavshavhsvhsavhav</Text>
                        </View>
                    </View>
                    
                </View>

            </View>
            </TouchableOpacity>
 
        </Fragment>
    );
}

export default Note;