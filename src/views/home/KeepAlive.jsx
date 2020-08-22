import React from 'react';

const KeepAliveCache = new Map();

class KeepAlive extends React.Component {
  constructor() {

  }

  componentDidMount() {
    let { children } = this.props;
    let name = children.name;
    KeepAliveCache.set(name, children);
  }

  render() {
    let { children } = this.props;
    return <div className="component-keep-alive">
      {children}
    </div>
  }
}
