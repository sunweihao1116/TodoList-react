import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom'; 
import './index.css';
import rem from './utils/rem';
import Home from './pages/home/home';
import User from './pages/user/user';
import * as serviceWorker from './serviceWorker';
rem();

const RouterConfig = () => (
  <div id="app">
    <main className="content">
      <Route path="/" exact component={Home} />
      <Route path="/user" component={User} />
    </main>
  </div>
  // <Switch>
  //   <Route path="/" exact component={App}/>
  //   <Route path="/home" component={Home}></Route>
  //   <Route path='/user' component={User}></Route>
  //   <Redirect to="/"/>
  // </Switch>
)
ReactDOM.render((
  <HashRouter>
    <RouterConfig />
  </HashRouter>
)
, document.getElementById('root'));
// ReactDOM.render(<Home date={ new Date() } />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
