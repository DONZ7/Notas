import React,{Fragment,useState} from 'react';
import {View,Text} from 'react-native';
import { Navbar,NoteBody } from '../../Molecules';
import styles from './style';
import {EditData} from './../../../hooks/firebase';

const EditNote=(props)=>{
  
    const [titulo, setTitulo] = useState(props.titulo);
    const [contenido, setContenido] = useState(props.contenido);
    const [id, setId] = useState(props.id);
    const updateTitle=(value)=>{
        setTitulo(value);
    }

    const updateBody=(value)=>{
        setContenido(value);
    }

    const updateId=(value)=>{
        setId(value);
    }
    

    const EditNote=(id,titulo,contenido)=>{
        EditData(id,titulo,contenido);
        console.warn({id})
    }

    return (
        <Fragment>
             <View style={styles.container}>
                <Navbar id={id} titulo={titulo} contenido={contenido}  action={EditNote}/>
                <NoteBody titulo={titulo} updateTitle={updateTitle} contenido={contenido} updateBody={updateBody}/>
            </View>
        </Fragment>
    );
}

export default EditNote;