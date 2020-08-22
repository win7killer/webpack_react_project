import React from 'react';
import { TimerCountDown } from '@/components/timer';

import './index.less';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('welcome componentDidMount', this.props);
  }

  render() {
    return <div className="welcome-base-page">
      <h2>welcome base page</h2>
      <TimerCountDown></TimerCountDown>
      <p>welcome base page welcome base page</p>
      <p>welcome base page welcome base page</p>
      <p>welcome base page welcome base page</p>
      <p>welcome base page welcome base page</p>
      <p>welcome base page welcome base page</p>
      <p>welcome base page welcome base page</p>
      <p>welcome base page welcome base page</p>
      <p>welcome base page welcome base page</p>
      <p>welcome base page welcome base page</p>
      <p>welcome base page welcome base page</p>
      <p>welcome base page welcome base page</p>
      <p>welcome base page welcome base page</p>
      <p>welcome base page welcome base page</p>

    </div>
  }
}
