import React from 'react';
let Context = React.createContext({
  timer: null,
  callBackList: [],
});




export class TimerProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.timer = null;
  }
  componentDidMount() {
    clearInterval(this.timer);

    this.timer = setInterval(() => {}, 1000);
  }
  render() {
    return <div className="timer-provider-wrapper">
      <Context.Provider value={this.timer}></Context.Provider>
    </div>
  }
}

TimerProvider.globalTimer = null;


export class TimerCountDown extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('TimerCountDown:: componentDidMount:', this.context);
  }

  render() {
    return <div className="timer-count-down-wrapper">

    </div>
  }
}

TimerCountDown.contextType = Context;
