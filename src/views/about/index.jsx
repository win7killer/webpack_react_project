import React, { useEffect } from 'react';
import MainNavBar from '@/components/navbar';
import { KeepAlive, Provider as KeepAliveProvider } from '@/components/keep_alive';

import './index.less';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: true
    };
  }

  componentDidMount() {
    console.log('about componentDidMount', this.props);
  }

  changeComponent = () => {
    this.setState({
      flag: !this.state.flag
    });
  }

  render() {
    console.log(this.state);
    return <div className="about-base-page">
      <MainNavBar></MainNavBar>
      <h1>about base page</h1>
      <button onClick={this.changeComponent}>change</button>
      <KeepAliveProvider></KeepAliveProvider>

      {
        this.state.flag
          ? <KeepAlive key="pp"><ComA></ComA></KeepAlive>
          : <KeepAlive key="qq"><ComB></ComB></KeepAlive>
      }

    </div>
  }
}



function ComA() {
  useEffect(() => {
    console.log('ComA: useEffect');
  }, [])

  return <div key="pp" className="ppppp">11111</div>
}

function ComB() {
  useEffect(() => {
    console.log('ComB: useEffect');
  }, [])

  return <div key="qq" className="qqqqq">222222</div>
}
