
import {StyleSheet} from 'react-native';

const styles=StyleSheet.create({

    container:{
        flexDirection:'row',
        backgroundColor:'purple',
        height:'10%',
        alignItems:'center',
        justifyContent:'space-between'
    
    },

    column:{
       flex:1,
        flexDirection:'column',
        backgroundColor:'blue',
     borderRadius:10,
    },

    boxText:{
        flex:2,
        flexDirection:'row',
        backgroundColor:'green',

    },
    IconsContainer:{
        width:'30%',
        flexDirection:'row',
        
        justifyContent:'space-around',
        alignItems:'center',
    },
    IconsContainerRigth:{
        width:'30%',
        flexDirection:'row',
       
        justifyContent:'space-around',
        alignItems:'flex-end',
    },
    openButton2: {
        // backgroundColor: "blue",
        marginHorizontal:5,
         borderRadius: 20,
         padding: 10,
     
       },
    boxImage:{
       flex:1,
        backgroundColor:'black',
    },

    text:{
        color:'white',
        fontSize:20,
        
    }

})

export default styles;