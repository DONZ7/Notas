
import {StyleSheet} from 'react-native';

const styles=StyleSheet.create({

    container:{
      flex:1,
       // backgroundColor:'lightblue',
        justifyContent:'center',
        alignItems:'center'
    },

    row:{
       width:'70%',
       justifyContent:'space-around',
        flexDirection:'column',
        marginVertical:10,
    },

    space:{
        height:20,
        width:'100%'
      

    },
    space2:{
        height:250,
        width:230
      

    },
  
    line:{
       height:10,
        backgroundColor:'white',
        margin:10,
        
    },

    text:{
        
        fontSize:20,
        
    }

})

export default styles;