import React,{ useState,useEffect,useRef } from 'react'
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native'
import ProductListItems from '../components/ProductListItems'
import axios from "axios";
import { CardContext } from '../context/CardContext';

export default function Category({route}) { 
  const [products,setProduct] = useState()
  const prevState = usePrevious(products);

    //Get prev state
    function usePrevious(value) {
       const ref = useRef();
         useEffect(() => {
          ref.current = value;
      });
      return ref.current;
    }

    useEffect(() => {     
     const { categoryId }= route.params
     console.log('prev1',prevState)
     console.log('products',products)

     if(prevState == undefined || prevState != products){
        axios.get('/products?categoryid='+categoryId.toString()).then(
           res => {
              setProduct(res.data)
              console.log('res data',res.data)
           }
         )
      .catch(error => {
        console.log(error)
      })
      }
    },[]);

      return (
        <View>
          <FlatList
            data={products}
            numColumns={2}
            contentContainerStyle={styles.container}
            renderItem={({item}) => (
              <View style={styles.wraper}>
                <CardContext.Consumer>
                  {({addToCard}) => (
                    <ProductListItems
                      product={item}
                      addToCardPress={() => addToCard(item)}
                    />
                  )}
                </CardContext.Consumer>
              </View>
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      );
    };
    

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:8,
    paddingTop: 16,
  },
  wraper: {
    paddingHorizontal:8,
    flex:1
  }

});
