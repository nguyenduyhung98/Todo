import React,{ useState,useEffect,useRef } from 'react'
import {
  StyleSheet,
  View,
  FlatList,
} from 'react-native'
import { CategoryListItems } from '../components/index'
import axios from 'axios'


export default function Categories({navigation}){

 const [categories,setCategories] = useState()
 const preState = usePrevious(categories)

    function usePrevious(value) {
       const ref = useRef();
         useEffect(() => {
          ref.current = value;
      });
      return ref.current;
    }

      useEffect(() =>{
        if (preState == undefined || preState != categories){
          axios.get('/categories').then(
          res => {
            setCategories(res.data)
          }
        )
        .catch(error => {
          console.log(error)
        })
        }    
      },[]) 

    return (
    <View style={styles.container}>
      <FlatList 
      data={categories} 
      renderItem={({ item }) => 
        <CategoryListItems 
          category = {item}
          onPress={() =>{
            navigation.navigate('Category',{
              categoryName : item.name,
              categoryId :item.id
            })
          }}
        />} 
      keyExtractor={item => item.id.toString()}
      />
    </View>
  );  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
