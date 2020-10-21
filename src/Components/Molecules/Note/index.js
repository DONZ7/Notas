import React, { Fragment,useEffect } from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import styles from './style';
import {getData} from './../../../hooks/firebase';
import {Actions} from 'react-native-router-flux';
import {Images} from './../../Atoms';
const Note=(props)=>{

    const Edit=()=>{
        Actions.EditNote(props)
        console.warn(props.titulo,props.contenido,props.imageUrl);
    }

    return(
        <Fragment>
            <TouchableOpacity  onPress={Edit}>
               <View style={styles.container}>
                <View style={styles.column}>
                    <View style={styles.boxTittle}>
                        <Text style={styles.font}>{props.titulo}</Text>
                    </View>
                    <View style={styles.boxText}>
                        <View style={styles.boxImage}>
                        <Images photo={props.imageUrl} style={styles.ImageStorage} />
                        </View>
                        <View style={styles.text}>
                            <Text>{props.contenido}</Text>
                        </View>
                    </View>
                    
                </View>

            </View>
            </TouchableOpacity>
 
        </Fragment>
    );
}

export default Note;