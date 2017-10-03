import React, { Component } from 'react';

const HeaderNavItem = (props) => {
	return(
		<li className="">
			<a href={props.path}>{props.name}</a>
		</li>
	);
}

export default HeaderNavItem;