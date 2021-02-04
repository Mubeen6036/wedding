import React from 'react';
import {Animated} from "react-animated-css";
const page2Animation = (props) =>{
    return(
    <Animated animationIn="fadeIn" animationOut="fadeOut" animationOutDelay={500} isVisible={props.isVisible}>
        {props.children}
    </Animated>
    );
}
export default page2Animation;

