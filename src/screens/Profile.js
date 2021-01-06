import  React,{Component} from 'react'
import {View,Text,Button,StyleSheet} from 'react-native'
import { Avatar } from '../components'

export default class Profiles extends Component{
    render(){
        return (
          <View style={styles.container}>
            <Avatar />
          </View>
        )
    }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'white'
  }
})
