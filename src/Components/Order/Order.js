import React, { useEffect, useState } from 'react';

const imageStyle= {hight: '300px',width:'200px',borderRadius: '6px' }
const btnColor= {width:'100px'}
const color ={color:'green'}
const strTeamStyle = {backgroundColor:'white' , color:'black',border: '1px solid gray', borderRadius:'20px',margin:'2%', padding:'35px',paddingLeft:'50px'}
const Order = ({order}) => {
    return (
       
        <div className="col-md-3" style={strTeamStyle}>  
            <img style={imageStyle } src={order.imageURL} alt=""/>
            <h4>{order.name}</h4> 
            <br />
            <div class="col-md-3">
           <h3 style={color} >$200</h3>
             <button className="btn btn-success" style={btnColor}>Buy Now</button>  
             </div>
        </div>
        
    );
};

export default Order;