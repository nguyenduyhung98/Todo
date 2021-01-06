import * as React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { CardContext } from '../context/CardContext'

export default function Amount(props){ 
    const [count,setCount] = React.useState(1);


    const decrease = () => {
        if(count <= 1){
            return
        }
        else{
            setCount(count - 1)
        }
    }

    const increase = () => {
        setCount(count + 1)
    }

    return (
      <View style={styles.container}>
        <View style={styles.circle}>
          <Text onPress={() => decrease()}> - </Text>
        </View>

        <Text style={styles.text}>{count}</Text>

        <View style={styles.circle}>
          <Text onPress={() => increase()}> + </Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  circle: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});