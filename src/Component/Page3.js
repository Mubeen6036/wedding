import React, { Component } from 'react';
import classes from './Page3.module.css';
import RightButton from './RightButton';
class Page3 extends Component{
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
                <h1>Nikah</h1>
                <div>Insha Allah</div>
                <div>On Monday <br></br>22nd March 2021<br></br>at 07:45 PM</div>
                <div>Dinner Follows</div>
                <div>Venue : Paradise Garden Hall, No. 1/0, Behind Harsha Hotel, Auto Nagar, Belgaum-590016, Karnataka</div>
            </div>
        );
    }
}
export default Page3;