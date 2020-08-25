import React from 'react';

let contextObj = {
  timer: null,
  callBackList: new Set(),
  addCallback: (fn) => {
    contextObj.callBackList.add(fn);
  },
  cancel: (fn) => {
    contextObj.callBackList.delete(fn);
  }
};
let Context = React.createContext(contextObj);


export class TimerProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    clearInterval(this.context.timer);

    this.context.timer = setInterval(() => {
      this.context.callBackList.forEach(em => {
        // console.log('context.callBackList');
        em()
      });
    }, 1000);
  }
  render() {
    return <div className="timer-provider-wrapper">
      <Context.Provider value={this.timer}></Context.Provider>
    </div>
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
  timeLoop = () =>  {
    let {count} = this.state;
    this.setState({
      count: count + 1
    })
  }
  componentDidMount() {
    // console.log('TimerCountDown:: componentDidMount:', this.context);
    this.context.addCallback(this.timeLoop);
  }

  static getDerivedStateFromProps (nextProps, state) {
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
        <p>timer test {count} <span onClick={this.handleStop}>stop</span></p>

    </div>
  }
}

TimerCountDown.contextType = Context;
