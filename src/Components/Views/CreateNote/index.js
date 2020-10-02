import React,{Fragment,useState} from 'react';
import {View,Text} from 'react-native';
import { Navbar,NoteBody } from '../../Molecules';
import styles from './style';
import {setData} from './../../../hooks/firebase';
import {Actions} from 'react-native-router-flux';
import auth from '@react-native-firebase/auth';

const CreateNote=(props)=>{
  
    const [titulo, setTitulo] = useState("");
    const [contenido, setContenido] = useState("");
    const [id, setId] = useState(props.id);

    const updateTitle=(value)=>{
        setTitulo(value);
    }

    const updateBody=(value)=>{
        setContenido(value);
    }

    const addNote=()=>{
        setData(titulo,contenido);
        Actions.Home();
        console.warn({titulo,contenido})
    }
    console.warn({titulo,contenido})
    return (
        <Fragment>
             <View style={styles.container}>
                <Navbar titulo={titulo} contenido={contenido} id={id} action={addNote}/>
                <NoteBody titulo={titulo} updateTitle={updateTitle} contenido={contenido} updateBody={updateBody}/>
            </View>
        </Fragment>
    );
}

export default CreateNote;