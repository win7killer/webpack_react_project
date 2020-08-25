import React from 'react';

let contextObj = {
  timer: null,
  callbackSet: new Set(),
  addCallback: (fn) => {
    contextObj.callbackSet.add(fn);
  },
  cancel: (fn) => {
    contextObj.callbackSet.delete(fn);
  }
};
let Context = React.createContext(contextObj);


export class TimerProvider extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {

    };
    this.time = props.time || 1000;
  }
  componentDidMount() {
    clearInterval(this.context.timer);
    this.context.timer = setInterval(() => {
      this.context.callbackSet.forEach(em => {
        em();
      });
    }, this.time);
  }
  componentWillUnmount() {
    clearInterval(this.context.timer);
    this.context.callbackSet.clear();
  }
  render() {
    return <Context.Provider value={this.timer}></Context.Provider>
  }
}

TimerProvider.globalTimer = null;
TimerProvider.contextType = Context;

export class TimerCountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  timeLoop = () => {
    let { count } = this.state;
    // console.log(count)
    this.setState({
      count: count + 1
    })
  }
  componentDidMount() {
    // console.log('TimerCountDown:: componentDidMount:', this.context);
    this.context.addCallback(this.timeLoop);
  }

  componentWillUnmount() {
    this.context.cancel(this.timeLoop);
  }

  static getDerivedStateFromProps(nextProps, state) {
    // console.log('nextProps.initCount', nextProps.initCount, state.count)
    if (nextProps.initCount !== state.count && !state.count) {
      return {
        ...state,
        count: nextProps.initCount
      }
    }

    return state;
  }


  handleStop = () => {
    this.context.cancel(this.timeLoop);
  }



  render() {
    let { count } = this.state;
    return <div className="timer-count-down-wrapper">
      <p>
        timer test
          <code style={{
          backgroundColor: ['#f09', '#39f'][count % 2],
        }} className="count">{count}</code>
        <span onClick={this.handleStop}>stop</span></p>
    </div>
  }
}

TimerCountDown.contextType = Context;
