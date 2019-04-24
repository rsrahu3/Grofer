import React, {Component} from 'react';

export default class Header extends Component{

    constructor(props){
        super(props);
        this.state = {filterData:[]};
       
    }

    boldString(str, find,start,end){
        let arrStr = str.split("");
        arrStr.splice(start,0,'<b>');
        arrStr.splice(end+1,0,'</b>');
        return arrStr.join("");

    }

    filterProduct(serachString){
       
        let copyProduct = [];

        this.props.products.map((product)=>{
            copyProduct.push(Object.assign({},product));
        })

        serachString = serachString.toLowerCase();
        let filterResult = copyProduct.filter((item)=>{
            
           let startIndex =  item.productName.toLowerCase().indexOf(serachString);
            if(startIndex>-1){
                item.productName =  this.boldString(item.productName,serachString,startIndex,startIndex+serachString.length);
                return item;
            }
        });
        this.setState({filterData:filterResult});
       
    }
 
    render(){
        let numberOfItemInCart = "";
        if( (this.props.numberOfItem>0)){
            numberOfItemInCart = this.props.numberOfItem;
        }
        
     

        return (
            <div onClick={(e)=>{
                this.props.hideCartPopUp();
            } } className={this.props.showResult?"overlay-div":""}>
            <div className="header">
          
                <div className="logo">
                        <img alt="Grofers" src="https://grofers.com/images/header/logo_2x-72edeee.png"/>
                </div>
		   <div className="search">
                <input type="text" placeholder="Search.." name="search" className="search-container" onClick={(e)=>{
                    e.stopPropagation();
                    this.props.showOverlay();
                    this.setState({filterData:this.props.products});
                }}
                onChange={(e)=>{
                    this.filterProduct(e.target.value);
                 }}/>
                <div className="result">
                    {this.props.showResult && this.state.filterData.map((item,i)=>{
                       if(item.productName.indexOf("<b>")>-1){
                       let nonBold = item.productName.split("<b>");
                        let bold = nonBold[1].split("</b>");
                        return <div key={i}><img alt="Grofers" style={{width:"5%"}} src={item.imageURL}/> 
                        <span style={{marginTop: "5px", padding: "11px", position: "absolute"}}>{nonBold[0]}<b>{bold[0]}</b>{bold[1]}</span></div>
                       }
                       else{
                        return <div key={i}><img alt="Grofers" style={{width:"5%"}} src={item.imageURL}/> 
                        <span style={{marginTop: "5px", padding: "11px", position: "absolute"}}>{item.productName}</span></div>
                       }
                    })}
                </div>
		   </div>
           <div className="cartDiv" onClick={(e)=>{
               e.stopPropagation();
               if(numberOfItemInCart>0)
               this.props.showCartPopUp();
           }}>
               <div>
               <img src="https://webcdn.grofers.com/images/header/cart_2x-1657d3d.png"/>
               {(numberOfItemInCart>0) && <span className="item-count">{numberOfItemInCart}</span>}
              </div>
              <span className="amount">₹{this.props.totalSum}</span>
            </div>
           
           
           

  </div>
            </div>
        );
    }
}