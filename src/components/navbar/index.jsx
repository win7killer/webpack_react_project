import React, { useEffect, useContext } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { routesMap } from '@/router';
import CommonStateContext from '@/components/common/CommonStateContext';

import './index.less';

const NavMap = {
  ...routesMap,
};


function MainNavBar (props) {

  let { match } = props;
  let context = useContext(CommonStateContext);

  useEffect(() => {
    console.log('MainNavBar props', props, context)
    // console.log('this.context', this.context)
  }, [props]);

  return <div className="component-main_nav_bar">
    {
      Object.values(NavMap).map(item => {
        // console.log(item.path)
        if (Array.isArray(item.path)) {
          return item.path
            .filter(em => em === `/${item.name}`)
            .map(em => <OneNavLink item={item} path={em} key={item.name}></OneNavLink>);
        } else {
          return <OneNavLink item={item} key={item.name}></OneNavLink>
        }
      })
    }
  </div>
}


function OneNavLink(props) {
  let { item, path = item.path } = props;
  return <NavLink key={item.name}
    to={path}
    isActive={(...rest) => isActive(item, ...rest, )}
    className="nav-item"
    activeClassName="nav-active">{item.name}</NavLink>
}

function isActive(item, match, location) {
  // console.log(' item: %o;\n match: %o\n location: %o', item, match, location)
  return match || item.path?.some?.(em => em === location.pathname);
}

export default withRouter(MainNavBar);
