import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch, BrowserRouter, Redirect, } from 'react-router-dom';
import { hocLoadable } from './conf';

import Welcome from '@/views/home/welcome';

const Loading = function () {
  return <div className="loading-box">loading</div>
}

let routesMap = {
  home: {
    path: '/home',
    component: hocLoadable({
      loader: () => import(/* webpackChunkName: "home" */ '@/views/home'),
    }),
    subRoutesMap: {
      welcome: {
        path: '/welcome',
        component: hocLoadable({
          loader: () => import(/* webpackChunkName: "home.welcome" */ '@/views/home/welcome'),
        }),
        // component: Welcome
      }
    }
  },
  post: {
    path: '/post',
    component: Loadable({
      loader: () => import(/* webpackChunkName: "post" */ '@/views/post'),
      loading: Loading
    }),
  },
  about: {
    path: '/about',
    component: Loadable({
      loader: () => import(/* webpackChunkName: "about" */ '@/views/about'),
      loading: Loading
    }),
  },
};

let routerConf = {
  baseUrl: '/',
  routes: [
    ...Object.values(routesMap),
  ],
};

export default function RootRoutes() {
  return <div className="router-views">
    <BrowserRouter>
      <Switch>
        {routerConf.routes.map(item => {
          console.log(item)
          return <Route path={item.path}
            name={item.name}
            key={item.path}
            children={(props) => {
              return <item.component {...props} subRoutesMap={item.subRoutesMap}></item.component>
            }}
          // children={item.component}
          ></Route>
        })}

        <Route path="/404"></Route>
        <Redirect path="*" to="/404"></Redirect>
      </Switch>
    </BrowserRouter>
  </div>
}
