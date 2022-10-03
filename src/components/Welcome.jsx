import React from 'react';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
          date: new Date()
        });
    }

    render() {
        return(
            <div>
                <h3>Element "Welcome"</h3>
                <h3>Now time is {this.state.date.toLocaleTimeString()}</h3>
            </div>
        )
    }
};

export default Welcome;