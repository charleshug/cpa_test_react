import React from 'react';

class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time: props.time,
        };
        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
      this.intervalId = setInterval(this.tick, 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.intervalId);
    }
  
    tick() {
        if (this.state.time > 0) {
            this.setState({time: this.state.time - 1});
            this.setState({timeMessage: "Time: " });
        } else {
            this.setState({timeMessage: "Done" });
            this.setState({time: 0})
            clearInterval(this.intervalId);
            //gradeForm()
        }
    }

    render(){
        const time = this.state.time
        const message = this.state.timeMessage

        return(
            //TODO: This results in "Done0" when it should be "Done"
            <p id="displayTime">{message}{time}</p>
        );
    }
}

export default Timer;