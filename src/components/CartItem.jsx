import React, {Component} from 'react';

export default class CartItem extends Component{

    constructor(){
        super();
        
    }

    render(){
        let cartItem = this.props.cartItem;
        let totalItemPrice = (cartItem.productQuantity)*(cartItem.discountPrice);
        return (<div style={{border:"1px solid gray"}}>
                 
                <img style={{width:"20%"}} src={this.props.cartItem.imageURL}/>
                                
                    
                    <div style={{width:"80%",display:"inline-block"}}>
                        <div>{cartItem.percentageOff}</div>
                        <div>{cartItem.productName}</div>
                        <div>{cartItem.quantity}</div>
                        <div style={{display:"flex"}}>
                        <div>
                        <button onClick={(e)=>{
                            e.stopPropagation();
                           this.props.decrement(cartItem);
                        }}
                        style={{borderRadius:"5px",border:"none"}}>-</button>
                        <span>{cartItem.productQuantity}</span>
                        <button onClick={(e)=>{
                            e.stopPropagation();
                           this.props.increment(cartItem);
                        }}style={{borderRadius:"5px",border:"none"}}>+</button></div>
                        <span style={{width:"20%",textAlign:"center"}}>×</span>
                        <span style={{width:"20%",textAlign:"center"}}>₹{cartItem.discountPrice}</span>
                        <span style={{width:"20%",textAlign:"center",textDecoration:"line-through"}}>₹{cartItem.originalPrice}</span>
                        <div style={{width:"20%",textAlign:"center"}}>₹{totalItemPrice}</div>
                    </div>
                </div>
            </div>
     
        )

    }
}