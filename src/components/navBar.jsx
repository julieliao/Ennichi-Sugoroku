// a.k.a Header

import React, { Component } from 'react';
import { HashRouter, BrowserRouter, Route, NavLink } from 'react-router-dom';

import '../css/style.css';

import navTop from '../img/navTop.svg';

import ScrollToTop from './ScrollToTop';

import Intro from '../containers/intro';
import Game from '../containers/game';
import Character from '../containers/character';
import Ranking from '../containers/ranking';

const NavBar = () => {
  return (
    <HashRouter> {/* 如果用 BrowserRouter 要加 basename={'/Ennichi-Sugoroku'} */}
      <nav>
        <div className='navItem'>
          <NavLink to='/'></NavLink>
          <img src={ navTop } />
        </div>
      </nav>
      <ScrollToTop>
        <Route exact path='/' render={ () => <Intro /> } />
        <Route path='/character' render={ () => <Character /> } />
        <Route path='/game' render={ () => <Game /> } />
        <Route path='/ranking' render={ () => <Ranking /> } />
      </ScrollToTop>
    </HashRouter>
  )
}

export default NavBar;