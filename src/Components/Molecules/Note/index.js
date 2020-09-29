import React, { Fragment,useEffect } from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import styles from './style';
import {getData} from './../../../hooks/firebase';

const Note=({note})=>{
  //  const {title,paragraph}=props
   // const [tittle, setTitle] = useState("");
    //const [paragraph, setParagraph] = useState("")
const {title,paragraph}=note
 

    return(
        <Fragment>
            <TouchableOpacity >
               <View style={styles.container}>
                <View style={styles.column}>
                    <View style={styles.boxTittle}>
                        <Text style={styles.font}>{title}</Text>
                    </View>
                    <View style={styles.boxText}>
                        <View style={styles.boxImage}></View>
                        <View style={styles.text}>
                            <Text>{paragraph}</Text>
                        </View>
                    </View>
                    
                </View>

            </View>
            </TouchableOpacity>
 
        </Fragment>
    );
}

export default Note;