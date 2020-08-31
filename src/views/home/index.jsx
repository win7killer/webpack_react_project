import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import {
  Provider as KeepProvider,
  KeepAlive,
} from 'react-keep-alive';
import { hocLoadable } from '@/router/conf';

import { TimerProvider, TimerCountDown } from '@/components/timer';
import MainNavBar from '@/components/navbar';

import CommonStateContext from '@/components/common/CommonStateContext';
import './index.less';
import { message } from 'antd';
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
    message.info('111');
    console.log('home componentDidMount', this.props);
  }
  componentWillUnmount() {
    console.groupEnd();
  }

  render() {
    let { subRoutesMap, match } = this.props;
    let subRoutesList = Object.values(subRoutesMap);

    return <div className="home-base-page">
      <CommonStateContext.Provider value={{
        pagePath: 'home'
      }}>
        <MainNavBar></MainNavBar>
      </CommonStateContext.Provider>

      <h1>home base page</h1>

      <div className="line-dashed"></div>
      <br/>
      <div className="line-dotted"></div>
      <br/>
      <div className="line-dotted_rect"></div>

      <TimerProvider time={2000}></TimerProvider>
      <TimerCountDown initCount={1001}></TimerCountDown>
      <div>
        <Link to="/home/welcome">welcome</Link><br />
        <Link to="/home/info">info</Link>
      </div>
      <KeepProvider>
        <SubRouterComponent routes={subRoutesList} parentPath={match.path}></SubRouterComponent>

      </KeepProvider>
    </div>
  }
}

function SubRouterComponent(props) {
  let { routes, parentPath = '' } = props;
  return <div className="sub-routes-view">
    {routes.map(item => {
      return <Route key={item.path} path={`${parentPath}${item.path}`}>
          <KeepAlive key={item.path} name={item.path}><div><item.component></item.component></div></KeepAlive>
        </Route>
    })}
  </div>
}
