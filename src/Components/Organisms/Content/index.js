import React, { Fragment,useEffect } from 'react';
import {View,SafeAreaView,StyleSheet,ScrollView, TouchableOpacity, FlatList} from 'react-native';
import styles from './style';
import {Note} from '../../Molecules';
import {AddNote} from '../../Atoms';
import {Actions} from 'react-native-router-flux';
import {getData} from './../../../hooks/firebase';

const Content=({Data})=>{

const handlePress=()=>{
   Actions.CreateNote();
}

const handleNote=({item})=>{
    //console.warn({item});
    return <Note titulo={item.titulo} contenido={item.contenido} id={item.id}/>
 }
 

    return(
        <Fragment>
            <ScrollView >
           
            <FlatList
                data={Data}
                renderItem={handleNote}
                keyExtractor={items => items.id}/>
           
            </ScrollView>
           
                <View style={styles.noteBody} >  
                <TouchableOpacity onPress={handlePress}>              
                    <AddNote/>
                </TouchableOpacity>

                </View>

             
        </Fragment>
    );
}

export default Content;