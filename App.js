import React, { useState} from 'react';
import { StyleSheet, View, FlatList,Text,Alert } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import {uuid} from 'uuidv4';

 function App() {
  const[items,setItems] = useState([
    {id:uuid(), text:'Bread'},
    {id:uuid(), text:'Milk'},
    {id:uuid(), text:'Apples'},
    {id:uuid(), text:'Juice'},
  ]);

  const deleteItem =(id) =>{
         setItems(prevItems =>{
           return prevItems.filter(item => item.id != id);
         });
  };

  const addItem = (item)=>{
    if(!item){
      Alert.alert('Please Enter an Item');
    }else {
      setItems(prevItems => {
        return [{id:uuid(), text:item},...prevItems]
      });
    }
  };


  return (
    <View style={styles.container}>
      <Header/>
      <AddItem addItem={addItem}/>
       <FlatList  data={items} renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/> }/>
    </View>
  );
};
 

const styles = StyleSheet.create({
   container:{
     flex:1
   }
});



export default App;
