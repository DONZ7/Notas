import React,{Fragment,useState} from 'react';
import {View,Text} from 'react-native';
import { Navbar,NoteBody } from '../../Molecules';
import styles from './style';
import {setData} from './../../../hooks/firebase';

const CreateNote=()=>{
  
    const [titulo, setTitulo] = useState("");
    const [contenido, setContenido] = useState("");
    
    const updateTitle=(value)=>{
        setTitulo(value);
    }

    const updateBody=(value)=>{
        setContenido(value);
    }

    const notes=(titulo,contenido)=>{
        setData(titulo,contenido);
        console.warn({titulo,contenido})
    }

    return (
        <Fragment>
             <View style={styles.container}>
                <Navbar titulo={titulo} contenido={contenido} action={notes}/>
                <NoteBody titulo={titulo} updateTitle={updateTitle} contenido={contenido} updateBody={updateBody}/>
            </View>
        </Fragment>
    );
}

export default CreateNote;