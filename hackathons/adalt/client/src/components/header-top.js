import React, { Component } from 'react';

import HeaderNavItem from './header-nav-item';
import Home from './home';
import News from './news';
import Research from './research';

const HeaderTop = () => {
	return(
		<div className="nav">
                     <header className="nav">
                            <div className="container">
                                   <div className="nav-left">
                                          <a className="nav-item">
                                                 <img src="" alt="Logo" />
                                          </a>
                                   </div>
                            </div>
                     </header>
              </div>
	);
}

export default HeaderTop;