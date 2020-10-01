
import firestore from '@react-native-firebase/firestore';

export const getData = async()=>{
    const datos=[];
    try{
        var data= await firestore().collection('notas')
            .get();
            data.forEach((doc) => {
            datos.push({id: doc.id, ...doc.data()});
        });
    }
 catch (error){
    console.warn(error);
}
return datos;
};


export const setData = async(titulo,contenido)=>{
    const obj={titulo,contenido};
    try{
        await firestore().collection('notas')
            .add({titulo,contenido});
        }
        
 catch (error){
    console.warn(error);
}
};

export const EditData = async(id,titulo,contenido)=>{
    const obj={titulo,contenido};
    try{
        await firestore().collection('notas').doc(id)
            .update(obj);
        }
        
 catch (error){
    console.warn(error);
}
};

export const deleteData = async(id)=>{
    //const obj={titulo,contenido};
        await firestore().collection('notas').doc(id).delete();
};