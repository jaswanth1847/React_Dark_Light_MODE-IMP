
import {Component} from "react"
import "./index.css"
class LightDark extends Component{
    state = {clicked : true}

    // 
    authButton = () =>{
        this.setState((prevS)=>({
            clicked : !prevS.clicked
        }))
    } 
    // 
   

    render(){
        const {clicked} = this.state

        let text = this.state.clicked ? "darkmode" : "lightmode"
        let colors = this.state.clicked ? "lightmode" : "darkmode"
        let yess = clicked ? <div>
            <p>My Name Is :</p>
            <p>CHINTU</p>
        </div> : null;
        return(
            <div className={colors}>
                <h1>Click To Change Mode</h1>
                <button onClick={this.authButton}>{text}</button>
                {yess}
            </div>
        )
    }
}

export default LightDark