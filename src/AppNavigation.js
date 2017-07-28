import React from 'react';
import { NavLink } from 'react-router-dom';

const AppNavigation = () =>
  <aside>
    <nav>
      <ul className="nav nav-pills nav-stacked">
        <li>
          <NavLink to="/todos" activeClassName="active">
            {' '}Todos
          </NavLink>
        </li>
        <li>
          <NavLink to="/todo" activeClassName="active">
            Add todo
          </NavLink>
        </li>
      </ul>
    </nav>
  </aside>;

export default AppNavigation;
