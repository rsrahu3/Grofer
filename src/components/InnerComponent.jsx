import React, {Component} from 'react';
import Tile from './Tile.jsx';
export default class InnerComponent extends Component{
    constructor(props){
        super(props);
      
    }

    render(){

         let products = this.props.products?this.props.products:[];
         let increment = this.props.increment;
         let decrement =  this.props.decrement;
        return (
            <div className="flex-container">
			{ products.map((item,index)=>{
				 return <Tile increment={increment}  decrement={decrement} key={item.productId} tileData= {item} />
			})}
            </div>
        );
    }
}