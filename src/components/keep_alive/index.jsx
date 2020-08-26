import React from 'react';

const data = {
  max: 10,
  cache: [],
  log() {
    console.log('CacheComponentContext:: cache', this.cache)
  },
  add(node) {
    let cacheNode = this.get(node.path);
    if (!cacheNode) {
      this.insert(node);
      return true;
    } else {
      return true;
    }

  },
  insert(node) {
    data.cache.unshift(node);
    // data.cache.length = Math.min(data.cache.length, data.max);
    this.log();
  },
  get(path) {
    let index = this.cache.findIndex(em => {
      console.log(em.key === path)
      return em.key === path;
    });

    console.log('index', index)

    if (index > -1) {
      let node = this.cache.splice(index, 1);
      this.insert(node[0]);
      return node;
    } else {
      return null;
    }


  },
  delete(path) {
    let index = this.cache.findIndex(em => {
      em.path === path;
    });

    this.cache.splice(index, 1);
    this.log();
  },
  clear() {
    this.cache.length = 0;
    this.log();
  },
};

const Context = React.createContext(data);
Context.displayName = 'CacheComponentContext';

export class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.max = props.max || 10;
  }

  render() {
    return <Context.Provider value={{
      ...data,
      max: this.max
    }}></Context.Provider>
  }
}

export class KeepAlive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cacheNode: null
    };

  }

  componentDidMount() {
    console.group('KeepAlive');
    let { children } = this.props;
    let cacheNode = this.context.get(children.key);
    console.log('cacheNode', cacheNode)
    if (!cacheNode) {
      let cloneChildren = cacheNode = React.cloneElement(children);
      this.context.add(cloneChildren);
    }

    this.setState({
      cacheNode
    });
  }

  componentWillUnmount() {
    console.groupEnd();
  }

  render() {
    let { children } = this.props;
    let { cacheNode } = this.state;
    console.log('render cacheNode', cacheNode)

    return <div className="keep-alive-component-wrapper">
      {cacheNode}
    </div>
  }
}

KeepAlive.contextType = Context;
