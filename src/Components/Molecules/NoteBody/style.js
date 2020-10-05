
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
        marginHorizontal:10,
        backgroundColor: '#F5FCFF',
        
    }
,
    box:{
        
        flex:1,
        flexWrap:"wrap"
        
    }
    ,
    textareaContainer: {
      height: 280,
      padding: 5,
      backgroundColor: '#F5FCFF',
    },
    textarea: {
      textAlignVertical: 'top',  // hack android
      height: 170,
      fontSize: 14,
      color: '#333',
    },
    container2: {
        flex: 1,
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
      },
      
})

export default styles;