import React from 'react';
import MainNavBar from '@/components/navbar';
import './index.less';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('about componentDidMount', this.props);
  }

  render() {
    return <div className="about-base-page">
      <MainNavBar></MainNavBar>
      <h1>about base page</h1>
    </div>
  }
}
