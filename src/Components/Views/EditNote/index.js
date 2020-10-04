import React,{Fragment,useState} from 'react';
import {View,Text} from 'react-native';
import { Navbar,NoteBody } from '../../Molecules';
import styles from './style';
import {EditData} from './../../../hooks/firebase';
import {Actions} from 'react-native-router-flux';
import { showMessage, hideMessage } from "react-native-flash-message";

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
    

    const MessageSuccess=() => {
    
        showMessage({
            icon: "success", position: "right",
            message: titulo,
            description: "Nota editada exitosamente",
            type: "success",
        });
}

    const EditNote=()=>{
        EditData(id,titulo,contenido);
        Actions.Home();
        MessageSuccess();
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