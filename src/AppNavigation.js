import React from 'react';
import { NavLink } from 'react-router-dom';

const AppNavigation = () => (
  <aside>
    <nav>
      <ul className="nav nav-pills nav-stacked">
        <li>
          <NavLink
            to={{ pathname: '/tasks', state: { setFocus: true } }}
            activeClassName="active">
            Tasks
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{ pathname: '/task', state: { setFocus: true } }}
            activeClassName="active">
            Add task
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
