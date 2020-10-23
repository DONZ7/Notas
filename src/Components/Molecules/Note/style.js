
import {StyleSheet} from 'react-native';

const styles=StyleSheet.create({

    container:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'white',
       
        borderRadius:5,
        margin:10, 
        padding:10
    
    },

    column:{
       flex:1,
        flexDirection:'column',
        //backgroundColor:'white',
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
        backgroundColor:'yellow',
        margin:2,
        borderRadius:5,
        height:'80%',
        width:'10%',
    },
    ImageStorage:{
        
         height:20,
         width:20,
         resizeMode: 'stretch',
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