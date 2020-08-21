import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { hocLoadable } from '../../router/conf';

import { MainNavBar } from '../../components/navbar';
import './index.less';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.group('Home: ')
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
      <div className="home-router-view">
        {/* {match.pathname} */}
      <BrowserRouter basename="/home">
        <Switch>
          {
            subRoutesList.map(item => {
              console.log('home subroutes', item)
              return <Route key={item.path} path={item.path} component={item.component}></Route>
            })
          }
        </Switch>
      </BrowserRouter>

      </div>
    </div>
  }
}
