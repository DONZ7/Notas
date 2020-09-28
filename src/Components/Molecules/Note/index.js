import React, { Fragment,useEffect } from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import styles from './style';
import {getData} from './../../../hooks/firebase';

const Note=()=>{
   // const [tittle, setTitle] = useState("");
    //const [paragraph, setParagraph] = useState("")
    var items=[];
    useEffect(()=>{ 
        itemsData();
    },[]);

    const itemsData=async()=>{ 
    items=await getData();
        console.warn(items);
    }

    return(
        <Fragment>
            <TouchableOpacity >
               <View style={styles.container}>
                <View style={styles.column}>
                    <View style={styles.boxTittle}>
                        <Text style={styles.font}>{items}</Text>
                    </View>
                    <View style={styles.boxText}>
                        <View style={styles.boxImage}></View>
                        <View style={styles.text}>
                            <Text>holasss</Text>
                        </View>
                    </View>
                    
                </View>

            </View>
            </TouchableOpacity>
 
        </Fragment>
    );
}

export default Note;