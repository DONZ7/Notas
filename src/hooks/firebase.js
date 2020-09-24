
import {db} from '../firebase';

export const getData = async()=>{
    const datos=[];
    try{
        let dat=db.collection('notas');
            datos = await dat.get();
            datos.forEach((doc) => {
            datos.push({id: doc.id, ...doc.data()});
        });
    }
 catch (error){
    console.warn(error);
}
return datos;
};
