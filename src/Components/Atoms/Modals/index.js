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

const Modals = () => {
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
            <Text style={styles.modalText}>Desea salir</Text>

<View style={styles.column}>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "green" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>si</Text>
            </TouchableHighlight>

            <TouchableHighlight
        style={{ ...styles.openButton, backgroundColor: "red" }}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Text style={styles.textStyle}>no</Text>
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
       <Icons name="log-out" color="white"/>
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
    backgroundColor: "white",
    borderRadius: 20,
    padding: 50,
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
    backgroundColor: "purple",
    borderRadius: 20,
    padding: 10,
    elevation: 10
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  column:{
    flexDirection:"row",
   
  }
});

export default Modals;