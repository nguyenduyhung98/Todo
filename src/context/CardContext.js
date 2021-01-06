import React,{Component} from 'react'

export const CardContext = React.createContext();

export default class CardProvider extends Component{
    constructor(props){
        super(props)

        this.state={
            cartItems : []
        }

        this.addToCard= this.addToCard.bind(this)
        this.remoteProduct=this.remoteProduct.bind(this)
        this.getTotalPrice=this.getTotalPrice.bind(this)
    }

     addToCard(product){
        console.log('addToCard :', product)  
        this.setState({
            cartItems: this.state.cartItems.concat(product)
        })
        console.log('State cartItems :', JSON.stringify(this.state.cartItems));
    }

    remoteProduct(product){
        console.log('remove Products', product);
        const index = cartItems.indexOf(product)
        console.log('index product : ', index);
        this.setState({
            cartItems : this.state.cartItems.splice(index,1)
        })
        console.log('cartItems :' , this.state.cartItems)
    }

    getTotalPrice = () =>  {
        const getTotal = this.totalPrice
        return getTotal
    }
    
    totalPrice = () => {
        console.log(' total price ')
        var total = 0

        for(var i = 0; i < this.state.cartItems.length; i++)
        {
            total += this.state.cartItems[i].price
            console.log('Total : ' ,total)
        }

        return total
    }

    render(){
        return(
            <CardContext.Provider value={{
                cartItems :this.state.cartItems,
                addToCard : this.addToCard,
                remoteProduct: this.remoteProduct,
                getTotalPrice:this.getTotalPrice
            }}>
             {this.props.children}
            </CardContext.Provider>
        )
    }
} 