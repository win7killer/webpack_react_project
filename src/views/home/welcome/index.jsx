import React from 'react';
import { TimerCountDown } from '@/components/timer';

import './index.less';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: new Array(1).fill('txt')
    };

  }

  componentDidMount() {
    console.log('welcome componentDidMount', this.props);
  }

  render() {
    return <div className="welcome-base-page">
      <h2>welcome base page</h2>
      {this.state.list.map((em, index) => {
        return <TimerCountDown key={index} initCount={index}></TimerCountDown>
      })}
    </div>
  }
}
