import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const Header = () => {
    return(
        <View style={styles.header}>
            <Text style={styles.text}>Shopping List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
   header:{
       height:60,
       backgroundColor:'blue',
       padding:10
    },
    text:{
        color:'white',
        textAlign:'center',
        fontSize: 25,
        height:60
    }
})



export default Header;