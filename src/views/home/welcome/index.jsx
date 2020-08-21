import React from 'react';
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
    </div>
  }
}
