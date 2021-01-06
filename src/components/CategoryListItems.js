import React from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import Images from '../images/react-native.png'

function CategoryListItems(props){
    const { category, onPress } = props 
        return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress} >
            <View style={styles.container}>
                <Text style={styles.title}>{category.name}</Text>
                <Image style={styles.categoryImages} source={Images}></Image>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        padding:16,
        borderRadius:4,
        backgroundColor:'#FFF',
        shadowColor:'#000',
        shadowOpacity:0.3,
        shadowRadius:10,
        shadowOffset:{width:0, height:0},
        marginBottom:16,
        justifyContent:'center'
    },
    title : {
        alignItems :'center',
        fontFamily:'Arial'
    },
    categoryImages :{
        alignItems :'center',
        width: 64,
        height : 64,
    }
})

export default CategoryListItems;