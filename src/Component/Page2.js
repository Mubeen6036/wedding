import React, { Component } from 'react';
import classes from './Page2.module.css';
import RightButton from './RightButton';
import {Animated} from "react-animated-css";
class Page2 extends Component{
    state={

    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({buttonVisible : true})
        }, 1000);
    }
    addStyle=()=>{
        this.setState({style:{opacity: 0, transition: 'all 0.3s ease-out'}});
        setTimeout(()=>{this.props.increaseCount()}
        , 300);
        
    }
    render(){
    return(
        <Animated animationIn="fadeIn" animationInDuration={400} style={this.state.style}>
        <div className={classes.Outer}>
            <div style={{paddingTop:'20vh', paddingBottom:'20vh', overflow:'auto'}}>         
                <RightButton //style={{position:'absolute',top:'30px',margingLeft:'-20px'}}  
                increaseCount={this.addStyle} visible={this.state.buttonVisible}/>
                <div className={classes.Font}><b>Wedding Invitation</b></div>
                <div className={classes.Font}>We Cordially invite you with your family to the wedding of our eldest son</div>
                <Animated animationIn="bounceInDown" >
                    <div style={{color : 'white'}} className={classes.Font}>
                        <b>Barkurdhar : Muneer Musthafa</b>
                        <br></br>(Son of Ahammed Bashajan)
                    </div>
                </Animated>
                <div className={classes.Font}>with</div>
                <Animated animationIn="bounceInUp">
                    <div style={{color : 'white'}}><br></br><b>Noor-e-chashmi : Zeba</b><br></br>(Daughter of Iktiar Ahamed)</div>
                </Animated>
                <div className={classes.Font}>with the best compliments from Near & Dear<br></br> Mrs & Mr S.Ahammed Valli <br></br>Mrs & Mr S.Ahammed Bashajan & brothers</div> 
            </div>
        </div>
        </Animated>
    );
    }
}
export default Page2;