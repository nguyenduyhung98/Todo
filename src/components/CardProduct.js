import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Amount from './Amount';
import Images from '../images/react-native.png';
import { CardContext } from '../context/index';

export default function CardProduct(props){
    const { product,onPressClose } = props
    const [count, setCount] = React.useState(1);

    const decrease = () => {
      if (count <= 1) {
        return;
      } else {
        setCount(count - 1)
      }
    }

    const increase = () => {
      setCount(count + 1)
    }

    console.log('CardProduct :', JSON.stringify(product))

     
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={{uri: product.images[0].url}} />
        <View>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>{product.price}</Text>
        </View>
        <View>
          <Text style={styles.close} onPress={onPressClose}>
            X
          </Text>
          <View style={styles.amount}>
            <View style={styles.circle}>
              <Text style={styles.text} onPress={() => decrease()}> - </Text>
            </View>

            <Text style={styles.text}>{count}</Text>

            <View style={styles.circle}>
              <Text style={styles.text} onPress={() => increase()}> + </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  img: {
    width: 70,
    height: 70,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: '10%',
    marginRight: 100,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: '10%',
    color: 'gray',
    marginRight: 100,
  },
  close: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'gray',
    marginLeft: 100,
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  amount: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
});
