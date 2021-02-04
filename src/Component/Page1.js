import React, { Component } from 'react';
import Page2 from './Page2';
import classes from './Page1.module.css';
import {Animated} from "react-animated-css";
import RightButton from './RightButton';
import Bismillah from '../img/Bismillah.png';
class Page1 extends Component{
    state={
        willUnmount : null,
        nextClick : 0
    }
    componentWillUnmount(){
        this.setState({willUnmount : 'slideOutRight'});
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({buttonVisible : true})
        }, 2500)
    }
    addStyle=()=>{
        this.setState({style:{opacity: 0, transition: 'all 0.3s ease-out'}});
        setTimeout(()=>{this.props.increaseCount()}
        , 300);
        
    }

    render(){
        return (
            <div>
                <div style={this.state.style} className={classes.Outer}>
                    <RightButton increaseCount={this.addStyle} visible={this.state.buttonVisible}/>
                    <div className={classes.Bismillah}>
                        <Animated animationIn="fadeIn" animationInDelay ={200}>
                            <img style={{width:'80%', marigin:'auto'}} src={Bismillah}/>
                        </Animated>
                    </div>
                    <div style={{position:'sticky'}} className={classes.Inner}>
                        <div style={{color : '#001d4a', fontSize : '2rem',lineHeight: '3rem'}}>
                        Muneer <br></br> weds <br></br> Zeba
                        </div>
                    </div>
                    <div style={{color : 'black', fontSize : '1.8rem', alignSelf:'center'}}>
                        You Are Invited
                    </div>
                </div>
            </div>
        );
    }
}

export default Page1;