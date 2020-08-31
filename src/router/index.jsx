import React from 'react';
import { Route as SourceRoute, Switch, BrowserRouter, Redirect, } from 'react-router-dom';
import { hocLoadable, hocLoadableByFilePath } from './conf';
import { RouteDo as Route } from './RouteDo';
// import Welcome from '@/views/home/welcome';
// import Info from '@/views/home/info';

export let routesMap = {
  home: {
    path: ['/index', '/home'],
    name: 'home',
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
      },
      info: {
        path: '/info',
        component: hocLoadable({
          loader: () => import(/* webpackChunkName: "home.info" */ '@/views/home/info'),
        }),
        // component: Info,
      }
    }
  },
  postDetail: {
    path: '/post/detail',
    name: 'detail',
    component: hocLoadable({
      loader: () => import(/* webpackChunkName: "post" */ '@/views/post/Detail'),
    }),
  },
  post: {
    path: '/post',
    name: 'post',
    component: hocLoadable({
      loader: () => import(/* webpackChunkName: "post" */ '@/views/post'),
    }),
  },
  about: {
    path: '/about',
    name: 'about',
    component: hocLoadable({
      loader: () => import(/* webpackChunkName: "about" */ '@/views/about'),
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
          return <Route path={item.path}
            name={item.name}
            key={item.path}
            children={(props) => {
              return <item.component {...props} subRoutesMap={item.subRoutesMap}></item.component>
            }}
          ></Route>
        })}

        <Route path="/404"></Route>
        <Redirect to="/home" path="/"></Redirect>

      </Switch>
    </BrowserRouter>
  </div>
}
