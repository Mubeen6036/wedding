import React from 'react'
import { ReactComponent as FlowerIcon } from '../assets/flower.svg'
import { ReactComponent as DecorationIcon } from '../assets/decoration.svg'
class App extends React.Component {
  state = {
    width: window.innerWidth,
  }
  
  componentDidMount() {
    // window.onbeforeunload = function () {
    //   window.scrollTo(0, 0);
    // }
    window.addEventListener('resize', this.updateSize);
  }
  
  updateSize = () => {
    this.setState({
      width: window.innerWidth,
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize')
  }
  
  render() {
    const { width } = this.state
    return (
      <div id="wrapper" className="container">
        <div id="wrapper1" className="box box1">
          <FlowerIcon className="flower-icon center-left"/>
          <FlowerIcon className={`flower-icon ${width <= 600 ? 'display-none' : 'center-right'}`}/>
          <span className="font-size-2">You're invited to the wedding of</span>
          <div className="sub-text">
            <DecorationIcon className={`${width <= 600 ? 'decoration-class' : 'display-none'}`} />
            <span className={`font-style-vibes ${width <= 600 ? 'font-size-3' : 'font-size-6'}`}>Muneer Musthafa</span>
            <span className={`font-style-vibes ${width <= 600 ? 'font-size-3' : 'font-size-6'}`}>{"&"}</span>
            <span className={`font-style-vibes ${width <= 600 ? 'font-size-3' : 'font-size-6'}`}>{"Zeba"}</span>
            <DecorationIcon className={`${width <= 600 ? 'decoration-class decoration-rotate' : 'display-none'}`} />
          </div>
          <div className="sub-text">
            <span className="font-size-2 margin-bottom-1">Monday 22nd of March</span>
            <span className="font-size-2 margin-bottom-4 text-center">It's quarter to Seven o'clock (7:00) in the afternoon.</span>
          </div>
        </div>
        <div className={`box box2 ${width <= 900 ? 'box2-column' : 'box2-row'}`} >
          <div className="division">
            <div className="extra-details">
              <FlowerIcon className="flower-icon center-left"/>
              <h1>Nikah(Wedding)</h1>
              <span className="margin-bottom-2">On Monday 22nd March 2021 at 7:00 PM</span>
              <span className="margin-bottom-2">Venue:</span>
              <span>Paradise Garden Hall,</span>
              <span>No 1/0, Behind Harsha Hotel,</span>
              <span>Auto Nagar,</span>
              <span>Belgari - 590016,</span>
              <span>Karantaka.</span>
            </div>
          </div>
          <div className="division">
            <div className="extra-details">
              <FlowerIcon className="flower-icon center-left"/>
              <h1>Valima(Reception)</h1>
              <span className="margin-bottom-2">On Monday 25th March 2021 at 7:00 PM</span>
              <span className="margin-bottom-2">Venue:</span>
              <span>Goutham Garden Hotel,</span>
              <span>D.No 8-19-110, Railway Station Road,</span>
              <span>Marrispet,</span>
              <span>Tenali - 522202,</span>
              <span>Andhra Pradesh.</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App