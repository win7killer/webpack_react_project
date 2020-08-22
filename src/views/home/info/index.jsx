import React from 'react';
import './index.less';

export default class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('info componentDidMount', this.props);
  }

  render() {
    return <div className="info-base-page">
      <p>info</p>
      <p>info</p>
      <p>info</p>
      <p>info</p>
      <p>info</p>
      <p>info</p>
      <p>info</p>
      <p>info</p>
      <p>info</p>
      <p>info</p>
      <p>info</p>

    </div>
  }
}
