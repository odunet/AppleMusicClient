import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import AlbumPage from '../topAlbum/AlbumPage';
import MusicPage from '../topMusic/MusicPage';
import { Nav, NavUl, NavLi } from '../../styledComponents';

export default function Header() {
  return (
    <Router>
      <div>
        <Nav>
          <NavUl>
            <NavLi>
              <NavLink
                style={{ textDecoration: 'none' }}
                activeClassName='selected'
                to='/album'
              >
                Top Albums
              </NavLink>
            </NavLi>
            <NavLi>
              <NavLink
                style={{ textDecoration: 'none' }}
                activeClassName='selected'
                to='/songs'
              >
                Top Songs
              </NavLink>
            </NavLi>
          </NavUl>
        </Nav>

        <hr />

        {/*
              A <Switch> looks through all its children <Route>
              elements and renders the first one whose path
              matches the current URL. Use a <Switch> any time
              you have multiple routes, but you want only one
              of them to render at a time
            */}
        <Switch>
          <Route exact path='/album' component={AlbumPage}></Route>
          <Route path='/songs'>
            <MusicPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
