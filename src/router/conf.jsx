import React from 'react';
import Loadable from 'react-loadable';

const Loading = function () {
  return <div className="loading-box">loading</div>
}

export function hocLoadable(opts = {}) {
  let { loader } = opts;
  // loader: () => import(/* webpackChunkName: "home" */ '@/views/home')
  return Loadable({
    loader: loader,
    loading: Loading,
    delay: 3,
    timeout: 1000,
  })
}

export function hocLoadableByFilePath(opts = {}) {
  let { loader } = opts;
  // loader: () => import(/* webpackChunkName: "home" */ '@/views/home')
  return Loadable({
    loader: () => import(`${opts.filePath}`),
    loading: Loading,
    delay: 3,
    timeout: 1000,
  })
}
