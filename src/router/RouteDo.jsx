import React, { useEffect } from 'react';

import { Route } from 'react-router-dom';

console.infoshow = function(...rest) {
  let str = '%c';
  rest.forEach(em => {
    str += typeof em === 'string'
      ? '%s'
        : typeof em === 'number'
          ? '%d'
          : '%o'
  })

  console.info(str, 'background: #dfd; border: 3px dotted #f90; padding: 10px 20px; font-size: 20px; ', ...rest)
}

let RouteCacheState = {
  from : '',
  current: '',
}
let RouteCacheStateFrom = '';

export function RouteDo(props) {

  console.log(props);

  return <Route {...props}>
    {pro => <RouteChildren {...props} {...pro}></RouteChildren>}
  </Route>

}

function RouteChildren(props) {
  // keep-alive
  // hooks
  console.log(props);


  useEffect(() => {
    // console.info('RouteCacheState.from =====> ', RouteCacheState.from, );
    // console.info('RouteCacheState.old_current =====> ', RouteCacheState.current, );

    // RouteCacheState.current = props.match.path;
    // console.info('RouteCacheState.new_current =====> ', RouteCacheState.current, );
    console.info('%c  RouteCacheState ===> from %o to %o ', 'background-color: #9f9', RouteCacheStateFrom, props.match.path, props);
    console.infoshow('emit beforeEnter',);


    return () => {
      // RouteCacheState.from = RouteCacheState.current;
      // console.info('leave RouteCacheState.current =====> ', RouteCacheState.current, );
      // RouteCacheState.current = '';
      // console.info('leave RouteCacheState.from =====> ', RouteCacheState.from, );
      RouteCacheStateFrom = props.match.path;
      console.infoshow('emit afterLeave ', props)

    }
  }, [])

  return props.children({...props }) || <props.component {...props}></props.component>;

}
