import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from './components/Header.jsx';
import InnerComponent from './components/InnerComponent.jsx';
import Cart from './components/Cart.jsx';
import sampleData from './data/sampleData.jsx'
class App extends Component {
  constructor() {
    super();
    this.state = {
        product:sampleData,
        myCart:{},
        numberOfItem:0,
        showCartPopUp:false,
        totalSum:0,
        saving:0,
        showResult:false

                 }
  }

hideCartPopUp(){
    this.setState({"showCartPopUp":false,showResult:false})
}

showOverlay(){
    this.setState({showResult:true});
}
showCartPopUp(){
  this.setState({"showCartPopUp":true})
}

addremoveFromCart(action,id,data){
    let cartObj = Object.assign({},this.state.myCart);
    if(action == "add"){
      cartObj[id] = data;
    }
    else{
      if(data.productQuantity == 0){
        delete cartObj[id];
      }
    }

    let totalsum = 0;
    let saving = 0 ;
    for(let key in cartObj){
      totalsum += (cartObj[key].discountPrice)*(cartObj[key].productQuantity);
      saving += (cartObj[key].saving)*(cartObj[key].productQuantity);
    }

    this.setState({myCart:cartObj,totalSum:totalsum,saving:saving});
}


  increment(selectedProduct){
    let productData = this.state.product;
    let selectedProductForCart;
    productData.map((item)=>{
      if(item.productId == selectedProduct.productId){
        if(!item.productQuantity){
          item.productQuantity = 1;
        }
        else{
          item.productQuantity = item.productQuantity+1;
        }
        selectedProductForCart = item;
      }
    })
    let numberOfItem=this.state.numberOfItem+1;
    this.setState({product:productData,numberOfItem:numberOfItem},()=>{
      this.addremoveFromCart("add",selectedProduct.productId,selectedProductForCart);
    });

  }

  decrement(selectedProduct){

    let productData = this.state.product;
    let selectedProductForCart;
    productData.map((item)=>{
      if(item.productId == selectedProduct.productId){
       if(item.productQuantity>0){
          item.productQuantity = item.productQuantity-1;
        }
        selectedProductForCart = item;
      }
    })
    let numberOfItem=this.state.numberOfItem-1;
    this.setState({product:productData,numberOfItem:numberOfItem},()=>{
      this.addremoveFromCart("remove",selectedProduct.productId,selectedProductForCart);
    });
  }

  render() {

    return (
	<div onClick={()=>{
    this.hideCartPopUp();
  }}>
        <Header showOverlay={this.showOverlay.bind(this)} hideCartPopUp={this.hideCartPopUp.bind(this)} showResult={this.state.showResult} products={this.state.product} cart={this.state.myCart} totalSum={this.state.totalSum} numberOfItem={this.state.numberOfItem} showCartPopUp={this.showCartPopUp.bind(this)}/>
		    <InnerComponent products={this.state.product} increment={this.increment.bind(this)} decrement = {this.decrement.bind(this)}/>
        {this.state.showCartPopUp&& this.state.numberOfItem>0 && <div className="overlay-div"><Cart myCart={this.state.myCart} numberOfItem={this.state.numberOfItem} 
                      saving={this.state.saving} increment={this.increment.bind(this)} decrement = {this.decrement.bind(this)}
                      totalSum={this.state.totalSum} hidePopUp={this.hideCartPopUp.bind(this)}/></div>}
     </div>
    );
  }


}


ReactDOM.render(<App/>,document.getElementById('container'));

