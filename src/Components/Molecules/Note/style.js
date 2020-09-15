
import {StyleSheet} from 'react-native';

const styles=StyleSheet.create({

    container:{
        flexDirection:'row',
        backgroundColor:'purple',
        height:100,
        borderRadius:5,
        margin:10, 
    
    },

    column:{
       flex:1,
        flexDirection:'column',
        backgroundColor:'white',
     borderRadius:5,
    },

    boxText:{
        flex:2,
        flexDirection:'row',

    },
    boxTittle:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    boxImage:{
       flex:1,
        backgroundColor:'red',
        margin:2,
        borderRadius:5,
        height:'80%',
    },

    text:{
        flex:6,
        margin:2,
    },

    font:{
        fontSize:20

    }

})

export default styles;