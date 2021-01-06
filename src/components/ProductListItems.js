import React, { Component } from 'react'
import { View, StyleSheet,Text,Image,TouchableOpacity} from 'react-native'


class ProducListItems extends Component {
    constructor(props) {
        super(props);
        
    }
    
    
    render(){
    const { product, addToCardPress } = this.props
    console.log('ListItems :', JSON.stringify(product));
       return (
         <View style={styles.shadow}>
           <View style={styles.container}>
             <Image 
                source={{uri: product.images[0].url}} 
                style={styles.img} />
             <View style={styles.info}>
               <Text 
                  style={styles.name}>
                    {product.name}
               </Text>
               <View style={styles.priceRow}>
                 <Text 
                    style={styles.price}>
                    {product.price}
                  </Text>
                 <TouchableOpacity>
                   <Text 
                    style={styles.cardText} 
                    onPress={addToCardPress}>
                      Mua +
                   </Text>
                 </TouchableOpacity>
               </View>
             </View>
           </View>
         </View>
       );
   }
   }

const styles = StyleSheet.create({
    price :{
        fontSize:16,
        flex:1,
        color:'#888'
    },
    name:{
        marginBottom:3,
        fontSize:16
    },
    priceRow:{
        flexDirection:'row',
        alignItems:'center'
    },
    info:{
        padding:8
    },
    cardText:{
        textTransform:'uppercase',
        fontSize:16,
        color:'#2f95dc'
    },
    shadow:{
        shadowColor:'#000',
        shadowOpacity:0.1,
        shadowRadius:10,
        shadowOffset:{width:0 , height:0}
    },
    container:{
        marginBottom:20,
        borderRadius:4,
        backgroundColor:'#FFF',
        overflow: 'hidden'
    },
    img: {
        height: 150,
        borderTopLeftRadius:4,
        borderBottomLeftRadius:4
    }

})
export default ProducListItems;