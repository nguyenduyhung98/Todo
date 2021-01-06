import React from 'react';
import {View, Image, StyleSheet} from 'react-native'
import Images from '../images/react-native.png'

export default function Avatar(){
    return (
      <View style={styles.container}>
        <View style={styles.circle}>
          <Image style={styles.img} source={Images} />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 100,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 0},
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 30,
    shadowOffset: {width: 10, height: 10},
  },
});
