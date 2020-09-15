
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
      
        flexDirection:'column',
       
       margin:20,
       alignItems:'flex-end'
   
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

})

export default styles;