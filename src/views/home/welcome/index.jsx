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
