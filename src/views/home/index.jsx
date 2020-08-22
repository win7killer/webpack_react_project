import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { hocLoadable } from '@/router/conf';

import { TimerProvider } from '@/components/timer';
import MainNavBar from '@/components/navbar';
import './index.less';


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
    let { subRoutesMap } = this.props;
    let subRoutesList = Object.values(subRoutesMap);

    return <div className="home-base-page">
      <MainNavBar></MainNavBar>
      <h1>home base page</h1>

      <TimerProvider></TimerProvider>

      <div>
        <Link to="/home/welcome">welcome</Link><br/>
        <Link to="/home/info">info</Link>
      </div>
      <div className="home-router-view">
        {/* {match.pathname} */}
      <BrowserRouter basename="/home">
        {/* <Switch> */}
          {
            subRoutesList.map(item => {
              console.log(item.component)
              return <Route key={item.path} path={item.path} component={item.component}></Route>
            })
          }
          <Route key={subRoutesList[0].path} path={subRoutesList[0].path} component={subRoutesList[0].component}></Route>
          <Route key={subRoutesList[1].path} path={subRoutesList[1].path} component={subRoutesList[1].component}></Route>
        {/* </Switch> */}
      </BrowserRouter>

      </div>
    </div>
  }
}
