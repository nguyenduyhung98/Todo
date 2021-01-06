import React,{useState,useEffect,useRef} from 'react'
import { View,Text,StyleSheet, Button,Alert,FlatList } from 'react-native'
import { CardContext } from '../context/CardContext'
import { CardProduct } from '../components'


export default function Card(props){

  const [items,setItems] = useState(props.cartItems)

  
    return (
      <View style={styles.container}>
        <View>
          <CardContext.Consumer> 
          {({ cartItems }) => {
            console.log('Card screen : ', JSON.stringify(cartItems))
            return cartItems.map((product) => (
               <View style={styles.list}>
                    <CardProduct product={product}/>
                </View>
            ))   
          }}  
         </CardContext.Consumer> 
        </View>
        <View style={styles.footer}>
          <View>
            <Text style={styles.total}>5000k</Text>
          </View>
          <View>
            <Button
              title="Đặt Hàng"
              onPress={() => {
                Alert.alert('Đặt hàng thành công');
              }}
            />
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  total: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 220,
    alignItems: 'center',
    marginBottom: 20,
  },
  footer: {
    alignItems: 'center',
    backgroundColor: 'gray',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 0},
    height: 80,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
  },
  list: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 0},
    marginBottom: 16,
    justifyContent: 'center',
  },
});
