
import {Component} from "react"

class Subscribe extends Component{
    state = {issubscribe : true}
    btnn=()=>{
        this.setState((prevS)=>({
            issubscribe : !prevS.issubscribe
        }))
    }

    renderText=()=>{
        const {issubscribe} = this.state
        return(
            issubscribe ? "hii" : "hello"
        )
        
    }
    render(){
        let text = this.renderText()
        return(
            <div>
                <h1>Welcome</h1>
                <p>Thank You! Happy Learning</p>
                <button onClick={this.btnn}>{text}</button>
            </div>
        )
    }
}

export default Subscribe