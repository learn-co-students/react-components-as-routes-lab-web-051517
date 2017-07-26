import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import { BrowserRouter as Router, Route, NavLink, Link} from 'react-router-dom';


render (
  <App />,
  document.getElementById('root')
);
