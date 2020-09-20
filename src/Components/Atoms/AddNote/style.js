import {StyleSheet} from 'react-native';

const styles=StyleSheet.create({

    container:{
        flexDirection:'row',
        backgroundColor:'purple',
        height:58,
        width:58,
        borderRadius:29,
        margin:1, 
        justifyContent:"center",
        alignItems:"center"
    
    },

    column:{
       flex:1,
        flexDirection:'column',
        backgroundColor:'blue',
     borderRadius:10,
    },

})

export default styles;