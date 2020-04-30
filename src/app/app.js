import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BlockLayout from '../components/base-block/block-layout/block-layout';
import LayoutStore from '../store/layout';
import RouterStore from '../store/route'

import './app.scss';

class App extends Component {
  constructor(props) {
      super(props);

      this.storage = {
          get: (key) => (key ? this.state[key] || null : this.state),
          set: (state, callback) => { this.setState(state, callback); },
          update: () => { this.forceUpdate(); },
      };

      const route = (path, layout, exact = true) => ({path, layout, exact});

      this.routes = [
          route(RouterStore.website.index, LayoutStore.general.index),
          route(RouterStore.website.login, LayoutStore.general.login),
          route(RouterStore.website.register, LayoutStore.general.register),
          route(RouterStore.website.home, LayoutStore.general.home),
      ];
  }

  render() {
      const routeRender = (layout) => (props) => <BlockLayout {...props} storage={this.storage} layout={layout} />;
      const routes = this.routes.map((route, idx) => {
          const { path, layout, exact } = route;
          return <Route key={idx} path={path} exact={exact} render={routeRender(layout)} />;
      });
      return (
          <BrowserRouter>
              <div className="component-app">
                  <Switch>
                      { routes }
                  </Switch>
              </div>
          </BrowserRouter>
      )
  }

}

export default App;
