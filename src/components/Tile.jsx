import React, {Component} from 'react';
export default class Tile extends Component{
   constructor(props){
       super(props);
       this.state = {
           tileData:this.props.tileData
       }
   }
  


    render(){
        let data = this.props.tileData;
        let displayProp = (data.productQuantity != null)?"none":"block";
        return (<div className="tile">
            <div className="offer">{data.percentageOff}</div>
            <img className="productimage" src={data.imageURL}/>
            <div className="productName detail">{data.productName}</div>
            <div className="detail">{data.quantity}</div>
            <div className="detail">{data.discountPrice}
           
            </div>
            <div className="detail" style={{textDecoration:"line-through",color:"#999"}}>{data.originalPrice}</div>
            <button onClick={(()=>{
                 this.props.increment(this.state.tileData);
            })} 
            style={{display:displayProp,margin:"0 auto",backgroundColor:"white",color:"orange",borderRadius:"4px",border:"none"}}> Add To Cart</button>
            <div style={{display:(data.productQuantity != null)?"block":"none",textAlign:"center"}}>
                <button style={{borderRadius:"5px"}} onClick={()=>{
                     if(this.state.tileData.productQuantity>0) 
                    this.props.decrement(this.state.tileData);
                }}>-</button>
                <span style={{margin:"5px",fontSize:"16px"}}>{data.productQuantity}</span>
                 <button style={{borderRadius:"5px"}} onClick={()=>{
                   
                    this.props.increment(this.state.tileData);
                }}>+</button>
            </div>

        </div>);
    }
}