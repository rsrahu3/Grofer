import React, {Component} from 'react';
import CartItem from './CartItem.jsx';

export default class Cart extends Component{

    constructor(){
        super();
        
    }

    render(){

        return (<div className="modal-overlay">
            <div className="overlay-header">My Cart({this.props.numberOfItem} Item)
            <button onClick={()=>{
                this.props.hidePopUp();
            }} className="closeButton">×</button>
            </div>
            <div style={{height:"15%"}}>
                <table style={{width:"100%",fontFamily:"calibri"}}>
                    <tbody>
                    <tr>
                        <td>Sub Total</td>
                        <td>₹{this.props.totalSum}</td>
                    </tr>
                    <tr style={{borderBottom:"1px solid black"}}>
                        <td>Delivery Charges</td>
                        <td>+₹29 </td>
                    </tr>
                    <tr>
                        <td>Your total savings</td>
                        <td>₹{this.props.saving}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div style={{height:"65%"}}>
            {Object.keys(this.props.myCart).map((key,index)=>{
                return  <CartItem increment={this.props.increment} decrement = {this.props.decrement} key={key} cartItem={this.props.myCart[key]}/>
            })}
               
            </div>

            <div style={{textAlign:"center", height:"5%"}}>
                <button className="cart-proceed-button" data-test-id="checkout-button">
                <span><span style={{float:"left"}}>Proceed to Checkout</span><span style={{float:"right"}}>₹{this.props.totalSum*1+29}</span></span>
                </button>
            </div>

        </div>
        )

    }
}