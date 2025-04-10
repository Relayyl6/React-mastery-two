import { Component } from 'react';

class ClassBasedComponent extends Component {


    state = {
        showText : false,
        changeColor : false,
        count : 0,
        changeCountStyle : false
    };

    const handleClick = () => {

        const {showText, changeColor} = this.state

        this.setState({
            showText : !showText,
            changeColor : !changeColor
        })  

        // Not recommmended
        // this.state.showText = !this.state.showText
    }

    // componentDidMount
    // componentDidUpdate
    // componentWillUnmount

    componentDidMount(){
        console.log("This is called the first time on page load");

        const {showText, changeColor} = this.state

        this.setState({
            showText : !showText,
            changeColor : !changeColor,
        })
    }

    const handleCount = () => {
        this.setState({
            ...this.state, // or, const {count} = this.state /// this provides alternate specificity to what io need from the this.state 
            count : this.state.count + 1
        })
    }

    // componentDidUpdate(prevProps, prevState){
    //     console.log(prevState, this.state)
    // }
    
    componentDidUpdate(prevProps, prevState){

        if ( prevState && 
             prevState.count !== this.state.count && 
             this.state.count === 10 ) {
                this.setState({
                    ...this.setState, // or, const {changeCountStyle} = this.state
                    changeCountStyle : true
                })
             }
    }

    componentWillUnmount(){
        console.log("component is getting unmounted")
    }


    render() {

        

        const {showText, changeColor} = this.state

        return (
            <>
                <div>
                {
                    showText ? (
                            <h4 style={{color : changeColor ? 'black' : 'white'}}>
                                Class based component 
                            </h4>
                        ) : (
                            <h4>
                                A little sleep a little slumber
                            </h4>
                        )
                }                 
                    <button onClick={this.handleClick}> Toggle text </button>

                    <button onClick={this.handleCount}>Increase Count Value</button>
                    <h3 
                        style={{color : changeCountStyle ? 'brown' : 'black', 
                                fontSize : changeCountStyle ? '50px' : '100px' }}>
                                    Count is {count}
                    </h3>
                </div>
            </>
        )
    }
}

export default ClassBasedComponent