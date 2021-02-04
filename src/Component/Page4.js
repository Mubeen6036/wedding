import React, { Component } from 'react';
import classes from './Page4.module.css';
import RightButton from './RightButton';
class Page4 extends Component{
    state={
        willUnmount : null
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({buttonVisible : true})
        }, 2000)
    }
    render(){
        return(
            <div className={classes.Outer}>
                <RightButton increaseCount={this.props.increaseCount} visible={this.state.buttonVisible}/>
                <h1>Reception</h1>
                <div>From 07:00 PM</div>
                <div>Dinner Follows</div>
                <div>On Thursday, the 25th March 2021 <br></br>at Goutham Grand Hotel</div>
                <div>D.NO : 8-19-110, <br></br>Railway Station Road,<br></br>Morrispet, Tenali, Andhra Pradesh<br></br>522202</div>
            </div>
        );
    }
}
export default Page4;