import React, { Component } from 'react';

import HeaderNav from './header-nav';
import HeaderTop from './header-top';
import HeaderBody from './header-body';

const Header = () => {
	return(
		<section className="hero is-dark is-bold">
			<HeaderTop />
			<HeaderBody />
			<HeaderNav />
		</section>
	);
}

export default Header;