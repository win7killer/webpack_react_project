import React from 'react';

import { MainNavBar } from '../../components/navbar';

import './index.less';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('post componentDidMount', this.props);
  }

  render() {
    return <div className="post-base-page">
      <MainNavBar></MainNavBar>
      <h1>post base page</h1>
    </div>
  }
}
