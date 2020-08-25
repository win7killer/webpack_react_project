import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { hocLoadable } from '@/router/conf';

import { TimerProvider, TimerCountDown } from '@/components/timer';
import MainNavBar from '@/components/navbar';
import './index.less';

// import Info from './info';
// const Welcome = hocLoadable({
//   loader: () => import('./welcome'),
// })

// const Info = hocLoadable({
//   loader: () => import(/* webpackChunkName: "home_info" */ './info'),
// })



export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.group('Home: ')

    window.componentCache = this.componentCache = new Map();
  }

  componentDidMount() {

    console.log('home componentDidMount', this.props);
  }
  componentWillUnmount() {
    console.groupEnd();
  }

  render() {
    let { subRoutesMap, match } = this.props;
    let subRoutesList = Object.values(subRoutesMap);

    return <div className="home-base-page">
      <MainNavBar></MainNavBar>
      <h1>home base page</h1>

      <TimerProvider time={2000}></TimerProvider>
      <TimerCountDown initCount={1001}></TimerCountDown>
      <div>
        <Link to="/home/welcome">welcome</Link><br />
        <Link to="/home/info">info</Link>
      </div>
      <SubRouterComponent routes={subRoutesList} parentPath={match.path}></SubRouterComponent>
    </div>
  }
}

function SubRouterComponent(props) {
  let { routes, parentPath = '' } = props;
  return <div className="sub-routes-view">
    <Switch>
      {routes.map(item => {
        return <Route key={item.path} path={`${parentPath}${item.path}`} component={item.component}></Route>
      })}
    </Switch>
  </div>
}
