import React, { Fragment } from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {Icons,Modals} from '../../Atoms';
import styles from './style';
import {Actions} from 'react-native-router-flux';

const NavbarHome=()=>{
    const handleOut=()=>{
        Actions.Start()
            };

    return(
        <Fragment>
            <View style={styles.container}>
                <View style={styles.IconsContainer}>
                    <TouchableOpacity>
                         <Icons name="sync-sharp" color="white"/>  
                    </TouchableOpacity>       
                </View>
                    <View >
                        <Text style={styles.text}>Titulo</Text>
                    </View>
                <View style={styles.IconsContainerRigth}>
                <TouchableOpacity onPress={handleOut}>
                            <Modals/>
                </TouchableOpacity>
                </View>
            </View>
        </Fragment>
    );
}

export default NavbarHome;