
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
