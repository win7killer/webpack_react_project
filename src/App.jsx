import React from 'react';
import RootRoutes from './router';

import './App.less';

/**
 * 1. Router
 * 2. Store
 * 3. common state
 * 4. keep-alive
 */

export default function App(props) {
  return <div id="app " className="app">
    <RootRoutes>

    </RootRoutes>
  </div>
}
