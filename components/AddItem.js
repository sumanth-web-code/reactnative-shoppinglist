import React,{ useState } from 'react';
import { View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native';

const AddItem =({addItem}) =>{
    const[text,setText] = useState('');
    return(
       <View >
           <TextInput style={styles.input} placeholder="Add Items...." onChangeText={(value)=>setText(value)}/>
           <TouchableOpacity style={styles.btn} onPress={()=>addItem(text)}>
               <Text style={styles.btnText}>Add Item</Text>
           </TouchableOpacity>
       </View>
    )
}

const styles = StyleSheet.create({
    input:{
        height:60,
        padding:8,
        fontSize:16
    },
    btn:{
        backgroundColor:'#c2badb',
        padding: 9,
        margin: 5
    },
    btnText:{
        color:'darkslateblue',
        fontSize: 20,
        textAlign:'center'
    }

})


export default AddItem;