import React,{Component} from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import {Animated} from "react-animated-css";


class controller extends Component{

    state ={
        count : 0
        
    }

    countIncrease = () =>{
        let count =  this.state.count;
        count++;
        if(count>3){
            count = 0;
        }
        this.setState({count: count});
    }

    

    returnComponent = ()=>{
        switch(this.state.count){
            case 0 : return <Page1 increaseCount={this.countIncrease} buttonVisible={this.state.buttonVisible}/>
            case 1 : return <Page2 increaseCount={this.countIncrease} buttonVisible={this.state.buttonVisible}/>
            case 2 : return <Page3 increaseCount={this.countIncrease} buttonVisible={this.state.buttonVisible}/>
            case 3 : return <Page4 increaseCount={this.countIncrease} buttonVisible={this.state.buttonVisible}/>
            default : return <Page1 increaseCount={this.countIncrease} buttonVisible={this.state.buttonVisible}/>
        }
    }
    
    render(){
        return (this.returnComponent());
    };

}
export default controller;
