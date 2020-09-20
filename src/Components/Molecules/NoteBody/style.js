
import {StyleSheet} from 'react-native';

const styles=StyleSheet.create({

    container:{
        margin:12,
        marginVertical:40,
        height:470,
        backgroundColor:'white',
        borderRadius:3
    },

    noteBody:{
       flex:1,
        flexDirection:'column',
        backgroundColor:'white',
        margin:15,
   
    },

    space:{
        height:20,
        backgroundColor:'white',

    },
  
    boxImage:{
       flex:1,
        backgroundColor:'red',
        alignSelf:'center'
    },

    text:{
        
        fontSize:20,
        
    }
,
    box:{
        
        flex:1,
        flexWrap:"wrap"
        
    }
})

export default styles;