import React, { useState } from "react";
import {Icons} from '../../Atoms';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";

const Modals = ({name,message,action}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{message}</Text>

<View style={styles.column}>
            <TouchableHighlight
              style={{ ...styles.openButton2,backgroundColor:'#C28ECD' }}
               onPress={() => {
               // onPress=
               {action()}
               setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle} >Si</Text>
            </TouchableHighlight>

            <TouchableHighlight
        style={{ ...styles.openButton2,backgroundColor:'#C28ECD'}}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Text style={styles.textStyle}>No</Text>
      </TouchableHighlight>
      </View>
            
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
       <Icons name={name} color="white"/>
      </TouchableHighlight>

      
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  modalView: {
    margin: 10,
    backgroundColor: "#F3E7FA",
    borderRadius: 10,
    padding: 70,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
   // backgroundColor: "purple",
    borderRadius: 20,
    padding: 10,
    //elevation: 5
  },
  openButton2: {
    // backgroundColor: "purple",
    marginHorizontal:5,
     borderRadius: 10,
     padding: 20,
     elevation: 5
   },
  textStyle: {
    color: "purple",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color:'purple'
  },
  column:{
    flexDirection:"row",
   
  }
});

export default Modals;