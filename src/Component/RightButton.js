import React, { Component } from 'react';
import {Animated} from "react-animated-css";
import { useEffect } from 'react/cjs/react.development';
import right from '../img/right.png';

const RightButton= (props) =>{
    let styleObj = {position:'fixed',left : '82%', top:'55%',height:'40px', width:'40px', display:'none',opacity:0.5};
    if(props.visible){
        styleObj.display = 'inline';
    }
    return (
    <Animated style={styleObj}
    animationIn="headShake"  animationInDuration ={2000}>
      <div onClick={()=>props.increaseCount()}>
          <img style={{height:'50px', width:'50px'}} src={right}/>
      </div>
    </Animated>);
}
export default RightButton;
