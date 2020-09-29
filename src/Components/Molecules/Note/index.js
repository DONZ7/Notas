import React, { Fragment,useEffect } from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import styles from './style';
import {getData} from './../../../hooks/firebase';

const Note=(props)=>{
  //  const {title,paragraph}=props
   // const [tittle, setTitle] = useState("");
    //const [paragraph, setParagraph] = useState("")
//const {titulo,contenido}=item
 

    return(
        <Fragment>
            <TouchableOpacity >
               <View style={styles.container}>
                <View style={styles.column}>
                    <View style={styles.boxTittle}>
                        <Text style={styles.font}>{props.titulo}</Text>
                    </View>
                    <View style={styles.boxText}>
                        <View style={styles.boxImage}></View>
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