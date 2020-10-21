
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



      container7: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
      },
      selectButton: {
        borderRadius: 5,
        width: 150,
        height: 50,
        backgroundColor: '#8ac6d1',
        alignItems: 'center',
        justifyContent: 'center'
      },
      uploadButton: {
        borderRadius: 5,
        width: 150,
        height: 50,
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
      },
      imageContainer: {
        marginTop: 30,
        marginBottom: 50,
        alignItems: 'center'
      },
      progressBarContainer: {
        marginTop: 20
      },
      imageBox7: {
        width: 300,
        height: 300
      },
      
})

export default styles;