import React from 'react';
import { NavLink } from 'react-router-dom';

const AppNavigation = () => (
  <aside>
    <nav>
      <ul className="nav nav-pills nav-stacked">
        <li>
          <NavLink
            to={{ pathname: '/todos', state: { setFocus: true } }}
            activeClassName="active">
            Todos
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{ pathname: '/todo', state: { setFocus: true } }}
            activeClassName="active">
            Add todo
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{ pathname: '/contact', state: { setFocus: true } }}
            activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  </aside>
);

export default AppNavigation;
